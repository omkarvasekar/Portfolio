import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Users, Star } from 'lucide-react';
import { projects } from '../../lib/data';

const categoryColors: Record<string, string> = {
    'ML/AI': '#5B5FFF',
    'Full-Stack': '#A78BFA',
    NLP: '#34D399',
    Fitness: '#F59E0B',
};

export default function ProjectsSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
    const [activeProject, setActiveProject] = useState<number | null>(null);

    return (
        <section id="projects" ref={sectionRef} className="section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>03 — Projects</span>
                    <h2>Featured <span className="gradient-text">Work</span></h2>
                    <p style={{ maxWidth: '500px', margin: '16px auto 0' }}>
                        Six projects — each built to solve a real problem. From deep learning to full-stack.
                    </p>
                </motion.div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {projects.map((project, i) => {
                        const color = categoryColors[project.category] || 'var(--accent)';
                        const isExpanded = activeProject === i;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                className="glass"
                                style={{
                                    padding: '32px',
                                    cursor: 'pointer',
                                    border: `1px solid ${isExpanded ? color : 'var(--border)'}`,
                                    transition: 'border-color 0.3s, box-shadow 0.3s',
                                    boxShadow: isExpanded ? `0 8px 40px ${color}20` : 'none',
                                }}
                                onClick={() => setActiveProject(isExpanded ? null : i)}
                            >
                                {/* Header row */}
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'space-between',
                                        gap: '16px',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                                            <span style={{ fontSize: '1.5rem' }}>{project.emoji}</span>
                                            <h3 style={{ fontSize: '1.3rem', marginBottom: 0 }}>
                                                {project.title}
                                            </h3>
                                            {project.featured && (
                                                <span
                                                    style={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        gap: '4px',
                                                        padding: '3px 10px',
                                                        borderRadius: '100px',
                                                        fontSize: '0.72rem',
                                                        fontWeight: 700,
                                                        background: 'rgba(91, 95, 255, 0.15)',
                                                        color: 'var(--accent)',
                                                        border: '1px solid rgba(91, 95, 255, 0.3)',
                                                        fontFamily: 'var(--font-mono)',
                                                    }}
                                                >
                                                    <Star size={10} fill="currentColor" /> FEATURED
                                                </span>
                                            )}
                                            <span
                                                style={{
                                                    padding: '3px 10px',
                                                    borderRadius: '100px',
                                                    fontSize: '0.72rem',
                                                    fontWeight: 600,
                                                    background: `${color}15`,
                                                    color,
                                                    border: `1px solid ${color}30`,
                                                    fontFamily: 'var(--font-mono)',
                                                }}
                                            >
                                                {project.category}
                                            </span>
                                        </div>
                                        <p style={{ fontSize: '0.9rem', marginBottom: '12px', color: 'var(--muted)' }}>
                                            {project.objective}
                                        </p>
                                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                                            {project.technologies.map((tech) => (
                                                <span key={tech} className="chip">{tech}</span>
                                            ))}
                                            <span style={{ fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', marginLeft: '4px' }}>
                                                {project.date}
                                            </span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.78rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)' }}>
                                                <Users size={12} /> {project.teamSize === 1 ? 'Solo' : `Team of ${project.teamSize}`}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Links */}
                                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexShrink: 0 }}>
                                        {project.gitLink && (
                                            <a
                                                href={project.gitLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                                                aria-label="GitHub"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.demoLink && (
                                            <a
                                                href={project.demoLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                                                onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                                                aria-label="Live Demo"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ color: 'var(--muted)', fontSize: '1.2rem', lineHeight: 1 }}
                                        >
                                            ↓
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Expanded detail */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div
                                                style={{
                                                    marginTop: '24px',
                                                    paddingTop: '24px',
                                                    borderTop: `1px solid ${color}30`,
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                                    gap: '20px',
                                                }}
                                            >
                                                <div>
                                                    <p style={{ fontSize: '0.72rem', color, fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                                        Problem
                                                    </p>
                                                    <p style={{ fontSize: '0.88rem' }}>{project.problem}</p>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '0.72rem', color, fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                                        Approach
                                                    </p>
                                                    <p style={{ fontSize: '0.88rem' }}>{project.approach}</p>
                                                </div>
                                                <div>
                                                    <p style={{ fontSize: '0.72rem', color, fontFamily: 'var(--font-mono)', fontWeight: 600, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                                        My Role
                                                    </p>
                                                    <p style={{ fontSize: '0.88rem' }}>{project.role}</p>
                                                </div>
                                            </div>
                                            {(project.gitLink || project.demoLink) && (
                                                <div style={{ display: 'flex', gap: '12px', marginTop: '20px', flexWrap: 'wrap' }}>
                                                    {project.gitLink && (
                                                        <a
                                                            href={project.gitLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-ghost"
                                                            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <Github size={15} /> View Code
                                                        </a>
                                                    )}
                                                    {project.demoLink && (
                                                        <a
                                                            href={project.demoLink}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="btn btn-primary"
                                                            style={{ padding: '10px 20px', fontSize: '0.85rem' }}
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <ExternalLink size={15} /> Live Demo
                                                        </a>
                                                    )}
                                                </div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
