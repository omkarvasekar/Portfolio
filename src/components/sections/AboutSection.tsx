import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personalInfo } from '../../lib/data';
import { useMouseTilt } from '../../hooks/useMouseTilt';
import AnimatedCounter from '../ui/AnimatedCounter';

const stats = [
    { value: 9.55, label: 'CGPA', suffix: '/10', decimals: 2 },
    { value: 6, label: 'Projects', suffix: '+', decimals: 0 },
    { value: 5, label: 'Awards', suffix: '+', decimals: 0 },
    { value: 1, label: 'ML Internship', suffix: '', decimals: 0 },
];

const focusAreas = ['RPA Development', 'Machine Learning', 'Deep Learning', 'NLP', 'Full-Stack'];

export default function AboutSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const cardRef = useMouseTilt(10);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    // Floating particles
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        const particles: { x: number; y: number; r: number; vx: number; vy: number; alpha: number }[] = [];
        for (let i = 0; i < 40; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2 + 0.5,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.4 + 0.1,
            });
        }

        let rafId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((p) => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(91, 95, 255, ${p.alpha})`;
                ctx.fill();
            });
            rafId = requestAnimationFrame(animate);
        };
        animate();
        return () => cancelAnimationFrame(rafId);
    }, []);

    return (
        <section id="about" ref={sectionRef} className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>01 — About</span>
                    <h2>Who is <span className="gradient-text">Omkar?</span></h2>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        alignItems: 'center',
                    }}
                >
                    {/* 3D Tilt Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div
                            ref={cardRef}
                            className="glass"
                            style={{
                                padding: '40px',
                                position: 'relative',
                                overflow: 'hidden',
                                transformStyle: 'preserve-3d',
                            }}
                        >
                            {/* Particle canvas */}
                            <canvas
                                ref={canvasRef}
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none',
                                    borderRadius: '16px',
                                }}
                            />

                            {/* Avatar */}
                            <div
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, var(--accent), var(--accent-2))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.8rem',
                                    fontWeight: 800,
                                    color: '#fff',
                                    marginBottom: '20px',
                                    boxShadow: '0 0 30px var(--accent-glow)',
                                    position: 'relative',
                                }}
                            >
                                OV
                            </div>

                            <h3 style={{ marginBottom: '4px' }}>{personalInfo.name}</h3>
                            <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '4px', fontSize: '0.9rem' }}>
                                {personalInfo.currentRole} → {personalInfo.targetRole}
                            </p>
                            <p style={{ fontSize: '0.85rem', marginBottom: '20px' }}>
                                {personalInfo.institution}
                            </p>

                            <div style={{ display: 'flex', gap: '16px', marginBottom: '20px', flexWrap: 'wrap' }}>
                                <div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent)' }}>
                                        {personalInfo.cgpa}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>CGPA</div>
                                </div>
                                <div>
                                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--accent-2)' }}>
                                        Rank #{personalInfo.rank}
                                    </div>
                                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>Dept. (2nd Year)</div>
                                </div>
                            </div>

                            <p style={{ fontSize: '0.85rem', lineHeight: 1.7, position: 'relative' }}>
                                {personalInfo.philosophy}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right side — stats + focus areas */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {/* Stats grid */}
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '16px',
                                marginBottom: '32px',
                            }}
                        >
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="glass"
                                    style={{ padding: '20px', textAlign: 'center' }}
                                >
                                    <div
                                        style={{
                                            fontSize: '2rem',
                                            fontWeight: 900,
                                            color: 'var(--accent)',
                                            fontFamily: 'var(--font-mono)',
                                            lineHeight: 1,
                                            marginBottom: '4px',
                                        }}
                                    >
                                        {isInView ? (
                                            <AnimatedCounter
                                                value={stat.value}
                                                suffix={stat.suffix}
                                                decimals={stat.decimals}
                                            />
                                        ) : (
                                            '0'
                                        )}
                                    </div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Focus areas */}
                        <div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '12px', fontFamily: 'var(--font-mono)' }}>
                                FOCUS AREAS
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {focusAreas.map((area, i) => (
                                    <motion.span
                                        key={area}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.6 + i * 0.08 }}
                                        className="chip"
                                    >
                                        {area}
                                    </motion.span>
                                ))}
                            </div>
                        </div>

                        {/* Location */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 1 }}
                            style={{ marginTop: '24px', fontSize: '0.85rem' }}
                        >
                            📍 {personalInfo.location}
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
