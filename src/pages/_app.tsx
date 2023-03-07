import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes';
import '@/styles/globals.css'
import 'react-tooltip/dist/react-tooltip.css'
import { AnimatePresence } from "framer-motion";
import { VisitedProvider } from '@/context/visited/visited.context';

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider enableSystem={true} attribute="class">
    <AnimatePresence>
      <VisitedProvider>
        <Component {...pageProps} />
      </VisitedProvider>
    </AnimatePresence>
  </ThemeProvider>
}
