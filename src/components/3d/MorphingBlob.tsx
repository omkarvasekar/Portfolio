import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '../../hooks/useReducedMotion';

interface BlobProps {
  side?: 'left' | 'right';
  scale?: number;
  colors?: [string, string, string]; // [primary, secondary, tertiary] as "r,g,b" floats
  className?: string;
}

export default function MorphingBlob({ side = 'right', scale = 1, className }: BlobProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || !mountRef.current) return;

    const mount = mountRef.current;
    const baseSize = 500;
    const containerSize = Math.min(baseSize * scale, window.innerWidth * 0.6);
    // Render canvas 50% larger than container — overflow:hidden hides the edges
    const canvasSize = Math.round(containerSize * 1.5);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 6.0;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(canvasSize, canvasSize);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    // Center the oversized canvas inside the container
    const canvas = renderer.domElement;
    canvas.style.position = 'absolute';
    canvas.style.left = '50%';
    canvas.style.top = '50%';
    canvas.style.transform = 'translate(-50%, -50%)';
    mount.appendChild(canvas);

    /* ---- Morphing Blob ---- */
    const geo = new THREE.IcosahedronGeometry(1.2, 64);

    // Different color palettes per side
    const colors = side === 'right'
      ? { c1: [0.5, 0.15, 0.7], c2: [0.85, 0.25, 0.5], c3: [0.75, 0.4, 0.2] }   // purple → magenta → amber
      : { c1: [0.12, 0.3, 0.75], c2: [0.15, 0.65, 0.7], c3: [0.1, 0.5, 0.45] };  // blue → cyan → teal

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector3(0, 0, 0) },
        uIntensity: { value: 0.3 },
        uColor1: { value: new THREE.Vector3(...(colors.c1 as [number, number, number])) },
        uColor2: { value: new THREE.Vector3(...(colors.c2 as [number, number, number])) },
        uColor3: { value: new THREE.Vector3(...(colors.c3 as [number, number, number])) },
        uProximity: { value: 0 },  // 0 = far, 1 = close to mouse
      },
      vertexShader: `
        uniform float uTime;
        uniform vec3 uMouse;
        uniform float uIntensity;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vDisplacement;

        //
        // GLSL simplex noise (Ashima Arts)
        //
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec4 permute(vec4 x) { return mod289(((x * 34.0) + 10.0) * x); }
        vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

        float snoise(vec3 v) {
          const vec2 C = vec2(1.0/6.0, 1.0/3.0);
          const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
          vec3 i  = floor(v + dot(v, C.yyy));
          vec3 x0 = v - i + dot(i, C.xxx);
          vec3 g = step(x0.yzx, x0.xyz);
          vec3 l = 1.0 - g;
          vec3 i1 = min(g.xyz, l.zxy);
          vec3 i2 = max(g.xyz, l.zxy);
          vec3 x1 = x0 - i1 + C.xxx;
          vec3 x2 = x0 - i2 + C.yyy;
          vec3 x3 = x0 - D.yyy;
          i = mod289(i);
          vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
          float n_ = 0.142857142857;
          vec3 ns = n_ * D.wyz - D.xzx;
          vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
          vec4 x_ = floor(j * ns.z);
          vec4 y_ = floor(j - 7.0 * x_);
          vec4 x = x_ * ns.x + ns.yyyy;
          vec4 y = y_ * ns.x + ns.yyyy;
          vec4 h = 1.0 - abs(x) - abs(y);
          vec4 b0 = vec4(x.xy, y.xy);
          vec4 b1 = vec4(x.zw, y.zw);
          vec4 s0 = floor(b0) * 2.0 + 1.0;
          vec4 s1 = floor(b1) * 2.0 + 1.0;
          vec4 sh = -step(h, vec4(0.0));
          vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
          vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
          vec3 p0 = vec3(a0.xy, h.x);
          vec3 p1 = vec3(a0.zw, h.y);
          vec3 p2 = vec3(a1.xy, h.z);
          vec3 p3 = vec3(a1.zw, h.w);
          vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
          p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
          vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
          m = m * m;
          return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
        }

        void main() {
          vec3 pos = position;
          vec3 norm = normalize(position);

          // Multi-octave noise displacement
          float noise1 = snoise(norm * 2.0 + uTime * 0.25) * 0.5;
          float noise2 = snoise(norm * 4.0 - uTime * 0.15) * 0.25;
          float noise3 = snoise(norm * 8.0 + uTime * 0.4) * 0.1;
          float displacement = (noise1 + noise2 + noise3) * uIntensity;

          pos += norm * displacement;
          vDisplacement = displacement;
          vNormal = normalize(normalMatrix * norm);
          vPosition = (modelViewMatrix * vec4(pos, 1.0)).xyz;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        uniform float uProximity;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;

        varying vec3 vNormal;
        varying vec3 vPosition;
        varying float vDisplacement;

        void main() {
          vec3 viewDir = normalize(-vPosition);
          vec3 norm = normalize(vNormal);

          // Fresnel
          float fresnel = pow(1.0 - abs(dot(norm, viewDir)), 2.5);

          // Use color uniforms
          float t = vDisplacement * 3.0 + 0.5;
          vec3 baseColor = mix(uColor1, uColor2, smoothstep(0.3, 0.7, t));
          baseColor = mix(baseColor, uColor3, smoothstep(0.6, 1.0, t) * 0.3);

          // Rim light from primary color
          vec3 rimColor = mix(uColor1, vec3(1.0), 0.3);

          // Compose — subdued so hero text dominates
          vec3 finalColor = baseColor * 0.3;
          finalColor += rimColor * fresnel * 0.6;
          finalColor += baseColor * (0.15 + vDisplacement * 0.4);

          // Subtle pulsing glow
          float pulse = 0.92 + 0.08 * sin(uTime * 1.5);
          finalColor *= pulse;

          // Alpha — atmospheric, not competing
          float alpha = 0.3 + fresnel * 0.25;
          alpha = clamp(alpha, 0.0, 0.55);

          // --- Color Shift on mouse proximity ---
          // Shift toward a bright, warm highlight when cursor is near
          vec3 hotColor = mix(uColor2, vec3(1.0, 0.95, 0.9), 0.5); // bright warm white
          finalColor = mix(finalColor, hotColor, uProximity * 0.45);
          alpha = mix(alpha, min(alpha + 0.15, 0.95), uProximity);

          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
    });

    const blob = new THREE.Mesh(geo, mat);
    scene.add(blob);

    /* ---- Outer glow shell ---- */
    const glowGeo = new THREE.IcosahedronGeometry(1.55, 32);
    const glowMat = new THREE.ShaderMaterial({
      transparent: true,
      side: THREE.BackSide,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float uTime;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float fresnel = pow(1.0 - abs(dot(normalize(vNormal), viewDir)), 2.0);
          vec3 color = vec3(${colors.c1.join(', ')}) + fresnel * vec3(${colors.c2.map((v, i) => (v - colors.c1[i]).toFixed(2)).join(', ')});
          float pulse = 0.8 + 0.2 * sin(uTime * 0.8);
          gl_FragColor = vec4(color, fresnel * 0.12 * pulse);
        }
      `,
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    scene.add(glow);

    /* ---- Mouse tracking ---- */
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    const onMouseMove = (e: MouseEvent) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    /* ---- Animation ---- */
    let rafId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth mouse follow (fast response)
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      // Calculate mouse proximity (0 = far, 1 = right on blob)
      const mouseLen = Math.sqrt(currentX * currentX + currentY * currentY);
      const rawProximity = Math.max(0, 1 - mouseLen * 1.2);
      // Smooth the proximity for fluid transitions
      const currentProximity = mat.uniforms.uProximity.value;
      mat.uniforms.uProximity.value += (rawProximity - currentProximity) * 0.08;

      mat.uniforms.uTime.value = t;
      mat.uniforms.uMouse.value.set(currentX, currentY, 0);
      glowMat.uniforms.uTime.value = t;

      // --- Spin Acceleration on proximity ---
      // Base speed + up to 4x faster when cursor is close
      const spinMultiplier = 1 + mat.uniforms.uProximity.value * 2.5;
      blob.rotation.y = t * 0.1 * spinMultiplier + currentX * 0.4;
      blob.rotation.x = Math.sin(t * 0.15 * spinMultiplier) * 0.1 + currentY * 0.3;
      glow.rotation.copy(blob.rotation);

      // Float
      blob.position.y = Math.sin(t * 0.4) * 0.08;
      glow.position.y = blob.position.y;

      renderer.render(scene, camera);
    };
    animate();

    /* ---- Cleanup ---- */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
      geo.dispose();
      mat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [reduced, side, scale]);

  if (reduced) return null;

  // Asymmetric positioning — visually balanced, not mirror
  const posStyle = side === 'left'
    ? { left: '3%', top: '58%' }
    : { right: '2%', top: '42%' };

  const sizeVal = '500px';
  const maxVw = '40vw';

  return (
    <div
      ref={mountRef}
      className={className}
      style={{
        position: 'absolute',
        ...posStyle,
        transform: 'translateY(-50%)',
        width: sizeVal,
        height: sizeVal,
        maxWidth: maxVw,
        maxHeight: maxVw,
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
}
