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
			<div className="
				fixed
				justify-center
				top-2/5 left-1/2 -translate-1/2
				text-n6
			">
				<div className='flex flex-row gap-[clamp(1rem,5vw,10rem)] items-center'>
					<div className='
						flex flex-row
						gap-[clamp(1rem,5vw,10rem)]
						font-thin
						text-[clamp(7rem,15vw,15rem)]
					'>
						<h1>B</h1>
						<h1>I</h1>
						<h1>G</h1>
					</div>
					<h1 className='text-[clamp(15rem,25vw,25rem)] font-extrabold'>2</h1>
				</div>
			</div>
		</div>
	);
}