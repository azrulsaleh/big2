import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function VanillaBox() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0f172a');

    // 2. Camera setup
    const width = currentContainer.clientWidth;
    const height = currentContainer.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    currentContainer.appendChild(renderer.domElement);

    // 4. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // 5. Geometry and Material
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0x10b981 }); // Emerald green
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 6. Handle Container Resize
    const handleResize = () => {
      if (!currentContainer) return;
      const w = currentContainer.clientWidth;
      const h = currentContainer.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // 8. MANDATORY CLEANUP ON UNMOUNT
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      currentContainer.removeChild(renderer.domElement);
      
      // Memory cleanup
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[300px] rounded-xl overflow-hidden relative border border-slate-700" 
    />
  );
}