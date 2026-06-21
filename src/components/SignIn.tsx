import { BtnClose } from './CloseButton';

interface SignInProps {
	call?: () => void;
    dismiss?: () => void;
}

export const SignInButton = ({ call }: SignInProps) => {
	return (
		<button className="btn-text" onClick={call}>
			SIGN IN
		</button>
	);
}

export const SignInPopup = ({ dismiss }: SignInProps) => {
    return (
		<div className="
			z-1 absolute top-0 left-0 w-full h-full
			flex place-content-center place-items-center
        ">
            <button className='btn-lightbox' onClick={dismiss}/>
            <div className='
				min-w-100 w-125 min-h-25
				flex px-10
            '>
				<div className='
					bg-n1 border border-n2 rounded-2xl
					w-full px-6 py-6
					relative
				'>
					<div className='flex flex-col place-content-center place-items-center gap-5'>
						<div className="grid grid-cols-[75px_1fr] gap-5">
							<label htmlFor="email">Email</label>
							<input id="email" placeholder="cadet@42.edu.my"/>
						</div>
						<div className="grid grid-cols-[75px_1fr] gap-5">
							<label htmlFor="password">Password</label>
							<input id="password" placeholder="At least 8 characters"/>
						</div>
						<button className="btn-text">
							SIGN IN
						</button>
					</div>
					<div className='z-1 absolute right-0 top-0 translate-x-[50%] translate-y-[-50%]'>
						<BtnClose dismiss={dismiss}/>
					</div>
				</div>
            </div>
        </div>
    );
}