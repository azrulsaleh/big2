import { BtnClose } from '../buttons/BtnClose';

interface PopInfoProps {
	onClick?: () => void;
}

export const PopInfo = ({ onClick }: PopInfoProps) => {
	return (
		<div className="
			z-1 absolute top-0 left-0 w-full h-full
			flex place-content-center place-items-center
		">
			<button className='btn-lightbox' onClick={onClick}/>
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
				<BtnClose onClick={onClick}/>
			</div>
		</div>
	);
}