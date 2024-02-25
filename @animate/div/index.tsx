import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

const variantContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const variantRow = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

function Container({ children }: PropsWithChildren) {
  return (
    <motion.div
      variants={variantContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

function Row({ children, key }: { children: JSX.Element; key?: number }) {
  return (
    <motion.div
      variants={variantRow}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export const AnimateDiv = {
  Container,
  Row,
};
