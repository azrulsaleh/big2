import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
		{/* <footer className="grid grid-cols-3 h-25">
			<div className="col-start-1 bg-r1" />
			<div className="col-start-2 bg-r2" />
			<div className="col-start-3 bg-r3" />
		</footer> */}
	</StrictMode>
)
