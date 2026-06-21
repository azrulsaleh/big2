interface BtnCloseProps {
	dismiss?: () => void;
}

export const BtnClose = (
	{ dismiss }: BtnCloseProps
) => {
	return (
		<button data-tip="Close" onClick={dismiss} disabled={!dismiss} className='btn-icon'>
            <svg height="50" width="50" fill="none" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                <circle className='svg-bg'  cx="25" cy="25" r="24.5"/>
                <path className='svg-icon' d="M31.982 33.685L16.0721 17.7751L18.7719 15.0752L34.6818 30.9851L31.982 33.685ZM18.7719 33.685L16.0721 30.9851L31.982 15.0752L34.6818 17.7751L18.7719 33.685Z"/>
            </svg>
		</button>
	);
};