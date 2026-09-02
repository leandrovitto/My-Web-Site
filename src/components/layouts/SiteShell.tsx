import useTranslation from 'next-translate/useTranslation';
import { FunctionComponent, ReactElement, ReactNode } from 'react';
import Footer from './Footer';
import { Navbar } from './navbar/Navbar';

type SiteShellProps = {
    children: ReactNode;
};

const SiteShell: FunctionComponent<SiteShellProps> = ({ children }: SiteShellProps): ReactElement => {
    const { t } = useTranslation('common');

    return <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
        <a
             href="#main-content"
            onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    document.getElementById("main-content")?.focus();
                }
            }}
            className="sr-only z-50 rounded-md bg-[var(--accent)] px-4 py-2 font-mono text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-[var(--signal)]"
        >
            {t('accessibility.skip_to_content')}
        </a>
        <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--surface)]/95 backdrop-blur-sm">
            <Navbar />
        </header>
        <main id="main-content" tabIndex={-1} className="font-sans">
            {children}
        </main>
        <Footer />
    </div>;
};

export default SiteShell;
