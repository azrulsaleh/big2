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
			<div className='
				fixed
				justify-center
				top-2/5 left-1/2 -translate-1/2
				text-n6
			'>
				<div className='
					flex flex-row
					gap-[clamp(1rem,15vw,4rem)] md:gap-[4rem]
					items-center
				'>
					<div className='
						flex flex-row font-thin
						text-[clamp(4rem,16vw,8rem)] md:text-[8rem]
						gap-[clamp(1rem,15vw,4rem)] md:gap-[4rem]
					'>
						<div>B</div>
						<div>I</div>
						<div>G</div>
					</div>
					<div className='
						font-extrabold
						text-[clamp(8rem,32vw,16rem)] md:text-[16rem]
					'>
						2
					</div>
				</div>
				{/* -top-[clamp()] md:-top-10 */}
				<div className='
					relative text-[1rem] text-center text-b5 font-light tracking-widest
					-top-[clamp(10px,5vw,50px)] md:-top-[50px]
				'>
					A 42 TRANSCENDENCE PROJECT
				</div>
			</div>
		</div>
	);
}