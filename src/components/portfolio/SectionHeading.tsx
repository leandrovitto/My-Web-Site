import { ReactElement, ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  as?: "h1" | "h2";
};

export default function SectionHeading({
  eyebrow,
  title,
  children,
  as: Heading = "h2",
}: SectionHeadingProps): ReactElement {
  return (
    <header className="mb-8 max-w-3xl">
      {eyebrow && <p className="mb-2 font-mono text-sm font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">{eyebrow}</p>}
      <Heading className="font-mono text-3xl font-semibold tracking-tight text-[var(--ink)] sm:text-4xl">{title}</Heading>
      {children && <div className="mt-3 text-base leading-7 text-[var(--muted)]">{children}</div>}
    </header>
  );
}
