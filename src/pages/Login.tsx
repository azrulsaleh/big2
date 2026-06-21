import { useState } from 'react';
import { useGameStore } from '../store/useGameStore';
import { StripeBg } from "../components/StripeBg";
import { BigLogo } from "../components/Logo";
import { InfoButton, InfoPopup } from "../components/Info";
import { SignInButton, SignInPopup } from "../components/SignIn";
import { CreateAccountButton, CreateAccountPopup } from "../components/CreateAccount";

import { Canvas } from '@react-three/fiber';
import { HoverCard } from '../components/HoverCard';
import { ResponsiveHoverLayout } from '../components/ResponsiveHoverLayout';

export const Login = () => {
	const [showInfo, setShowInfo] = useState<boolean>(false);
	const [showSignIn, setShowSignIn] = useState<boolean>(false);
	const [showCreateAccount, setShowCreateAccount] = useState<boolean>(false);
	const setScene = useGameStore((state) => state.setScene);

	const handlePlayAsGuest = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setScene('HOME');
	};

	return (
		<>
			<StripeBg />
			<div className='-z-1 absolute inset-0 w-screen h-screen pointer-events-auto'>
				<Canvas
					camera={{ position: [0, 0, 3] }}
					eventSource={
						typeof window !== 'undefined'
						? document.getElementById('root') || undefined
						: undefined}
				>
					<ambientLight intensity={1.0} />
					<directionalLight position={[10, 10, 5]} intensity={1} />
					<ResponsiveHoverLayout>
						<HoverCard position={[-10, 1, 0]} rotation={[-10 * (Math.PI / 180), 45 * (Math.PI / 180), -60 * (Math.PI / 180)]} />
						<HoverCard position={[10, 1, 0]} rotation={[-10 * (Math.PI / 180), -40 * (Math.PI / 180), -40 * (Math.PI / 180)]} />
						<HoverCard position={[10, -1, 0]} rotation={[-60 * (Math.PI / 180), 20 * (Math.PI / 180), 20 * (Math.PI / 180)]} />
						<HoverCard position={[-10, -1, 0]} rotation={[-50 * (Math.PI / 180), 20 * (Math.PI / 180), 60 * (Math.PI / 180)]} />
					</ResponsiveHoverLayout>
				</Canvas>
			</div>
			<div className='z-0 pointer-events-none min-w-fit w-screen h-screen grid grid-rows-[90px_32fr_30px_1fr_70px_16fr]'>
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
					<button className="btn-text" onClick={handlePlayAsGuest}>
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