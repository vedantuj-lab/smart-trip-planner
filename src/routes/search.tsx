import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Plane, Hotel, TrainFront, Star, Clock, MapPin, ArrowRight, SlidersHorizontal } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SearchWidget } from "@/components/search-widget";
import { flights, hotels, trains } from "@/lib/mock-data";

type SearchParams = { mode?: "flights" | "hotels" | "trains"; from?: string; to?: string; date?: string; guests?: string };

export const Route = createFileRoute("/search")({
  validateSearch: (s: Record<string, unknown>): SearchParams => ({
    mode: (s.mode as SearchParams["mode"]) ?? "flights",
    from: (s.from as string) ?? "",
    to: (s.to as string) ?? "",
    date: (s.date as string) ?? "",
    guests: (s.guests as string) ?? "1",
  }),
  component: SearchPage,
});

function SearchPage() {
  const { mode = "flights" } = Route.useSearch();
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState<"price" | "rating">("price");

  return (
    <div className="min-h-screen bg-background">
      {/* Compact hero with search */}
      <section className="relative bg-primary pb-16 pt-32 text-primary-foreground">
        <SiteNav />
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-3xl font-semibold md:text-4xl">Find your next trip</h1>
          <p className="mt-2 text-primary-foreground/75">Compare {mode} from across the web in seconds.</p>
          <div className="mt-8">
            <SearchWidget />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          {/* Filters */}
          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-soft lg:sticky lg:top-6">
            <div className="mb-4 flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-accent" />
              <h2 className="text-sm font-semibold uppercase tracking-widest">Filters</h2>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-sm font-medium">Max price</label>
                <input
                  type="range" min={50} max={1500} value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-2 w-full accent-[oklch(0.72_0.18_45)]"
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>$50</span><span className="font-semibold text-foreground">${maxPrice}</span>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Sort by</label>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {(["price", "rating"] as const).map((s) => (
                    <button key={s} onClick={() => setSort(s)}
                      className={`rounded-lg px-3 py-2 text-xs font-semibold capitalize transition-smooth ${sort === s ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground hover:bg-secondary/70"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">Amenities</p>
                <div className="mt-2 space-y-2">
                  {["Free WiFi", "Pool", "Pet friendly", "Breakfast"].map((a) => (
                    <label key={a} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <input type="checkbox" className="rounded border-border accent-[oklch(0.72_0.18_45)]" /> {a}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="space-y-4">
            {mode === "flights" && <FlightResults maxPrice={maxPrice} sort={sort} />}
            {mode === "hotels" && <HotelResults maxPrice={maxPrice} sort={sort} />}
            {mode === "trains" && <TrainResults maxPrice={maxPrice} sort={sort} />}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FlightResults({ maxPrice, sort }: { maxPrice: number; sort: string }) {
  const items = useMemo(() => {
    const f = flights.filter((x) => x.price <= maxPrice);
    return sort === "price" ? [...f].sort((a, b) => a.price - b.price) : f;
  }, [maxPrice, sort]);
  return (
    <>
      {items.map((f) => (
        <div key={f.id} className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-elegant">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-sunset text-primary-foreground">
                <Plane className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{f.airline}</p>
                <p className="text-xs text-muted-foreground">{f.stops === 0 ? "Non-stop" : `${f.stops} stop`}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 font-medium">
              <div className="text-center"><p className="text-xl">{f.depart}</p><p className="text-xs text-muted-foreground">{f.from}</p></div>
              <div className="flex flex-col items-center text-xs text-muted-foreground">
                <span>{f.duration}</span>
                <div className="my-1 h-px w-20 bg-border" />
                <Clock className="h-3 w-3" />
              </div>
              <div className="text-center"><p className="text-xl">{f.arrive}</p><p className="text-xs text-muted-foreground">{f.to}</p></div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold">${f.price}</p>
              <button className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-accent">
                Select <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function HotelResults({ maxPrice, sort }: { maxPrice: number; sort: string }) {
  const items = useMemo(() => {
    const f = hotels.filter((x) => x.price <= maxPrice);
    return sort === "price" ? [...f].sort((a, b) => a.price - b.price) : [...f].sort((a, b) => b.rating - a.rating);
  }, [maxPrice, sort]);
  return (
    <>
      {items.map((h) => (
        <div key={h.id} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-elegant">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-sunset text-primary-foreground">
                <Hotel className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">{h.name}</h3>
                <p className="flex items-center gap-1 text-sm text-muted-foreground"><MapPin className="h-3 w-3" /> {h.city}</p>
                <div className="mt-1 flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-semibold">{h.rating}</span>
                  <span className="text-muted-foreground">({h.reviews})</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {h.amenities.map((a) => (
                    <span key={a} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium">{a}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">per night</p>
              <p className="text-2xl font-semibold">${h.price}</p>
              <button className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-accent">
                Book <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

function TrainResults({ maxPrice, sort }: { maxPrice: number; sort: string }) {
  const items = useMemo(() => {
    const f = trains.filter((x) => x.price <= maxPrice);
    return sort === "price" ? [...f].sort((a, b) => a.price - b.price) : f;
  }, [maxPrice, sort]);
  return (
    <>
      {items.map((t) => (
        <div key={t.id} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-smooth hover:shadow-elegant">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-sunset text-primary-foreground">
                <TrainFront className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.class} class · {t.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-6 font-medium">
              <div className="text-center"><p className="text-xl">{t.depart}</p><p className="text-xs text-muted-foreground">{t.from}</p></div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
              <div className="text-center"><p className="text-xl">{t.arrive}</p><p className="text-xs text-muted-foreground">{t.to}</p></div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-semibold">${t.price}</p>
              <button className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-smooth hover:bg-accent">
                Reserve <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
