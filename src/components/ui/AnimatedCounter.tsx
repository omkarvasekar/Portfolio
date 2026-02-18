import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    decimals?: number;
    duration?: number;
}

export default function AnimatedCounter({ value, suffix = '', decimals = 0, duration = 1500 }: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView || !ref.current) return;
        const start = 0;
        const startTime = performance.now();

        const update = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = start + (value - start) * eased;
            if (ref.current) {
                ref.current.textContent = current.toFixed(decimals) + suffix;
            }
            if (progress < 1) requestAnimationFrame(update);
        };

        requestAnimationFrame(update);
    }, [isInView, value, suffix, decimals, duration]);

    return <span ref={ref}>0{suffix}</span>;
}
