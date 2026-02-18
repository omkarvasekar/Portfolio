import { useEffect, useRef } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const reduced = useReducedMotion();

    useEffect(() => {
        if (reduced) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let rafId: number;

        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        };

        const animate = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            rafId = requestAnimationFrame(animate);
        };

        const onMouseEnterBtn = () => {
            ring.style.width = '48px';
            ring.style.height = '48px';
            ring.style.borderColor = 'var(--accent)';
            ring.style.background = 'rgba(91, 95, 255, 0.08)';
            dot.style.opacity = '0';
        };

        const onMouseLeaveBtn = () => {
            ring.style.width = '32px';
            ring.style.height = '32px';
            ring.style.borderColor = 'rgba(91, 95, 255, 0.6)';
            ring.style.background = 'transparent';
            dot.style.opacity = '1';
        };

        const onMouseEnterText = () => {
            ring.style.width = '4px';
            ring.style.height = '4px';
        };

        const onMouseLeaveText = () => {
            ring.style.width = '32px';
            ring.style.height = '32px';
        };

        window.addEventListener('mousemove', onMouseMove);
        rafId = requestAnimationFrame(animate);

        // Attach to interactive elements
        const btns = document.querySelectorAll('a, button, .btn, [data-cursor="button"]');
        const texts = document.querySelectorAll('p, h1, h2, h3, h4, span, [data-cursor="text"]');

        btns.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnterBtn);
            el.addEventListener('mouseleave', onMouseLeaveBtn);
        });
        texts.forEach((el) => {
            el.addEventListener('mouseenter', onMouseEnterText);
            el.addEventListener('mouseleave', onMouseLeaveText);
        });

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(rafId);
            btns.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnterBtn);
                el.removeEventListener('mouseleave', onMouseLeaveBtn);
            });
            texts.forEach((el) => {
                el.removeEventListener('mouseenter', onMouseEnterText);
                el.removeEventListener('mouseleave', onMouseLeaveText);
            });
        };
    }, [reduced]);

    if (reduced) return null;

    return (
        <>
            {/* Dot */}
            <div
                ref={dotRef}
                style={{
                    position: 'fixed',
                    width: '6px',
                    height: '6px',
                    background: 'var(--accent)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 99999,
                    transform: 'translate(-50%, -50%)',
                    transition: 'opacity 0.2s',
                }}
            />
            {/* Ring */}
            <div
                ref={ringRef}
                style={{
                    position: 'fixed',
                    width: '32px',
                    height: '32px',
                    border: '1.5px solid rgba(91, 95, 255, 0.6)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 99998,
                    transform: 'translate(-50%, -50%)',
                    transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease, background 0.3s ease',
                }}
            />
        </>
    );
}
