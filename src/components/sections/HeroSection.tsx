import { useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { personalInfo } from '../../lib/data';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import AuroraBackground from '../3d/AuroraBackground';
import MorphingBlob from '../3d/MorphingBlob';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const reduced = useReducedMotion();

    useEffect(() => {
        if (reduced || !contentRef.current) return;
        const ctx = gsap.context(() => {
            gsap.to(contentRef.current, {
                opacity: 0,
                y: -40,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top top',
                    end: '30% top',
                    scrub: true,
                },
            });
        });
        return () => ctx.revert();
    }, [reduced]);

    return (
        <section
            id="hero"
            ref={sectionRef}
            style={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'visible',
                background: 'var(--bg)',
            }}
        >
            {/* Aurora gradient background */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(91,95,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(167,139,250,0.1) 0%, transparent 60%)',
                    pointerEvents: 'none',
                }}
            />

            {/* Animated aurora with floating shapes */}
            <AuroraBackground />

            {/* 3D Morphing Blob — right */}
            <MorphingBlob side="right" className="hero-blob" />

            {/* 3D Morphing Blob — left (smaller) */}
            <MorphingBlob side="left" className="hero-blob" />

            {/* Content */}
            <div
                ref={contentRef}
                className="container"
                style={{
                    position: 'relative',
                    zIndex: 10,
                    textAlign: 'center',
                    paddingTop: '100px',
                    paddingBottom: '60px',
                }}
            >
                {/* Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ marginBottom: '24px' }}
                >
                    
                </motion.div>

                {/* Main headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        marginBottom: '12px',
                        fontSize: 'clamp(2.8rem, 8vw, 6rem)',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #ffffff 0%, #c4b5fd 40%, #8b5cf6 60%, #ec4899 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        textShadow: 'none',
                        filter: 'drop-shadow(0 0 30px rgba(139, 92, 246, 0.3))',
                    }}
                >
                    Hi, I'm {personalInfo.shortName}.
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        fontWeight: 600,
                        fontSize: 'clamp(1.4rem, 4vw, 2.8rem)',
                        color: 'rgba(255,255,255,0.6)',
                        marginBottom: '20px',
                        letterSpacing: '-0.01em',
                        textShadow: '0 0 20px rgba(0,0,0,0.5)',
                    }}
                >
                    {personalInfo.heroHeadline}
                    <br />
                    <span style={{
                        background: 'linear-gradient(90deg, #e2e8f0, #ffffff)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>{personalInfo.heroSubHeadline}</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    style={{
                        fontSize: '1rem',
                        color: 'var(--muted)',
                        marginBottom: '40px',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.05em',
                    }}
                >
                    {personalInfo.heroSub}
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.75 }}
                    style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
                >
                    <a
                        href="#projects"
                        className="btn btn-primary"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        See My Work
                    </a>
                    <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost"
                    >
                        Download Resume ↗
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                    style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}
                >
                    {[
                        { href: personalInfo.github, icon: <Github size={20} />, label: 'GitHub' },
                        { href: personalInfo.linkedin, icon: <Linkedin size={20} />, label: 'LinkedIn' },
                        { href: `mailto:${personalInfo.email}`, icon: <Mail size={20} />, label: 'Email' },
                    ].map(({ href, icon, label }) => (
                        <a
                            key={label}
                            href={href}
                            target={label !== 'Email' ? '_blank' : undefined}
                            rel="noopener noreferrer"
                            aria-label={label}
                            style={{
                                color: 'var(--muted)',
                                transition: 'color 0.2s, transform 0.2s',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--accent)';
                                e.currentTarget.style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'var(--muted)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {icon}
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '32px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '4px',
                    color: 'var(--muted)',
                }}
            >
                <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>
                    SCROLL
                </span>
                <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                >
                    <ChevronDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
}
