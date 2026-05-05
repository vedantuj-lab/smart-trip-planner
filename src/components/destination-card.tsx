import { ArrowUpRight } from "lucide-react";

interface Props {
  name: string;
  country: string;
  price: number;
  img: string;
  tag: string;
}

export function DestinationCard({ name, country, price, img, tag }: Props) {
  return (
    <article className="group relative overflow-hidden rounded-3xl shadow-soft transition-smooth hover:shadow-elegant">
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={img}
          alt={`${name}, ${country}`}
          width={1024}
          height={1280}
          loading="lazy"
          className="h-full w-full object-cover transition-smooth duration-700 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
      <div className="absolute left-5 top-5">
        <span className="rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
          {tag}
        </span>
      </div>
      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between text-primary-foreground">
        <div>
          <p className="text-xs uppercase tracking-widest opacity-80">{country}</p>
          <h3 className="mt-1 text-2xl font-semibold">{name}</h3>
          <p className="mt-1 text-sm opacity-90">From <span className="font-bold">${price}</span></p>
        </div>
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-card/95 text-primary transition-smooth group-hover:bg-accent group-hover:text-accent-foreground">
          <ArrowUpRight className="h-5 w-5" />
        </div>
      </div>
    </article>
  );
}
