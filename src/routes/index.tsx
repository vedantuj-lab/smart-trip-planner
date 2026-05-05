import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ShieldCheck, Globe2, Zap, Star, TrendingDown, Bot } from "lucide-react";
import heroImg from "@/assets/hero-travel.jpg";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { SearchWidget } from "@/components/search-widget";
import { DestinationCard } from "@/components/destination-card";
import { destinations } from "@/lib/mock-data";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Tropical island at golden hour"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/40 to-primary/70" />
        </div>

        <SiteNav />

        <div className="mx-auto max-w-7xl px-6 pb-32 pt-40 md:pt-48">
          <div className="max-w-3xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary-foreground ring-1 ring-primary-foreground/20 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Smart travel, beautifully simple
            </span>
            <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] text-primary-foreground md:text-7xl">
              The world is closer <br />
              <em className="font-normal italic text-accent">than you think.</em>
            </h1>
            <p className="mt-6 max-w-xl text-balance text-lg text-primary-foreground/85">
              Search flights, hotels and trains in one place. Compare prices, unlock AI deals,
              and book in seconds.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl animate-fade-up" style={{ animationDelay: "120ms" }}>
            <SearchWidget />
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/80">
            {[
              { icon: ShieldCheck, label: "Bank-grade security" },
              { icon: Zap, label: "Instant confirmation" },
              { icon: Globe2, label: "150+ countries" },
              { icon: Star, label: "4.9 / 5 traveler rating" },
            ].map(({ icon: I, label }) => (
              <div key={label} className="flex items-center gap-2">
                <I className="h-4 w-4 text-accent" /> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-accent">Trending now</p>
            <h2 className="mt-2 text-4xl font-semibold md:text-5xl">Where stories begin.</h2>
          </div>
          <Link to="/search" className="hidden text-sm font-semibold text-primary underline-offset-4 hover:underline md:block">
            Browse all destinations →
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((d) => (
            <DestinationCard key={d.id} {...d} />
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Why Voyagr</p>
              <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
                Travel intelligence,{" "}
                <em className="font-normal italic text-accent">on your side.</em>
              </h2>
              <p className="mt-6 max-w-md text-primary-foreground/75">
                Our AI watches prices around the clock, finds smart routes, and suggests stays
                tailored to how you travel. You just pack.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: Bot, title: "AI recommendations", desc: "Personalized hotel & flight picks based on your taste." },
                { icon: TrendingDown, title: "Price predictions", desc: "Know the best time to book. Save up to 40%." },
                { icon: Sparkles, title: "Smart itineraries", desc: "Auto-built trip plans combining flights & stays." },
                { icon: ShieldCheck, title: "Secure checkout", desc: "Encrypted payments with fraud protection." },
              ].map(({ icon: I, title, desc }) => (
                <div key={title} className="rounded-2xl bg-primary-foreground/5 p-6 ring-1 ring-primary-foreground/10 transition-smooth hover:bg-primary-foreground/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-sunset">
                    <I className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-1.5 text-sm text-primary-foreground/70">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-sunset p-12 text-center shadow-elegant md:p-20">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <h2 className="relative text-balance text-4xl font-semibold text-primary-foreground md:text-5xl">
            Your next chapter <em className="italic">awaits.</em>
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/90">
            Join 2M+ travelers who trust Voyagr. Sign up and get $25 off your first booking.
          </p>
          <button className="relative mt-8 rounded-full bg-card px-8 py-4 text-base font-semibold text-primary shadow-soft transition-smooth hover:scale-105">
            Create your free account
          </button>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
