import { Link } from "@tanstack/react-router";
import { Compass, Menu } from "lucide-react";
import { useState } from "react";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "/", label: "Home" },
    { to: "/search", label: "Explore" },
  ] as const;

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link to="/" className="flex items-center gap-2 text-primary-foreground">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-sunset shadow-glow">
            <Compass className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </div>
          <span className="text-xl font-semibold tracking-tight">Voyagr</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-primary-foreground/85 transition-smooth hover:text-primary-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-full px-4 py-2 text-sm font-medium text-primary-foreground/90 transition-smooth hover:text-primary-foreground">
            Sign in
          </button>
          <button className="rounded-full bg-primary-foreground px-5 py-2 text-sm font-semibold text-primary shadow-soft transition-smooth hover:scale-105">
            Get started
          </button>
        </div>

        <button
          aria-label="Menu"
          className="rounded-lg p-2 text-primary-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="mx-6 rounded-2xl bg-card p-4 shadow-elegant md:hidden">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="block px-3 py-2 text-sm font-medium">
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
