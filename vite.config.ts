import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
	],
	base: '/big2/',
	build: {
		// 1. You can safely bump the warning threshold for 3D apps if you want
		chunkSizeWarningLimit: 1000, 

		// 2. Instruct Rolldown to split massive dependencies into their own files
		rolldownOptions: {
			output: {
				manualChunks(id) {
					// Put Three.js and Fiber into a dedicated 3d-vendor chunk
					if (id.includes('node_modules/three') || id.includes('node_modules/@react-three')) {
						return '3d-vendor';
					}
					// Put other core dependencies (like react, zustand, etc) into a standard vendor chunk
					if (id.includes('node_modules')) {
						return 'vendor';
					}
				},
			},
		},
	},
})
