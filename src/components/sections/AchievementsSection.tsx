import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { achievements, achievementColors } from '../../lib/data';

export default function AchievementsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

    return (
        <section id="achievements" ref={sectionRef} className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>05 — Achievements</span>
                    <h2>Credibility at a <span className="gradient-text">Glance</span></h2>
                    <p style={{ maxWidth: '500px', margin: '16px auto 0' }}>
                        Academic excellence, technical wins, research, and community leadership.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                        gap: '16px',
                    }}
                >
                    {achievements.map((ach, i) => {
                        const color = achievementColors[ach.type];
                        return (
                            <motion.div
                                key={ach.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                className="glass"
                                style={{
                                    padding: '20px',
                                    transition: 'transform 0.3s, box-shadow 0.3s, border-color 0.3s',
                                    border: '1px solid var(--border)',
                                }}
                                onMouseEnter={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px ${color}20`;
                                    (e.currentTarget as HTMLDivElement).style.borderColor = `${color}50`;
                                }}
                                onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLDivElement).style.transform = 'none';
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)';
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                    <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{ach.icon}</span>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                                            <span
                                                style={{
                                                    fontSize: '0.68rem',
                                                    fontFamily: 'var(--font-mono)',
                                                    fontWeight: 600,
                                                    color,
                                                    background: `${color}15`,
                                                    border: `1px solid ${color}30`,
                                                    padding: '2px 8px',
                                                    borderRadius: '100px',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '0.06em',
                                                }}
                                            >
                                                {ach.type}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '4px', lineHeight: 1.3 }}>
                                            {ach.title}
                                        </h3>
                                        <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                                            {ach.detail}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
