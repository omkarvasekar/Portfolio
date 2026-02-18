import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experience } from '../../lib/data';

const typeColors = { work: '#5B5FFF', internship: '#34D399', education: '#A78BFA' };
const typeLabels = { work: 'Current Role', internship: 'Internship', education: 'Education' };

export default function ExperienceSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

    return (
        <section id="experience" ref={sectionRef} className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>04 — Experience</span>
                    <h2>My <span className="gradient-text">Journey</span></h2>
                </motion.div>

                <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
                    {/* Pure CSS animated line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '19px',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background: 'linear-gradient(180deg, #5B5FFF 0%, #A78BFA 50%, #34D399 100%)',
                            opacity: isInView ? 1 : 0,
                            transformOrigin: 'top',
                            transform: isInView ? 'scaleY(1)' : 'scaleY(0)',
                            transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                        }}
                    />

                    {/* Timeline items */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                        {experience.map((item, i) => {
                            const color = typeColors[item.type];
                            return (
                                <motion.div
                                    key={item.role}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.3 + i * 0.25 }}
                                    style={{ paddingLeft: '52px', position: 'relative' }}
                                >
                                    {/* Dot */}
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={isInView ? { scale: 1 } : {}}
                                        transition={{ duration: 0.4, delay: 0.4 + i * 0.25, type: 'spring' }}
                                        style={{
                                            position: 'absolute',
                                            left: '12px',
                                            top: '24px',
                                            width: '16px',
                                            height: '16px',
                                            borderRadius: '50%',
                                            background: color,
                                            boxShadow: `0 0 12px ${color}80`,
                                            border: '3px solid var(--surface)',
                                            zIndex: 2,
                                        }}
                                    />

                                    <div className="glass" style={{ padding: '24px' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                                            <div>
                                                <span
                                                    style={{
                                                        fontSize: '0.72rem',
                                                        fontFamily: 'var(--font-mono)',
                                                        color,
                                                        fontWeight: 600,
                                                        textTransform: 'uppercase',
                                                        letterSpacing: '0.08em',
                                                    }}
                                                >
                                                    {typeLabels[item.type]}
                                                </span>
                                                <h3 style={{ fontSize: '1.1rem', marginTop: '4px', marginBottom: '2px' }}>{item.role}</h3>
                                                <p style={{ fontSize: '0.88rem', color: 'var(--text)', fontWeight: 500, marginBottom: 0 }}>{item.org}</p>
                                            </div>
                                            <div style={{ textAlign: 'right' }}>
                                                <p style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', marginBottom: '2px' }}>{item.period}</p>
                                                <p style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>📍 {item.location}</p>
                                            </div>
                                        </div>

                                        <ul style={{ paddingLeft: '16px', marginBottom: '16px' }}>
                                            {item.bullets.map((b) => (
                                                <li key={b} style={{ fontSize: '0.88rem', color: 'var(--muted)', marginBottom: '4px', lineHeight: 1.6 }}>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                            {item.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    style={{
                                                        padding: '3px 10px',
                                                        borderRadius: '100px',
                                                        fontSize: '0.72rem',
                                                        fontFamily: 'var(--font-mono)',
                                                        background: `${color}15`,
                                                        color,
                                                        border: `1px solid ${color}30`,
                                                    }}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
