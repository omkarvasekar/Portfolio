import { useReducedMotion } from '../../hooks/useReducedMotion';
import './aurora.css';

export default function AuroraBackground() {
    const reduced = useReducedMotion();

    if (reduced) return null;

    return (
        <div className="aurora-wrap">
            {/* Flowing gradient orbs */}
            <div className="aurora-orb aurora-orb-1" />
            <div className="aurora-orb aurora-orb-2" />
            <div className="aurora-orb aurora-orb-3" />

            {/* Floating geometric shapes */}
            <div className="geo geo-1" />
            <div className="geo geo-2" />
            <div className="geo geo-3" />
            <div className="geo geo-4" />

            {/* Subtle grid overlay */}
            <div className="aurora-grid" />

            {/* Noise texture overlay */}
            <div className="aurora-noise" />
        </div>
    );
}
