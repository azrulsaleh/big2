import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { R3FBox } from './components/R3FBox';
import { VanillaBox } from './components/VanillaBox';

export default function App() {
  const [activeTab, setActiveTab] = useState<'both' | 'r3f' | 'vanilla'>('both');

  return (
    <div className="flex flex-col h-screen text-slate-100 bg-slate-900 select-none">
      {/* Header Bar */}
      <header className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-950/50 backdrop-blur-md">
        <div>
          <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-rose-400 to-emerald-400 bg-clip-text text-transparent">
            Three.js Implementation Sandbox
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Comparing declarative (React Three Fiber) vs. imperative (Vanilla) inside a TypeScript & Tailwind SPA.
          </p>
        </div>

        {/* Dynamic Navigation Tabs */}
        <div className="flex space-x-1 bg-slate-950 p-1 rounded-lg border border-slate-700">
          {(['both', 'r3f', 'vanilla'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all ${
                activeTab === tab
                  ? 'bg-blue-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'both' ? 'Show Both' : tab.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content Viewport */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 p-6 overflow-hidden">
        
        {/* R3F Component Card */}
        {(activeTab === 'both' || activeTab === 'r3f') && (
          <div className="flex flex-col h-full bg-slate-950/40 rounded-2xl border border-slate-800 p-4 relative">
            <div className="mb-3">
              <span className="px-2 py-1 text-xs font-bold bg-blue-500/10 text-blue-400 rounded-md border border-blue-500/20">
                React Three Fiber
              </span>
              <p className="text-xs text-slate-400 mt-2">
                Interactive: Click to scale, hover to change color to Red. Fully responsive out of the box.
              </p>
            </div>
            
            <div className="flex-1 w-full bg-slate-900 rounded-xl overflow-hidden border border-slate-800 relative">
              {/* The R3F Canvas wraps our component, injecting lights and environment parameters */}
              <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <R3FBox />
              </Canvas>
            </div>
          </div>
        )}

        {/* Vanilla Component Card */}
        {(activeTab === 'both' || activeTab === 'vanilla') && (
          <div className="flex flex-col h-full bg-slate-950/40 rounded-2xl border border-slate-800 p-4 relative">
            <div className="mb-3">
              <span className="px-2 py-1 text-xs font-bold bg-emerald-500/10 text-emerald-400 rounded-md border border-emerald-500/20">
                Vanilla Three.js (Inside React Ref)
              </span>
              <p className="text-xs text-slate-400 mt-2">
                Renders via imperative document lifecycle mounts, handling internal resize listening and cleanup manual hooks.
              </p>
            </div>
            <div className="flex-1">
              <VanillaBox />
            </div>
          </div>
        )}

      </main>
    </div>
  );
}