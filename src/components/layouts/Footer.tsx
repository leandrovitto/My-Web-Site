import CvDownload from "@/components/portfolio/CvDownload";
import { Routes } from "@/routes";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { ReactElement } from "react";
import SocialBar from "./SocialBar";

export default function Footer(): ReactElement {
  const { t } = useTranslation("common");
  const navigation = [
    { href: Routes.work, label: t("menu.work"), code: "01" },
    { href: Routes.profile, label: t("menu.profile"), code: "02" },
  ];

  return (
    <footer aria-labelledby="footer-heading" className="border-t border-[var(--line)] bg-[var(--surface-raised)]">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.4fr_0.6fr] lg:px-10">
        <section>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--accent)]">Leandro Vitto / Software systems</p>
          <p className="mt-4 max-w-xl font-mono text-xl font-semibold leading-8 tracking-[-0.03em] text-[var(--ink)]">{t("footer.message")}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CvDownload className="!rounded-none !px-3 !py-2.5 !text-xs" />
            <SocialBar />
          </div>
        </section>
        <section className="border-l border-[var(--line)] pl-6">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Navigation</p>
          <ul className="mt-4 list-none !ml-0">
            {navigation.map((item) => <li key={item.href} className="border-t border-[var(--line)] last:border-b">
              <Link href={item.href} className="flex items-center justify-between py-3 font-mono text-sm font-semibold text-[var(--ink)] transition-colors hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
                {item.label}<span className="text-xs text-[var(--muted)]">{item.code}</span>
              </Link>
            </li>)}
          </ul>
        </section>
      </div>
      <div className="border-t border-[var(--line)]">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-5 py-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--muted)] sm:px-8 lg:px-10">
          <span>&copy; {new Date().getFullYear()} Leandro Vitto</span>
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </footer>
  );
}
