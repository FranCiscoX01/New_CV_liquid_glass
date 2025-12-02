import { Canvas } from '@react-three/fiber';
import { Sparkles, Float } from '@react-three/drei';

const Particles = () => {
    return (
        <group>
            <Float speed={0.8} rotationIntensity={0.5} floatIntensity={1}>
                <Sparkles
                    count={150}
                    scale={12}
                    size={3}
                    speed={0.2}
                    opacity={0.6}
                    color="#000000"
                />
            </Float>
            <Float speed={0.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Sparkles
                    count={100}
                    scale={10}
                    size={5}
                    speed={0.1}
                    opacity={0.4}
                    color="#333333"
                />
            </Float>
        </group>
    );
};

const LiquidBackground = () => {
    return (
        <div
            className="fixed inset-0 -z-10"
            style={{
                background: 'linear-gradient(to bottom, #e0f2fe 0%, #e0f2fe 50%, #ffffff 100%)'
            }}
        >
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                dpr={[1, 2]}
                gl={{ antialias: true, alpha: true }}
            >
                <ambientLight intensity={0.5} />
                <Particles />
            </Canvas>
        </div>
    );
};

export default LiquidBackground;
