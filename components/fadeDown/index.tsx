import clsx from "clsx";
import { motion } from "framer-motion";

type FadeDownProps = {
  children: React.ReactNode;
  className?: string;
  css?: React.CSSProperties;
};

export function FadeDown({ children, className, css }: FadeDownProps) {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className={className}
      style={css}
    >
      <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
        {children}
      </motion.div>
    </motion.div>
  );
}