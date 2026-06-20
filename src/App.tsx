import { useState } from 'react';

export default function App() {
	const [showInfo, setShowInfo] = useState(false);
	const [showCreateAccount, setShowCreateAccount] = useState(false);
	const [showSignIn, setShowSignIn] = useState(false);

	return (
		<>
			{/* bg */}
			<div className="absolute -z-1">
				<svg
					width="100vw"
					height="100vh"
					viewBox="0 0 100 100"
					className='overflow-visible'
				>
					<polygon
						points="100,-100 200,-100 0,200 -100,200"
						fill="var(--color-a1)"
						stroke="var(--color-a2)"
						strokeWidth="0.1"
					/>
				</svg>
			</div>
			
			{/* main */}
			<div className="z-0 w-full h-full grid grid-rows-[50px_1fr_50px_50px_100px] my-5">
				<div className="row-start-1 flex justify-end mr-5">
					<button className="btn-icon" data-tip="Info"
						onClick={() => {setShowInfo(true)}}
					>
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
				<div className="
					row-start-2 my-25
					flex flex-col
					place-content-center place-items-center
				">
					<div className="
						flex justify-center items-center
						h-62.5 gap-5
					">
						<h2 className="mt-3.75"><span>B</span><span>I</span><span>G</span></h2>
						<h1>2</h1>
					</div>
					<h3 className="text-center">
						A 42 TRANSCENDENCE PROJECT
					</h3>
				</div>
				<div className="row-start-3 flex place-content-center gap-5">
					<button className="btn-text w-62.5 h-full"
						onClick={() => {setShowSignIn(true)}}
					>
						SIGN IN
					</button>
					<button className="btn-text w-62.5 h-full">
						PLAY AS GUEST
					</button>
				</div>
				<div className="row-start-4 flex place-content-center gap-5">
					<button className="btn-clear w-62.5 h-full"
						onClick={() => {setShowCreateAccount(true)}}
					>
						<u>CREATE ACCOUNT</u>
					</button>
					<div className="w-62.5 h-full" />
				</div>
			</div>

			{showInfo &&
				<div className="
					w-full h-full
					absolute
					z-1 top-0 left-0
					flex place-content-center place-items-center
				">
					<button className="
						-z-1 absolute
						backdrop-blur-sm
						bg-n0/50 hover:bg-n0/25
						w-full h-full
						transition-all
						"
						onClick={() => setShowInfo(false)}
					/>
					<div className="
						z-0
						w-[calc(100vw-95px)] h-[calc(100vh-95px)]
						border border-n2 rounded-2xl
						overflow-scroll
					">
						<div className="
							w-full h-[2000px]
							bg-linear-to-b from-a4 to-b4
							p-10
						">
							<h4>Info content here...</h4>
						</div>
					</div>
					<button className="z-1 btn-icon absolute right-0 top-0 -translate-x-[calc(50%-3px)] translate-y-[calc(50%-4px)]"
						data-tip="Close"
						onClick={() => {setShowInfo(false)}}
					>
						<svg height="19" width="19" fill="none" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.9099 18.6098L2.52881e-07 2.69986L2.69986 1.01152e-06L18.6098 15.9099L15.9099 18.6098ZM2.69986 18.6098L0 15.9099L15.9099 0L18.6098 2.69986L2.69986 18.6098Z" fill="#EBBB52"/>
						</svg>
					</button>
				</div>
			}

			{showSignIn && 
				<div className="
					w-full min-w-full h-full
					absolute
					z-1 top-0 left-0
					flex place-content-center place-items-center
				">
					<button className="
						-z-1 absolute
						backdrop-blur-sm
						bg-n0/50 hover:bg-n0/25
						w-full h-full
						transition-all
						"
						onClick={() => setShowSignIn(false)}
					/>
					<div className="
						z-0
						w-full max-w-125
						border border-n2 rounded-2xl
						bg-n1 px-6 py-8
						flex flex-col gap-5
						absolute
					">
						<div className="w-full flex gap-5 place-content-center place-items-center">
							<label htmlFor="email" className="w-1/4 text-white text-lg text-right">Email</label>
							<input id="email" className='bg-n6 w-3/4 h-7.5 rounded-xl p-5' />
						</div>
						<div className="w-full flex gap-5 place-content-center place-items-center">
							<label htmlFor="password" className="w-1/4 text-white text-lg text-right">Password</label>
							<input id="password" className='bg-n6 w-3/4 h-7.5 rounded-xl p-5' />
						</div>
						<div className='flex place-content-center'>
							<button className="btn-text w-full min-w-50 max-w-62.5 h-12.5">
								SIGN IN
							</button>
						</div>
						<button className="z-1 btn-icon absolute
							translate-x-[50%] translate-y-[-50%]
							right-0 top-0
							"
							data-tip="Close"
							onClick={() => {setShowSignIn(false)}}
						>
							<svg height="19" width="19" fill="none" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.9099 18.6098L2.52881e-07 2.69986L2.69986 1.01152e-06L18.6098 15.9099L15.9099 18.6098ZM2.69986 18.6098L0 15.9099L15.9099 0L18.6098 2.69986L2.69986 18.6098Z" fill="#EBBB52"/>
							</svg>
						</button>
					</div>
				</div>
			}

			{showCreateAccount && 
				<div className="
					w-full min-w-full h-full
					absolute
					z-1 top-0 left-0
					flex place-content-center place-items-center
				">
					<button className="
						-z-1 absolute
						backdrop-blur-sm
						bg-n0/50 hover:bg-n0/25
						w-full h-full
						transition-all
						"
						onClick={() => setShowCreateAccount(false)}
					/>
					<div className="
						z-0
						w-full max-w-125
						border border-n2 rounded-2xl
						bg-n1 px-6 py-8
						flex flex-col gap-5
						absolute
					">
						<div className="w-full flex gap-5 place-content-center place-items-center">
							<label htmlFor="email" className="w-1/4 text-white text-lg text-right">Email</label>
							<input id="email" className='bg-n6 w-3/4 h-7.5 rounded-xl p-5' />
						</div>
						<div className="w-full flex gap-5 place-content-center place-items-center">
							<label htmlFor="password" className="w-1/4 text-white text-lg text-right">Password</label>
							<input id="password" className='bg-n6 w-3/4 h-7.5 rounded-xl p-5' />
						</div>
						<div className='flex place-content-center'>
							<button className="btn-text w-full min-w-50 max-w-62.5 h-12.5">
								CREATE ACCOUNT
							</button>
						</div>
						<button className="z-1 btn-icon absolute
							translate-x-[50%] translate-y-[-50%]
							right-0 top-0
							"
							data-tip="Close"
							onClick={() => {setShowCreateAccount(false)}}
						>
							<svg height="19" width="19" fill="none" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg">
								<path d="M15.9099 18.6098L2.52881e-07 2.69986L2.69986 1.01152e-06L18.6098 15.9099L15.9099 18.6098ZM2.69986 18.6098L0 15.9099L15.9099 0L18.6098 2.69986L2.69986 18.6098Z" fill="#EBBB52"/>
							</svg>
						</button>
					</div>
				</div>
			}
		</>
	);
}