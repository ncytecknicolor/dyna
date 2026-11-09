import { Plus } from 'lucide-react';

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-grafito/10 overflow-hidden rounded-2xl border border-black/10 bg-white">
      {items.map(({ q, a }) => (
        <details key={q} className="group p-6 open:bg-niebla/70">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-azul [&::-webkit-details-marker]:hidden">
            {q}
            <Plus className="shrink-0 text-naranja transition-transform duration-300 group-open:rotate-45" />
          </summary>
          <p className="mt-3 max-w-3xl text-grafito/85">{a}</p>
        </details>
      ))}
    </div>
  );
}
