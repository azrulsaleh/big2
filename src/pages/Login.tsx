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
		{/* grid grid-rows-[90px_2fr_8fr_30px_2fr_70px_4fr] grid-cols-[1fr] */}
			<div className='
				z-[-1] absolute
				w-full min-w-140.5
				h-full min-h-140.5 max-h-304.5
			'>
				<StripeBg />
			</div>
			<div className='
				w-full min-w-140.5
				h-full min-h-140.5 max-h-304.5
				z-0 pointer-events-none
				mx-auto
			'>
				<div className='
					z-[-1] absolute pointer-events-auto
					w-full min-w-140.5
					h-full min-h-140.5 max-h-304.5
					overflow-visible
				'>
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
						<HoverCard interactive={false} position={[-0.25, 0.5, 0.5]} rotation={[0, 0, 10 *(Math.PI / 180)]} />
						<HoverCard interactive={false} position={[0.25, 0.5, 0.51]} rotation={[0, 0, -10 *(Math.PI / 180)]} />
					</Canvas>
				</div>
				<div className='
					grid grid-rows-[90px_1fr_10fr_30px_2fr_70px_4fr] grid-cols-[1fr]
					w-full h-full
				'>
					<div className='row-[1/1] col-[1/1]'>
						<div className='flex justify-end p-5'>
							<InfoButton call={() => setShowInfo(true)} />
						</div>
					</div>
					<div className='row-[3/3] col-[1/1]'>
						<BigLogo />
					</div>
					<div className='row-[4/4] col-[1/1]'>
						<div className='flex place-content-center place-items-center'>
							<h3 className='text-center'>A 42 TRANSCENDENCE PROJECT</h3>
						</div>
					</div>
					<div className='row-[5/5] col-[1/1]'>
						<div className='flex place-content-center place-items-center p-5 gap-5 overflow-y-hidden'>
							<SignInButton call={() => setShowSignIn(true)} />
							<button className="btn-text" onClick={handlePlayAsGuest}>
								PLAY AS GUEST
							</button>
						</div>
					</div>
					<div className='row-[6/6] col-[1/1]'>
						<div className='flex place-content-center place-items-start'>
							<CreateAccountButton call={() => setShowCreateAccount(true)} />
						</div>
					</div>
				</div>
			</div>
			{ showInfo && <InfoPopup dismiss={() => setShowInfo(false)} /> }
			{ showSignIn && <SignInPopup dismiss={() => setShowSignIn(false)} /> }
			{ showCreateAccount && <CreateAccountPopup dismiss={() => setShowCreateAccount(false)} /> }
		</>
	);
}