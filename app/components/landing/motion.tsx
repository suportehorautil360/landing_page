"use client";

import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { type ReactNode } from "react";

export const easeOut = [0.22, 1, 0.36, 1] as const;

export const defaultViewport = { once: true, margin: "-80px" as const };

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

type Direction = "up" | "left" | "right" | "scale";

const directionVariants: Record<Direction, Variants> = {
  up: fadeInUp,
  left: fadeInLeft,
  right: fadeInRight,
  scale: scaleIn,
};

type FadeInProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  immediate?: boolean;
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  immediate = false,
  className,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: defaultViewport })}
      variants={directionVariants[direction]}
      transition={{ duration: 0.65, delay, ease: easeOut }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  immediate?: boolean;
};

export function Stagger({
  children,
  immediate = false,
  className,
  ...props
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      {...(immediate
        ? { animate: "visible" }
        : { whileInView: "visible", viewport: defaultViewport })}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function StaggerItem({ children, className, ...props }: StaggerItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ duration: 0.55, ease: easeOut }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type HoverLiftProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function HoverLift({ children, className, ...props }: HoverLiftProps) {
  return (
    <motion.div
      whileHover={{ y: -6, transition: { duration: 0.25, ease: easeOut } }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { motion };
