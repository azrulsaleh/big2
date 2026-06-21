export const StripeBg = () => {
	return (
		<div className="absolute -z-10">
			<svg
				width="100vw"
				height="100vh"
				viewBox="0 0 100 100"
				className='overflow-visible'
			>
				<polygon
					points="100,-100 200,-100 -200,500 -300,500"
					fill="var(--color-a1)"
					stroke="var(--color-a2)"
					strokeWidth="0.1"
				/>
			</svg>
		</div>
	)
}