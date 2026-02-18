import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../lib/data';

const categoryColors: Record<string, string> = {
    Languages: '#5B5FFF',
    'Web / Backend': '#A78BFA',
    'ML Libraries': '#34D399',
    'Databases & OS': '#F59E0B',
};

export default function TechStackSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    return (
        <section id="skills" ref={sectionRef} className="section" style={{ background: 'var(--surface)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>02 — Skills</span>
                    <h2>Tech <span className="gradient-text">Stack</span></h2>
                    <p style={{ maxWidth: '500px', margin: '16px auto 0' }}>
                        Languages, frameworks, and ML libraries I use to build intelligent systems.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '24px',
                    }}
                >
                    {Object.entries(skills).map(([category, techs], catIdx) => {
                        const color = categoryColors[category] || 'var(--accent)';
                        const isActive = activeCategory === category;
                        return (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: catIdx * 0.12 }}
                                className="glass"
                                style={{
                                    padding: '28px',
                                    cursor: 'default',
                                    border: `1px solid ${isActive ? color : 'var(--border)'}`,
                                    transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                                    transform: isActive ? 'translateY(-4px)' : 'none',
                                    boxShadow: isActive ? `0 8px 30px ${color}22` : 'none',
                                }}
                                onMouseEnter={() => setActiveCategory(category)}
                                onMouseLeave={() => setActiveCategory(null)}
                            >
                                {/* Category header */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                                    <div
                                        style={{
                                            width: '8px',
                                            height: '8px',
                                            borderRadius: '50%',
                                            background: color,
                                            boxShadow: `0 0 8px ${color}`,
                                        }}
                                    />
                                    <span
                                        style={{
                                            fontFamily: 'var(--font-mono)',
                                            fontSize: '0.78rem',
                                            fontWeight: 600,
                                            color,
                                            letterSpacing: '0.08em',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {category}
                                    </span>
                                </div>

                                {/* Tech chips */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {techs.map((tech, i) => (
                                        <motion.span
                                            key={tech}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: catIdx * 0.12 + i * 0.05 + 0.3 }}
                                            style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                padding: '5px 12px',
                                                borderRadius: '100px',
                                                fontSize: '0.78rem',
                                                fontWeight: 500,
                                                fontFamily: 'var(--font-mono)',
                                                background: `${color}15`,
                                                color: isActive ? color : 'var(--muted)',
                                                border: `1px solid ${color}30`,
                                                transition: 'color 0.3s, background 0.3s',
                                            }}
                                        >
                                            {tech}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
