export default function App() {
	return (
		<div>
			<div className='
				absolute
				-z-10
			'>
				<svg
					width="100vw"
					height="100vh"
					viewBox="0 0 100 100"
				>
					<polygon
						points="100,-100 200,-100 0,200 -100,200"
						fill="var(--color-a1)"
						stroke="var(--color-a2)"
						stroke-width="0.1"
					/>
				</svg>
			</div>
			<div className='relative' />
		</div>
	);
}