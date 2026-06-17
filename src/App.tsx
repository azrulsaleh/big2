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
				fixed top-[20px] right-[20px]
				w-[70px] h-[70px]
				content-center
				">
				<div className="
					flex
					bg-n1 active:bg-b4
					border border-n2 active:bg-b5
					w-[calc(100%-20px)] hover:w-[calc(100%)]
					h-[calc(100%-20px)] hover:h-[calc(100%)]
					rounded-[25px] hover:rounded-[35px]
					m-auto
					transition-all
				">
					<button className="
						flex justify-center m-auto
					">
						<svg
							height="25" width="25"
							viewBox="0 0 25 25"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className="icon"
						>
							<path
								d="M12.5 0C5.59647 0 0 5.59641 0 12.5C0 19.4035 5.59647 25 12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59641 19.4036 0 12.5 0ZM12.5 22.5C6.98602 22.5 2.50002 18.014 2.50002 12.5C2.50002 6.98596 6.98596 2.50002 12.5 2.50002C18.0141 2.50002 22.5 6.98596 22.5 12.5C22.5 18.014 18.0141 22.5 12.5 22.5ZM14.0653 7.5C14.0653 8.40633 13.4054 9.06252 12.5127 9.06252C11.5839 9.06252 10.9402 8.40627 10.9402 7.48266C10.9402 6.59496 11.6013 5.93754 12.5127 5.93754C13.4054 5.93754 14.0653 6.59496 14.0653 7.5ZM11.2528 11.25H13.7527V18.75H11.2528V11.25Z"
								fillRule="evenodd"
							/>
						</svg>
					</button>
				</div>
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
								text-n6 active:text-n0
								bg-none active:bg-b5
								hover:border
								border-n5 active:border-b6
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