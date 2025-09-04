'use client';
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, CSSProperties } from "react";

export default function AnimatedFadeInUp({
  children,
  delay = 0,
  y = 150,
  style,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, delay }}
      variants={{
        hidden: { opacity: 0, y: y },
        visible: { opacity: 1, y: 0 },
      }}
      className={`relative overflow-hidden h-full ${className}`}
      style={style}
    >
      {children}
    </motion.div>
  );
}
