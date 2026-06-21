import { BtnClose } from './CloseButton';

interface InfoProps {
	call?: () => void;
	dismiss?: () => void;
}

export const InfoButton = ({ call }: InfoProps) => {
	return (
		<button data-tip="Info" onClick={call} disabled={!call} className='btn-icon'>
			<svg height="50" width="50" fill="none" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
				<rect className='svg-bg' height="49" width="49" rx="24.5" x="0.5" y="0.5"/>
				<path className='svg-icon' d="M25 12.5C18.0965 12.5 12.5 18.0964 12.5 25C12.5 31.9035 18.0965 37.5 25 37.5C31.9036 37.5 37.5 31.9036 37.5 25C37.5 18.0964 31.9036 12.5 25 12.5ZM25 35C19.486 35 15 30.514 15 25C15 19.486 19.486 15 25 15C30.5141 15 35 19.486 35 25C35 30.514 30.5141 35 25 35ZM26.5653 20C26.5653 20.9063 25.9054 21.5625 25.0127 21.5625C24.0839 21.5625 23.4402 20.9063 23.4402 19.9827C23.4402 19.095 24.1013 18.4375 25.0127 18.4375C25.9054 18.4375 26.5653 19.095 26.5653 20ZM23.7528 23.75H26.2527V31.25H23.7528V23.75Z" fillRule="evenodd"/>
			</svg>
		</button>
	);
};

export const InfoPopup = ({ dismiss }: InfoProps) => {
	return (
		<div className="
			z-1 absolute top-0 left-0 w-full h-full
			flex place-content-center place-items-center
		">
			<button className='btn-lightbox' onClick={dismiss}/>
			<div className='
				z-0 w-[calc(100vw-95px)] h-[calc(100vh-95px)] overflow-scroll
				border border-n2 rounded-2xl
			'>
				<div className='
					w-full h-[2000px] p-10
					bg-linear-to-b from-a4 to-b4
					flex flex-col place-content-between
				'>
					<p>Start of info content</p>
					<p>End of info content</p>
				</div>
			</div>
			<div className='z-1 absolute right-0 top-0 -translate-x-[calc(50%)] translate-y-[calc(50%)]'>
				<BtnClose dismiss={dismiss}/>
			</div>
		</div>
	);
}