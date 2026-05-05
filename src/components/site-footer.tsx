import { Compass } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-sunset">
              <Compass className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-semibold">Voyagr</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Smart travel booking for the modern explorer. Flights, hotels, and trains — unified.
          </p>
        </div>
        {[
          { title: "Product", items: ["Flights", "Hotels", "Trains", "Deals"] },
          { title: "Company", items: ["About", "Careers", "Press", "Contact"] },
          { title: "Support", items: ["Help center", "Cancellation", "Refunds", "Status"] },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-foreground">{col.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
              {col.items.map((i) => (
                <li key={i} className="cursor-pointer transition-smooth hover:text-foreground">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Voyagr. Crafted for travelers.
      </div>
    </footer>
  );
}
