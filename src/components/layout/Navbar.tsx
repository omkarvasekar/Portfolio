import { useEffect, useRef, useState } from 'react';
import { personalInfo } from '../../lib/data';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMenuOpen(false);
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav
            ref={navRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '0 clamp(20px, 5vw, 60px)',
                height: '70px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-bottom 0.4s ease',
                background: scrolled ? 'rgba(13, 13, 13, 0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(20px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(91, 95, 255, 0.1)' : '1px solid transparent',
            }}
        >
            {/* Logo */}
            <a
                href="#hero"
                onClick={(e) => handleNavClick(e, '#hero')}
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'var(--text)',
                    letterSpacing: '-0.02em',
                }}
            >
                <span style={{ color: 'var(--accent)' }}>OV</span>
                <span style={{ color: 'var(--muted)', fontSize: '0.85rem', marginLeft: '4px' }}>
                    .dev
                </span>
            </a>

            {/* Desktop Links */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '32px',
                }}
                className="nav-links-desktop"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        style={{
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            color: 'var(--muted)',
                            transition: 'color 0.2s',
                            position: 'relative',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                    Resume ↗
                </a>
            </div>

            {/* Mobile Hamburger */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={{
                    display: 'none',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    flexDirection: 'column',
                    gap: '5px',
                }}
                className="hamburger"
                aria-label="Toggle menu"
            >
                {[0, 1, 2].map((i) => (
                    <span
                        key={i}
                        style={{
                            display: 'block',
                            width: '22px',
                            height: '2px',
                            background: 'var(--text)',
                            borderRadius: '2px',
                            transition: 'transform 0.3s, opacity 0.3s',
                            transform:
                                menuOpen && i === 0
                                    ? 'rotate(45deg) translate(5px, 5px)'
                                    : menuOpen && i === 2
                                        ? 'rotate(-45deg) translate(5px, -5px)'
                                        : 'none',
                            opacity: menuOpen && i === 1 ? 0 : 1,
                        }}
                    />
                ))}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: '70px',
                        left: 0,
                        right: 0,
                        background: 'rgba(13, 13, 13, 0.97)',
                        backdropFilter: 'blur(20px)',
                        padding: '24px clamp(20px, 5vw, 60px)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        borderBottom: '1px solid var(--border)',
                    }}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--text)' }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={personalInfo.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ width: 'fit-content' }}
                    >
                        Download Resume
                    </a>
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
        </nav>
    );
}
