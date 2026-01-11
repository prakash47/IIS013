"use client";

import { motion } from "framer-motion";

type AnimationType = "fade-up" | "fade-in" | "scale-up" | "slide-right" | "slide-left";

export default function AnimationWrapper({
    children,
    className = "",
    animation = "fade-up",
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    animation?: AnimationType;
    delay?: number;
}) {
    const variants = {
        "fade-up": {
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
        },
        "fade-in": {
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
        },
        "scale-up": {
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
        },
        "slide-right": {
            hidden: { opacity: 0, x: -40 },
            visible: { opacity: 1, x: 0 },
        },
        "slide-left": {
            hidden: { opacity: 0, x: 40 },
            visible: { opacity: 1, x: 0 },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants[animation]}
            transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
