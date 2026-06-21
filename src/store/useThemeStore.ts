import { create } from 'zustand'

interface ThemeColors {
	faceStart: string;
	faceEnd: string;
	borderStart: string;
	borderEnd: string;
}

interface ThemeState {
	colors: ThemeColors;
	fetchTailwindColors: () => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
	colors: {
		faceStart: '#4168be',
		faceEnd: '#977732',
		borderStart: '#6c8ccd',
		borderEnd: '#be9741',
	},
	fetchTailwindColors: () => {
		if (typeof window === 'undefined')
			return;

		const rootStyle = getComputedStyle(document.documentElement);

		set({
			colors: {
				faceStart: rootStyle.getPropertyValue('--color-a3').trim() || '#4168be',
				faceEnd: rootStyle.getPropertyValue('--color-b3').trim() || '#977732',
				borderStart: rootStyle.getPropertyValue('--color-a4').trim() || '#6c8ccd',
				borderEnd: rootStyle.getPropertyValue('--color-b4').trim() || '#be9741',
			}
		});
	},
}));