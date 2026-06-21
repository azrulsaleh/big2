import { useState } from 'react';
import { StripeBg } from "../components/StripeBg";
import { BigLogo } from "../components/Logo";
import { InfoButton, InfoPopup } from "../components/Info";
import { SignInButton, SignInPopup } from "../components/SignIn";
import { CreateAccountButton, CreateAccountPopup } from "../components/CreateAccount";

export const Login = () => {
	const [showInfo, setShowInfo] = useState<boolean>(false);
	const [showSignIn, setShowSignIn] = useState<boolean>(false);
	const [showCreateAccount, setShowCreateAccount] = useState<boolean>(false);

	return (
		<>
			<StripeBg />
			<div className='min-w-fit w-screen h-screen grid grid-rows-[90px_32fr_30px_1fr_70px_16fr]'>
				<div className='row-start-1 flex justify-end p-5'>
					<InfoButton call={() => setShowInfo(true)} />
				</div>
				<div className='row-start-2'>
					<BigLogo />
				</div>
				<div className='row-start-3 flex place-content-center place-items-center'>
					<h3 className='text-center'>A 42 TRANSCENDENCE PROJECT</h3>
				</div>
				<div className='row-start-5 flex place-content-center place-items-center p-5 gap-5 overflow-y-hidden'>
					<SignInButton call={() => setShowSignIn(true)} />
					<button className="btn-text">
						PLAY AS GUEST
					</button>
				</div>
				<div className='row-start-6 flex place-content-center place-items-start'>
					<CreateAccountButton call={() => setShowCreateAccount(true)} />
				</div>
			</div>
			{ showInfo && <InfoPopup dismiss={() => setShowInfo(false)} /> }
			{ showSignIn && <SignInPopup dismiss={() => setShowSignIn(false)} /> }
			{ showCreateAccount && <CreateAccountPopup dismiss={() => setShowCreateAccount(false)} /> }
		</>
	);
}