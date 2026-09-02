import CvDownload from "@/components/portfolio/CvDownload";
import { Routes } from "@/routes";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import ChangeLanguage from "./ChangeLanguage";
import ThemeToggler from "./ThemeToggler";

type NavigationItem = { href: Routes; label: string; code: string };

export function Navbar(): ReactElement {
  const { t } = useTranslation("common");
  const { pathname } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation: NavigationItem[] = [
    { href: Routes.work, label: t("menu.work"), code: "01" },
    { href: Routes.profile, label: t("menu.profile"), code: "02" },
  ];

  return (
    <nav data-cy="main-nav" aria-label={t("navigation.primary")} className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
      <div className="flex min-h-16 items-center justify-between gap-3">
        <Link href={Routes.home} aria-label={t("navigation.logo")} className="group flex shrink-0 items-center gap-3 font-mono focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
          <span className="grid size-8 place-items-center border border-[var(--ink)] text-xs font-bold tracking-[-0.12em] transition-colors group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white">LV</span>
          <span className="hidden text-sm font-semibold tracking-[-0.04em] sm:block">LEANDRO VITTO</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => {
            const active = pathname === item.href;
            return <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined} className={`inline-flex items-center gap-2 border-b-2 px-3 py-5 font-mono text-xs font-semibold uppercase tracking-[0.1em] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--accent)] ${active ? "border-[var(--accent)] text-[var(--accent)]" : "border-transparent text-[var(--muted)] hover:border-[var(--line)] hover:text-[var(--ink)]"}`}>
              <span className="text-[10px] opacity-70">{item.code}</span>{item.label}
            </Link>;
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggler />
          <ChangeLanguage />
          <CvDownload className="!rounded-none !px-2.5 !py-2 !text-[11px]" />
        </div>

        <button type="button" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)} className="grid size-9 place-items-center border border-[var(--line)] font-mono text-[11px] font-semibold md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]">
          <span className="sr-only">{menuOpen ? t("navigation.close_menu") : t("navigation.open_menu")}</span>
          {menuOpen ? "CLOSE" : "MENU"}
        </button>
      </div>

      {menuOpen && <div id="mobile-navigation" className="border-t border-[var(--line)] py-4 md:hidden">
        <div className="grid gap-1">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-center justify-between border border-transparent px-3 py-3 font-mono text-sm font-semibold text-[var(--ink)] hover:border-[var(--line)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)]"><span>{item.label}</span><span className="text-xs text-[var(--muted)]">{item.code}</span></Link>)}
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-[var(--line)] pt-4">
          <ThemeToggler />
          <ChangeLanguage />
          <CvDownload className="!ml-auto !rounded-none !px-2.5 !py-2 !text-[11px]" />
        </div>
      </div>}
    </nav>
  );
}
