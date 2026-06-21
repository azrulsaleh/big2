import { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function HoverCard({ rotation = [0, 0, 0], ...props }) {
  const visualMeshRef = useRef()
  const velocity = useRef({ x: 0, y: 0 })
  const prevMouse = useRef({ x: 0, y: 0 })

  // 1. Uniforms for both the Face and Border gradients
  const faceUniforms = useMemo(() => ({
    colorTop: { value: new THREE.Color('#4168be') },
    colorBottom: { value: new THREE.Color('#977732') }
  }), [])

  const borderUniforms = useMemo(() => ({
    colorTop: { value: new THREE.Color('#6c8ccd') }, // Default fallback colors
    colorBottom: { value: new THREE.Color('#be9741') }
  }), [])

  // 2. Fetch Tailwind v4 CSS variables
  useEffect(() => {
    const rootStyle = getComputedStyle(document.documentElement)
    
    // Face colors
    const faceStart = rootStyle.getPropertyValue('--color-a3').trim()
    const faceEnd = rootStyle.getPropertyValue('--color-b3').trim()
    if (faceStart) faceUniforms.colorTop.value.set(faceStart)
    if (faceEnd) faceUniforms.colorBottom.value.set(faceEnd)

    // Border colors (Add these to your Tailwind @theme!)
    const borderStart = rootStyle.getPropertyValue('--color-a4').trim()
    const borderEnd = rootStyle.getPropertyValue('--color-b4').trim()
    if (borderStart) borderUniforms.colorTop.value.set(borderStart)
    if (borderEnd) borderUniforms.colorBottom.value.set(borderEnd)
  }, [faceUniforms, borderUniforms])

  // 3. Helper function to generate rounded card shapes dynamically
  const createCardShape = (width, height, radius) => {
    const shape = new THREE.Shape()
    const x = -width / 2
    const y = -height / 2
    shape.moveTo(x, y + radius)
    shape.lineTo(x, y + height - radius)
    shape.quadraticCurveTo(x, y + height, x + radius, y + height)
    shape.lineTo(x + width - radius, y + height)
    shape.quadraticCurveTo(x + width, y + height, x + width, y + height - radius)
    shape.lineTo(x + width, y + radius)
    shape.quadraticCurveTo(x + width, y, x + width - radius, y)
    shape.lineTo(x + radius, y)
    shape.quadraticCurveTo(x, y, x, y + radius)
    return shape
  }

  // 4. Generate geometries for both the background border and inner face
  const borderGeometry = useMemo(() => {
    // Outer dimensions: 1.0 x 1.4
    const shape = createCardShape(1, 1.4, 0.06)
    return new THREE.ExtrudeGeometry(shape, { depth: 0.005, bevelEnabled: false })
  }, [])

  const faceGeometry = useMemo(() => {
    // Inner dimensions: Slightly smaller to reveal the border (0.04 gap)
    const shape = createCardShape(0.92, 1.32, 0.04)
    return new THREE.ExtrudeGeometry(shape, { depth: 0.005, bevelEnabled: false })
  }, [])

	// Inject custom gradient logic into a standard material
	const injectGradient = (shader, uniforms) => {
		shader.uniforms.colorTop = uniforms.colorTop
		shader.uniforms.colorBottom = uniforms.colorBottom

		// Added \n here
		shader.vertexShader = `varying vec2 vUv;\n` + shader.vertexShader
		shader.vertexShader = shader.vertexShader.replace(
			'#include <begin_vertex>', 
			`#include <begin_vertex>\nvUv = uv;`
		)

		// Added \n here
		shader.fragmentShader = `uniform vec3 colorTop; uniform vec3 colorBottom; varying vec2 vUv;\n` + shader.fragmentShader
		shader.fragmentShader = shader.fragmentShader.replace(
			'#include <color_fragment>',
			`#include <color_fragment>\nvec3 gradientColor = mix(colorBottom, colorTop, vUv.y);\ndiffuseColor.rgb *= gradientColor;`
		)
	}

  // 5. Physics Fling Loop
  useFrame((state, delta) => {
    if (!visualMeshRef.current) return
    visualMeshRef.current.rotation.y += velocity.current.x * delta
    visualMeshRef.current.rotation.x += velocity.current.y * delta
    velocity.current.x *= Math.exp(-3 * delta)
    velocity.current.y *= Math.exp(-3 * delta)
  })

  const handlePointerMove = (e) => {
    e.stopPropagation()
    velocity.current.x = (prevMouse.current.x - e.pointer.x) * 100
    velocity.current.y = (prevMouse.current.y - e.pointer.y) * 100
    prevMouse.current = { x: e.pointer.x, y: e.pointer.y }
  }

  return (
    <mesh
      {...props}
      onPointerOver={(e) => {
        e.stopPropagation()
        prevMouse.current = { x: e.pointer.x, y: e.pointer.y }
      }}
      onPointerMove={handlePointerMove}
    >
      {/* Invisible Core Hitbox */}
      <boxGeometry args={[1.2, 1.6, 0.6]} />
      <meshBasicMaterial visible={false} />

      {/* ROTATING GROUP */}
      <group ref={visualMeshRef} rotation={rotation}>
        
        {/* MESH 1: The Outer Border Card */}
        <mesh geometry={borderGeometry}>
          <meshStandardMaterial
            roughness={0.15}
            metalness={0.1}
            onBeforeCompile={(shader) => injectGradient(shader, borderUniforms)}
          />
        </mesh>

        {/* MESH 2: The Inner Face Card (pushed forward slightly on Z-axis to prevent overlapping glitches) */}
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