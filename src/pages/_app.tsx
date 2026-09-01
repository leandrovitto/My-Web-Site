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
        <div className="fixed bottom-0 left-4 text-xs text-gray-500 font-semibold">
          v.{packageJson?.version}|Updated @06/2026
        </div>
      </AnimatePresence>
    </ThemeProvider>
  );
}
