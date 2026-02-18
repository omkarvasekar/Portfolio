import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ResearchSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

    return (
        <section id="research" ref={sectionRef} className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>06 — Research</span>
                    <h2>Intellectual <span className="gradient-text">Depth</span></h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.9, delay: 0.2 }}
                    style={{ maxWidth: '800px', margin: '0 auto' }}
                >
                    <div
                        className="glass"
                        style={{
                            padding: '48px',
                            position: 'relative',
                            overflow: 'hidden',
                            border: '1px solid rgba(91, 95, 255, 0.2)',
                        }}
                    >
                        {/* Background glow */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-40px',
                                right: '-40px',
                                width: '200px',
                                height: '200px',
                                borderRadius: '50%',
                                background: 'radial-gradient(circle, rgba(91,95,255,0.15) 0%, transparent 70%)',
                                pointerEvents: 'none',
                            }}
                        />

                        <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                            {/* Icon */}
                            <div
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '16px',
                                    background: 'linear-gradient(135deg, rgba(91,95,255,0.2), rgba(167,139,250,0.2))',
                                    border: '1px solid rgba(91,95,255,0.3)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2.5rem',
                                    flexShrink: 0,
                                }}
                            >
                                ☀️
                            </div>

                            <div style={{ flex: 1 }}>
                                <span
                                    style={{
                                        fontSize: '0.72rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--accent)',
                                        fontWeight: 600,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.08em',
                                    }}
                                >
                                    Research Paper · GINOTECH 2025
                                </span>
                                <h3 style={{ fontSize: '1.5rem', marginTop: '8px', marginBottom: '12px' }}>
                                    Solaris — Deep Learning Solar Power Prediction
                                </h3>
                                <p style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '20px' }}>
                                    Presented a research paper on predicting solar power output using deep learning models at GINOTECH 2025 — IEEE Conference. The research explored neural network architectures for time-series energy forecasting, contributing to the intersection of ML and renewable energy systems.
                                </p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                    {['Deep Learning', 'Time-Series Forecasting', 'Renewable Energy', 'Neural Networks', 'Python'].map((tag) => (
                                        <span key={tag} className="chip">{tag}</span>
                                    ))}
                                </div>

                                <div
                                    style={{
                                        padding: '16px',
                                        borderRadius: '8px',
                                        background: 'rgba(91, 95, 255, 0.06)',
                                        border: '1px solid rgba(91, 95, 255, 0.15)',
                                    }}
                                >
                                    <p style={{ fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--muted)', marginBottom: 0 }}>
                                        "Applying deep learning to solar energy prediction — where intelligent systems meet sustainability."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quantum Computing Seminar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="glass"
                        style={{ padding: '28px', marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}
                    >
                        <span style={{ fontSize: '2rem' }}>⚛️</span>
                        <div>
                            <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-2)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                Seminar Presentation · Dec 2023
                            </span>
                            <h3 style={{ fontSize: '1.1rem', marginTop: '4px', marginBottom: '4px' }}>
                                Introduction to Quantum Computing
                            </h3>
                            <p style={{ fontSize: '0.88rem' }}>
                                Presented an introduction to quantum computing concepts — qubits, superposition, entanglement, and quantum gates — to the department, fostering awareness of next-generation computing paradigms.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
