
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Float, Environment } from '@react-three/drei'

export default function Shapes() {
  return (
    <Canvas
      className='absolute inset-0 -z-10'
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4.5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
      <group position={[0, -0.5, 0]}>
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh position={[-1.5, 0.5, -1.5]} castShadow>
                <icosahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="hotpink" roughness={0.4} metalness={0.8} />
            </mesh>
        </Float>
        <Float speed={3} rotationIntensity={1.5} floatIntensity={2}>
            <mesh position={[1.5, 1, -2]} castShadow>
                <coneGeometry args={[0.4, 0.7, 4]} />
                <meshStandardMaterial color="lightblue" roughness={0.3} metalness={0.9} />
            </mesh>
        </Float>
        <Float speed={4} rotationIntensity={2} floatIntensity={2}>
            <mesh position={[-0.5, 1.5, -3]} castShadow>
                <torusGeometry args={[0.3, 0.15, 16, 100]} />
                <meshStandardMaterial color="orange" roughness={0.2} metalness={1.0} />
            </mesh>
        </Float>
        <Float speed={5} rotationIntensity={2.5} floatIntensity={2}>
            <mesh position={[0.5, 0, -3.5]} castShadow>
                <octahedronGeometry args={[0.6, 0]} />
                <meshStandardMaterial color="lightgreen" roughness={0.1} metalness={1.0} />
            </mesh>
        </Float>
      </group>
      <ContactShadows position={[0, -0.5, 0]} opacity={0.5} scale={10} blur={1} far={10} resolution={256} color="#000000" />
      <Environment preset="sunset" />
    </Canvas>
  )
}
