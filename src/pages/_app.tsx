import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import "react-tooltip/dist/react-tooltip.css";
import { AnimatePresence } from "framer-motion";
import { VisitedProvider } from "@/context/visited/visited.context";
import packageJson from "../../package.json";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class" defaultTheme="light">
      <AnimatePresence>
        <VisitedProvider>
          <Component {...pageProps} />
        </VisitedProvider>
        <span className="fixed bottom-3 left-3 z-20 border border-[var(--line)] bg-[var(--surface-raised)] px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.08em] text-[var(--muted)]">
          v{packageJson.version}
        </span>
      </AnimatePresence>
    </ThemeProvider>
  );
}
