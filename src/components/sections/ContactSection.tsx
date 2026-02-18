import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Mail, MapPin, Copy, Check } from 'lucide-react';
import { personalInfo } from '../../lib/data';

interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
    const [copied, setCopied] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>();

    const copyEmail = () => {
        navigator.clipboard.writeText(personalInfo.email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const onSubmit = async (data: FormData) => {
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EmailJS environment variables are not configured.');
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    
                },
                publicKey
            );

            console.log('Form submitted:', data);
            setSubmitted(true);
            reset();
            setTimeout(() => setSubmitted(false), 4000);
        } catch (error) {
            console.error('Failed to send email:', error);
            alert('Failed to send message. Please try again later or contact me directly via email.');
        }
    };

    const inputStyle = {
        width: '100%',
        padding: '14px 16px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        color: 'var(--text)',
        fontFamily: 'var(--font-body)',
        fontSize: '0.95rem',
        outline: 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
    };

    return (
        <section id="contact" ref={sectionRef} className="section">
            {/* Floating orbs */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(91,95,255,0.08) 0%, transparent 70%)' }} />
                <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(167,139,250,0.08) 0%, transparent 70%)' }} />
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span className="section-label" style={{ justifyContent: 'center' }}>07 — Contact</span>
                    <h2>Let's Build Something <span className="gradient-text">Intelligent.</span></h2>
                    <p style={{ maxWidth: '500px', margin: '16px auto 0' }}>
                        Open to ML/AI engineering roles, research collaborations, and intelligent systems projects.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px',
                        maxWidth: '900px',
                        margin: '0 auto',
                    }}
                >
                    {/* Left — info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="glass" style={{ padding: '32px', height: '100%' }}>
                            <h3 style={{ marginBottom: '24px', fontSize: '1.2rem' }}>Get in Touch</h3>

                            {/* Email */}
                            <div style={{ marginBottom: '20px' }}>
                                <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                    Email
                                </p>
                                <button
                                    onClick={copyEmail}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--accent)',
                                        fontFamily: 'var(--font-mono)',
                                        fontSize: '0.9rem',
                                        cursor: 'pointer',
                                        padding: 0,
                                        transition: 'opacity 0.2s',
                                    }}
                                >
                                    <Mail size={15} />
                                    {personalInfo.email}
                                    {copied ? <Check size={14} color="#34D399" /> : <Copy size={14} />}
                                </button>
                                {copied && (
                                    <p style={{ fontSize: '0.75rem', color: '#34D399', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                                        Copied!
                                    </p>
                                )}
                            </div>

                            {/* Location */}
                            <div style={{ marginBottom: '24px' }}>
                                <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                    Location
                                </p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text)' }}>
                                    <MapPin size={15} color="var(--accent)" />
                                    {personalInfo.location}
                                </p>
                            </div>

                            {/* Social */}
                            <div>
                                <p style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                                    Social
                                </p>
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <a
                                        href={personalInfo.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost"
                                        style={{ padding: '10px 16px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                                    >
                                        <Github size={16} /> GitHub
                                    </a>
                                    <a
                                        href={personalInfo.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost"
                                        style={{ padding: '10px 16px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '6px' }}
                                    >
                                        <Linkedin size={16} /> LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        <div className="glass" style={{ padding: '32px' }}>
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{ textAlign: 'center', padding: '40px 0' }}
                                >
                                    <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                                    <h3 style={{ marginBottom: '8px' }}>Message Sent!</h3>
                                    <p>I'll get back to you soon.</p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                    <div>
                                        <label style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '6px' }}>
                                            Name
                                        </label>
                                        <input
                                            {...register('name', { required: 'Name is required' })}
                                            placeholder="Your name"
                                            style={inputStyle}
                                            onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                                        />
                                        {errors.name && <p style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '4px' }}>{errors.name.message}</p>}
                                    </div>

                                    <div>
                                        <label style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '6px' }}>
                                            Email
                                        </label>
                                        <input
                                            {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                                            placeholder="your@email.com"
                                            type="email"
                                            style={inputStyle}
                                            onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                                        />
                                        {errors.email && <p style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '4px' }}>{errors.email.message}</p>}
                                    </div>

                                    <div>
                                        <label style={{ fontSize: '0.8rem', color: 'var(--muted)', fontFamily: 'var(--font-mono)', display: 'block', marginBottom: '6px' }}>
                                            Message
                                        </label>
                                        <textarea
                                            {...register('message', { required: 'Message is required', minLength: { value: 10, message: 'At least 10 characters' } })}
                                            placeholder="Tell me about the role, project, or collaboration..."
                                            rows={5}
                                            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                                            onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; e.target.style.boxShadow = '0 0 0 3px var(--accent-glow)'; }}
                                            onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                                        />
                                        {errors.message && <p style={{ fontSize: '0.78rem', color: '#f87171', marginTop: '4px' }}>{errors.message.message}</p>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn btn-primary"
                                        style={{
                                            width: '100%',
                                            justifyContent: 'center',
                                            opacity: isSubmitting ? 0.7 : 1,
                                            position: 'relative',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message →'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
