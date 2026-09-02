import { ReactElement } from "react";
import Reveal from "./Reveal";

export type PortfolioMetric = {
  label: string;
  value: string;
};

type MetricStripProps = {
  metrics: PortfolioMetric[];
};

export default function MetricStrip({ metrics }: MetricStripProps): ReactElement {
  return (
    <dl className="grid border border-[var(--line)] bg-[var(--surface-raised)] sm:grid-cols-3">
      {metrics.map((metric, index) => (
        <Reveal key={metric.label} delay={index * 0.07} className="border-b border-[var(--line)] last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
        <div className="p-5">
          <dt className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--muted)]">{metric.label}</dt>
          <dd className="mt-2 font-mono text-xl font-semibold text-[var(--ink)]">{metric.value}</dd>
        </div>
        </Reveal>
      ))}
    </dl>
  );
}
