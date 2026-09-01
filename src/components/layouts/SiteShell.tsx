import { FunctionComponent, ReactElement, ReactNode } from 'react';
import Footer from './Footer';
import { Navbar } from './navbar/Navbar';

type SiteShellProps = {
    children: ReactNode;
};

const SiteShell: FunctionComponent<SiteShellProps> = ({ children }: SiteShellProps): ReactElement => (
    <div className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
        <a
            href="#main-content"
            className="sr-only z-50 rounded-md bg-[var(--accent)] px-4 py-2 font-mono text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-[var(--signal)]"
        >
            Salta al contenuto
        </a>
        <header className="sticky top-0 z-10 border-b border-[var(--line)] bg-[var(--surface)]/95 backdrop-blur-sm">
            <Navbar />
        </header>
        <main id="main-content" className="font-sans">
            {children}
        </main>
        <Footer />
    </div>
);

export default SiteShell;
