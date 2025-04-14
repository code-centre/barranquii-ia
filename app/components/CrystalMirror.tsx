"use client"

import { Suspense, useRef, useEffect, useState, MutableRefObject } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls as DreiOrbitControls, Environment, useGLTF } from "@react-three/drei"
import { Vector3, Color, MeshStandardMaterial } from "three"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";

interface Props {
  landing?: string
}

function Particles({ position, count = 50 }: { position: [number, number, number]; count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  const particles = useRef<{ position: Vector3; velocity: Vector3; size: number; color: Color }[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Create particles with random velocities
    particles.current = Array.from({ length: count }, () => ({
      position: new Vector3(
        position[0] + (Math.random() - 0.5) * 0.1,
        position[1] + (Math.random() - 0.5) * 0.1,
        position[2] + (Math.random() - 0.5) * 0.1,
      ),
      velocity: new Vector3(
        (Math.random() - 0.5) * 0.05,
        (Math.random() - 0.5) * 0.05 + 0.02,
        (Math.random() - 0.5) * 0.05,
      ),
      size: Math.random() * 0.03 + 0.01,
      color: new Color().setHSL(Math.random() * 0.2 + 0.5, 0.8, 0.6),
    }))

    // Hide particles after 2 seconds
    const timer = setTimeout(() => setVisible(false), 2000)
    return () => clearTimeout(timer)
  }, [position, count])

  useFrame(() => {
    if (!mesh.current || !visible) return

    // Update particle positions based on velocity
    const positions = mesh.current.geometry.attributes.position.array as Float32Array;
    const colors = mesh.current.geometry.attributes.color.array as Float32Array;

    particles.current.forEach((particle, i) => {
      particle.velocity.y -= 0.0005 // gravity
      particle.position.add(particle.velocity)

      const idx = i * 3
      positions[idx] = particle.position.x
      positions[idx + 1] = particle.position.y
      positions[idx + 2] = particle.position.z

      colors[idx] = particle.color.r
      colors[idx + 1] = particle.color.g
      colors[idx + 2] = particle.color.b
    })

    mesh.current.geometry.attributes.position.needsUpdate = true
    mesh.current.geometry.attributes.color.needsUpdate = true
  })

  if (!visible) return null

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={new Float32Array(count * 3)} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={new Float32Array(count * 3)} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.1} vertexColors sizeAttenuation transparent opacity={0.8} />
    </points>
  )
}

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url) as { scene: THREE.Group };
  const modelRef = useRef<THREE.Group>(null);
  const [clickPosition, setClickPosition] = useState<[number, number, number] | null>(null);
  const time = useRef(0);
  const [hovered, setHovered] = useState(false);

  // Wave animation
  useFrame(() => {
    time.current += 0.01

    if (modelRef.current) {
      // Continue rotation
      modelRef.current.rotation.y += 0.005

      // Apply wave-like deformation to meshes
      modelRef.current.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).geometry) {
          const mesh = child as THREE.Mesh;
          const positions = mesh.geometry.attributes.position.array as Float32Array;
          const originalPositions = mesh.geometry.userData.originalPositions as Float32Array;

          // Store original positions if not already stored
          if (!originalPositions) {
            const original = new Float32Array(positions.length)
            for (let i = 0; i < positions.length; i++) {
              original[i] = positions[i]
            }
            mesh.geometry.userData.originalPositions = original
          }

          // Apply wave deformation
          for (let i = 0; i < positions.length; i += 3) {
            const x = originalPositions[i]
            const y = originalPositions[i + 1]
            const z = originalPositions[i + 2]

            // Create wave effect
            const distance = Math.sqrt(x * x + z * z)
            const amplitude = 0.07
            const frequency = 3
            const waveOffset = Math.sin(distance * frequency + time.current) * amplitude

            positions[i] = x + x * waveOffset * 0.05
            positions[i + 1] = y + waveOffset
            positions[i + 2] = z + z * waveOffset * 0.05
          }

          mesh.geometry.attributes.position.needsUpdate = true
        }
      })
    }
  })

  useEffect(() => {
    if (scene) {
      scene.traverse((child: THREE.Object3D) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          const material = mesh.material as MeshStandardMaterial;

          if (material) {
            material.metalness = 1; // Maximum metallic shine
            material.roughness = 0.1; // Very polished and reflective
            material.envMapIntensity = 2; // Increase ambient brightness
            material.emissiveIntensity = 0.5;
            material.needsUpdate = true;
          }

          mesh.castShadow = true;
          mesh.receiveShadow = true;
        }
      });
    }
  }, [scene])

  const handleClick = (event: any) => {
    event.stopPropagation()
    // Get the click position in 3D space
    setClickPosition([event.point.x, event.point.y, event.point.z])

    // Reset the position after a short delay to trigger a new particle system
    setTimeout(() => setClickPosition(null), 100)
  }

  return (
    <>
      <primitive
        ref={modelRef}
        object={scene}
        scale={1.9}
        position={[0, 0, 0]}
        onClick={handleClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      {clickPosition && <Particles position={clickPosition} />}
    </>
  )
}

// Custom controls component to disable wheel zoom
function CustomControls() {
  const controlsRef = useRef<any>(null);
  const { camera, gl } = useThree();

  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.enableZoom = false;

      const canvas = gl.domElement;
      const preventWheel = (e: WheelEvent) => {
        e.stopPropagation();
      };

      canvas.addEventListener("wheel", preventWheel, { passive: false });

      return () => {
        canvas.removeEventListener("wheel", preventWheel);
      };
    }
  }, [gl]);

  return (
    <DreiOrbitControls
      ref={(ref) => {
        if (ref) controlsRef.current = ref as unknown as OrbitControls;
      }}
      enablePan={false}
      enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 6}
    />
  );
}

export default function ModelViewer({ width = "140%", height = "100vh", landing }: { width?: string, height?: string, landing?: string }) {
  return (
    <div
      style={{
        width,
        height,
        position: "absolute",
        top: -250,
        left: 150,
        zIndex: -1,
        overflow: "visible",
      }}
    >
      <Canvas>
        <fog attach="fog" args={["#001e3c", 5, 30]} />
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[1, 2, 3]}
          intensity={1.5}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <Suspense fallback={null}>
          <Model
            url="/3DFigures/abstract_rainbow_translucent_pendant.glb"
          />
          <Environment preset="sunset" />
        </Suspense>
        <CustomControls />
      </Canvas>
    </div>
  );
}

// Preload the model to avoid waterfall loading
useGLTF.preload("/3DFigures/abstract_rainbow_translucent_pendant.glb")
