import { personalInfo } from '../../lib/data';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: '1px solid var(--border)',
                padding: '40px clamp(20px, 5vw, 60px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '16px',
                background: 'var(--bg)',
            }}
        >
            <p
                style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--muted)',
                }}
            >
                © 2026{' '}
                <span style={{ color: 'var(--text)' }}>{personalInfo.name}</span>
                {' '}— Built with React & Three.js
            </p>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                    aria-label="GitHub"
                >
                    <Github size={18} />
                </a>
                <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                    aria-label="LinkedIn"
                >
                    <Linkedin size={18} />
                </a>
                <a
                    href={`mailto:${personalInfo.email}`}
                    style={{ color: 'var(--muted)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}
                    aria-label="Email"
                >
                    <Mail size={18} />
                </a>
            </div>
        </footer>
    );
}
