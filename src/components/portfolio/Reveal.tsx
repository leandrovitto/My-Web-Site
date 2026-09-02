import { motion, useReducedMotion } from "framer-motion";
import { ReactElement, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps): ReactElement {
  const reduceMotion = useReducedMotion();

  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 14 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.42, delay, ease: [0.16, 1, 0.3, 1] }}>
    {children}
  </motion.div>;
}
