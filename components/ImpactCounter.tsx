"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, label }: { value: number; label: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: 3000,
    });

    const displayValue = useTransform(springValue, (current) => Math.round(current));
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        // Sync motion value to state to render it
        const unsubscribe = displayValue.on("change", (latest) => {
            setDisplay(latest);
        });
        return () => unsubscribe();
    }, [displayValue]);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-xl hover:scale-105 transition-transform">
            <motion.span
                className="text-6xl font-black text-brand-600 dark:text-brand-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
                {display}+
            </motion.span>
            <span className="mt-2 text-xl font-medium text-gray-600 dark:text-gray-300">{label}</span>
        </div>
    );
}

export default function ImpactCounter() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl mx-auto">
            <Counter value={500} label="Girls Educated" />
            <Counter value={120} label="Scholarships" />
            <Counter value={30} label="Villages Reached" />
            <Counter value={50} label="Volunteers" />
        </div>
    );
}
