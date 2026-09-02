import { ReactElement } from "react";

export type TimelineEntry = {
  date: string;
  title: string;
  description?: string;
  source?: string;
};

type TimelineProps = { entries: TimelineEntry[] };

export default function Timeline({ entries }: TimelineProps): ReactElement {
  return (
    <ol className="border-l border-[var(--line)]">
      {entries.map((entry) => (
        <li key={`${entry.date}-${entry.title}`} className="relative ml-5 border-b border-[var(--line)] py-5 last:border-b-0">
          <span aria-hidden="true" className="absolute -left-[25px] top-7 size-2.5 rounded-full bg-[var(--signal)] ring-4 ring-[var(--surface)]" />
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted)]">{entry.date}</p>
          <h3 className="mt-2 font-mono text-lg font-semibold">{entry.title}</h3>
          {entry.source && <p className="mt-1 text-sm text-[var(--muted)]">{entry.source}</p>}
          {entry.description && <p className="mt-3 whitespace-pre-line leading-7 text-[var(--muted)]">{entry.description.replace(/<br\s*\/?>(\s*)/gi, "\n").replace(/<[^>]+>/g, "")}</p>}
        </li>
      ))}
    </ol>
  );
}
