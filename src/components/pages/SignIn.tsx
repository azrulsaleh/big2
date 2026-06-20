import { useState } from 'react';
import { BtnInfo } from "../buttons/BtnInfo";
import { PopInfo } from "../popup/PopInfo";
import { PopSignIn } from "../popup/PopSignIn";
import { PopCreateAccount } from "../popup/PopCreateAccount";

export const SignIn = () => {
	const [showInfo, setShowInfo] = useState<boolean>(false);
	const [showCreateAccount, setShowCreateAccount] = useState<boolean>(false);
	const [showSignIn, setShowSignIn] = useState<boolean>(false);

	return (
		<>
			<div className='min-w-fit w-screen h-screen grid grid-rows-[90px_32fr_30px_1fr_70px_16fr]'>
				<div className='row-start-1 flex justify-end p-5'>
					<BtnInfo onClick={() => setShowInfo(true)} />
				</div>
				<div className='row-start-2
					flex place-content-center place-items-center
					overflow-y-clip [overflow-clip-margin:100px]
				'>
					<div className='flex gap-5 place-items-center'>
						<h2 className="flex gap-8"><span>B</span><span>I</span><span>G</span></h2>
						<h1>2</h1>
					</div>
				</div>
				<div className='row-start-3 flex place-content-center place-items-center'>
					<h3 className='text-center'>A 42 TRANSCENDENCE PROJECT</h3>
				</div>
				<div className='row-start-5 flex place-content-center place-items-center p-5 gap-5 overflow-y-hidden'>
					<button className="btn-text" onClick={() => {setShowSignIn(true)}}>
						SIGN IN
					</button>
					<button className="btn-text">
						PLAY AS GUEST
					</button>
				</div>
				<div className='row-start-6 flex place-content-center place-items-start'>
					<button className="btn-clear" onClick={() => {setShowCreateAccount(true)}}>
						<u>CREATE ACCOUNT</u>
					</button>
				</div>
			</div>
			{ showInfo && <PopInfo onClick={() => setShowInfo(false)} /> }
			{ showSignIn && <PopSignIn onClick={() => setShowSignIn(false)} /> }
			{ showCreateAccount && <PopCreateAccount onClick={() => setShowCreateAccount(false)} /> }
		</>
	);
}