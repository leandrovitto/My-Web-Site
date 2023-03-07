import { motion } from "framer-motion";
import { FunctionComponent, ReactElement, ReactNode } from "react";

const variants = {
    hidden: { opacity: 0, x: 0, y: -400 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 200 },
};

type Props = {
    children: ReactNode;
}

const PageTransitionWrapper: FunctionComponent<Props> = ({
    children
}: Props): ReactElement => {

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            transition={{ type: "linear", duration: 0.45 }}
        >
            {children}
        </motion.div>
    );

}

export default PageTransitionWrapper;
