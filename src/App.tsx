export default function App() {
	return (
		<div>
			<div className="
				absolute
				-z-10
			">
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
				<div className="
					flex flex-row
					gap-[clamp(1rem,15vw,4rem)] md:gap-[4rem]
					items-center
				">
					<div className="
						flex flex-row font-thin
						text-[clamp(4rem,16vw,8rem)] md:text-[8rem]
						gap-[clamp(1rem,15vw,4rem)] md:gap-[4rem]
					">
						<div>B</div>
						<div>I</div>
						<div>G</div>
					</div>
					<div className="
						font-extrabold
						text-[clamp(8rem,32vw,16rem)] md:text-[16rem]
					">
						2
					</div>
				</div>
				<div className="
					relative text-[1rem] text-center text-b5 font-light tracking-widest
					-top-[clamp(10px,5vw,50px)] md:-top-[50px]
				">
					A 42 TRANSCENDENCE PROJECT
				</div>
			</div>
			<div className="
				fixed
				w-full h-[70px]
				content-center
				bottom-1/4
			">
				<div className="
					flex justify-center
					gap-[clamp(1px,5vw,20px)] sm:gap-[20px] 
				">
					<div className="flex flex-col">
						<div className="
							w-[clamp(150px,50vw,270px)] md:w-[270px]
							h-[70px]
							text-center content-center
						">
							<button className="btn">
								SIGN IN
							</button>
						</div>
						<div className="
							w-[clamp(150px,50vw,270px)] md:w-[270px]
							h-[70px]
							text-center content-center
						">
							<button className="
								text-n6 hover:text-b5 active:text-n0
								bg-none active:bg-b5
								hover:border border-n5 active:border-b6
								rounded-lg hover:rounded-xl
								w-[calc(100%-20px)] hover:w-[calc(100%)]
								h-[calc(100%-20px)] hover:h-[calc(100%)]
								transition-all
								text-nowrap
							">
								<u>CREATE ACCOUNT</u>
							</button>
						</div>
					</div>
					<div className="
						w-[clamp(150px,50vw,270px)] md:w-[270px]
						h-[70px]
						text-center content-center
					">
						<button className="btn">
							PLAY AS GUEST
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}