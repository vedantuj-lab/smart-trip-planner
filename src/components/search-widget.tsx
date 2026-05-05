import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Plane, Hotel, TrainFront, MapPin, Calendar, Users, Search } from "lucide-react";

type Mode = "flights" | "hotels" | "trains";

const tabs: { id: Mode; label: string; icon: typeof Plane }[] = [
  { id: "flights", label: "Flights", icon: Plane },
  { id: "hotels", label: "Hotels", icon: Hotel },
  { id: "trains", label: "Trains", icon: TrainFront },
];

export function SearchWidget() {
  const [mode, setMode] = useState<Mode>("flights");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("1");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/search", search: { mode, from, to, date, guests } as never });
  };

  const fromLabel = mode === "hotels" ? "Destination" : "From";
  const toLabel = mode === "hotels" ? "Check-out" : "To";

  return (
    <div className="w-full rounded-3xl bg-card/95 p-3 shadow-elegant backdrop-blur-xl ring-1 ring-border/50">
      <div className="flex gap-1 px-1 pt-1">
        {tabs.map((t) => {
          const Icon = t.icon;
          const active = mode === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setMode(t.id)}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-smooth ${
                active
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "text-muted-foreground hover:bg-secondary"
              }`}
            >
              <Icon className="h-4 w-4" /> {t.label}
            </button>
          );
        })}
      </div>

      <form onSubmit={submit} className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-[1.2fr_1.2fr_1fr_0.8fr_auto]">
        <Field icon={MapPin} label={fromLabel} value={from} onChange={setFrom} placeholder={mode === "hotels" ? "Where to?" : "City or airport"} />
        <Field icon={mode === "hotels" ? Calendar : MapPin} label={toLabel} value={to} onChange={setTo} placeholder={mode === "hotels" ? "Add date" : "City or airport"} />
        <Field icon={Calendar} label={mode === "hotels" ? "Check-in" : "Departure"} value={date} onChange={setDate} placeholder="Add date" type="date" />
        <Field icon={Users} label={mode === "hotels" ? "Guests" : "Travelers"} value={guests} onChange={setGuests} placeholder="1" type="number" />
        <button
          type="submit"
          className="group flex items-center justify-center gap-2 rounded-2xl bg-gradient-sunset px-7 py-4 text-base font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-[1.02]"
        >
          <Search className="h-5 w-5" />
          <span className="hidden sm:inline">Search</span>
        </button>
      </form>
    </div>
  );
}

function Field({
  icon: Icon, label, value, onChange, placeholder, type = "text",
}: {
  icon: typeof MapPin; label: string; value: string; onChange: (v: string) => void; placeholder: string; type?: string;
}) {
  return (
    <label className="group flex flex-col gap-1 rounded-2xl bg-secondary/60 px-4 py-3 transition-smooth focus-within:bg-secondary focus-within:ring-2 focus-within:ring-accent/40">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3 w-3" /> {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent text-sm font-medium text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
      />
    </label>
  );
}
