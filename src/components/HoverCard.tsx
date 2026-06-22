import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import type { ThreeEvent, ThreeElements } from '@react-three/fiber'
import * as THREE from 'three'
import { useThemeStore } from '../store/useThemeStore'

interface HoverCardProps extends Omit<ThreeElements['mesh'], 'rotation'> {
	rotation?: [number, number, number]
	interactive?: boolean
}
interface CustomUniforms {
	colorTop: { value: THREE.Color }
	colorBottom: { value: THREE.Color }
}

const createCardShape = (width: number, height: number, radius: number): THREE.Shape => {
	const shape = new THREE.Shape();
	const x = -width / 2;
	const y = -height / 2;
	shape.moveTo(x, y + radius);
	shape.lineTo(x, y + height - radius);
	shape.quadraticCurveTo(x, y + height, x + radius, y + height);
	shape.lineTo(x + width - radius, y + height);
	shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
	shape.lineTo(x + width, y + radius);
	shape.quadraticCurveTo(x + width, y, x + width - radius, y);
	shape.lineTo(x + radius, y);
	shape.quadraticCurveTo(x, y, x, y + radius);
	return shape;
}
const borderGeometry = new THREE.ExtrudeGeometry(createCardShape(1, 1.4, 0.06), { depth: 0.005, bevelEnabled: false })
const faceGeometry = new THREE.ExtrudeGeometry(createCardShape(0.92, 1.32, 0.04), { depth: 0.005, bevelEnabled: false })
const injectGradient = (shader: THREE.WebGLProgramParametersWithUniforms, uniforms: CustomUniforms) => {
	shader.uniforms.colorTop = uniforms.colorTop;
	shader.uniforms.colorBottom = uniforms.colorBottom;

	shader.vertexShader = `varying vec2 vUv;\n` + shader.vertexShader;
	shader.vertexShader = shader.vertexShader.replace(
		'#include <begin_vertex>',
		`#include <begin_vertex>\nvUv = uv;`
	);

	shader.fragmentShader = `uniform vec3 colorTop; uniform vec3 colorBottom; varying vec2 vUv;\n` + shader.fragmentShader;
	shader.fragmentShader = shader.fragmentShader.replace(
		'#include <color_fragment>',
		`#include <color_fragment>\nvec3 gradientColor = mix(colorBottom, colorTop, vUv.y);\ndiffuseColor.rgb *= gradientColor;`
	);
};

export function HoverCard({
	rotation = [0, 0, 0],
	interactive = true,
	...props
}: HoverCardProps) {
	const visualMeshRef = useRef<THREE.Group>(null);
	const velocity = useRef({ x: 0, y: 0 });
	const prevMouse = useRef({ x: 0, y: 0 });

	const colors = useThemeStore((state) => state.colors);
	const fetchTailwindColors = useThemeStore((state) => state.fetchTailwindColors);

  useEffect(() => {
    fetchTailwindColors()
  }, [fetchTailwindColors])

  const faceUniforms = useMemo<CustomUniforms>(() => ({
    colorTop: { value: new THREE.Color(colors.faceStart) },
    colorBottom: { value: new THREE.Color(colors.faceEnd) }
	}), []);

  const borderUniforms = useMemo<CustomUniforms>(() => ({
    colorTop: { value: new THREE.Color(colors.borderStart) },
    colorBottom: { value: new THREE.Color(colors.borderEnd) }
	}), []);

  useEffect(() => {
		faceUniforms.colorTop.value.set(colors.faceStart);
		faceUniforms.colorBottom.value.set(colors.faceEnd);
		borderUniforms.colorTop.value.set(colors.borderStart);
		borderUniforms.colorBottom.value.set(colors.borderEnd);
  }, [colors, faceUniforms, borderUniforms])

  useFrame((_, delta) => {
		if (!visualMeshRef.current)
			return;

		if (!interactive)
			return;
    
		visualMeshRef.current.rotation.y += velocity.current.x * delta;
		visualMeshRef.current.rotation.x += velocity.current.y * delta;

		const minSpeedY = 0.025;
		const minSpeedX = 0.05;

		velocity.current.x *= Math.exp(-3 * delta);
		velocity.current.y *= Math.exp(-3 * delta);

		if (Math.abs(velocity.current.x) < minSpeedY)
			velocity.current.x = Math.sign(velocity.current.x || 1) * minSpeedY;

		if (Math.abs(velocity.current.y) < minSpeedX)
			velocity.current.y = Math.sign(velocity.current.y || 1) * minSpeedX;
  })

  const handlePointerMove = (e: ThreeEvent<PointerEvent>) => {
		if (!interactive)
			return;
		e.stopPropagation();
		velocity.current.x = (e.pointer.x - prevMouse.current.x) * 100;
		velocity.current.y = (e.pointer.y - prevMouse.current.y) * 100;
		prevMouse.current = { x: e.pointer.x, y: e.pointer.y };
  }

  return (
    <mesh
      {...props}
			onPointerOver={interactive ? (e) => {
        e.stopPropagation()
        prevMouse.current = { x: e.pointer.x, y: e.pointer.y }
			} : undefined}
      onPointerMove={handlePointerMove}
    >
      <boxGeometry args={[1.2, 1.6, 0.6]} />
      <meshBasicMaterial visible={false} />

      <group ref={visualMeshRef} rotation={rotation}>
        <mesh geometry={borderGeometry}>
          <meshStandardMaterial
            roughness={0.15}
            metalness={0.1}
            onBeforeCompile={(shader) => injectGradient(shader, borderUniforms)}
          />
        </mesh>

        <mesh geometry={faceGeometry} position={[0, 0, 0.001]}>
          <meshStandardMaterial
            roughness={0.15}
            metalness={0.1}
            onBeforeCompile={(shader) => injectGradient(shader, faceUniforms)}
          />
        </mesh>
      </group>
    </mesh>
  )
}