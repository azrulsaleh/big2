import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		{/* border border-white */}
		<main className="
			w-screen min-w-140.5 max-w-304.5
			h-screen min-h-140.5 max-h-304.5
			mx-auto
		">
			<App />
		</main>
		<footer className="grid grid-cols-3 h-25">
			<div className="col-start-1 bg-r1" />
			<div className="col-start-2 bg-r2" />
			<div className="col-start-3 bg-r3" />
		</footer>
	</StrictMode>
)
