import React, { type ReactNode } from 'react';
import { useThree } from '@react-three/fiber';
  
interface ResponsiveHoverLayoutProps {
	children: ReactNode
}

export function ResponsiveHoverLayout({ children }: ResponsiveHoverLayoutProps) {
	// Pull the responsive 3D viewport bounds
	const { viewport } = useThree()

	// Define how much the cards spread out. 
	// At a standard viewport width, this creates a clean distribution.
	const horizontalSpacing = viewport.width * 0.32
	const verticalSpacing = viewport.height * 0.22

	// Dynamically map positions based on current viewport size
	const cardPositions = [
		[-horizontalSpacing,  verticalSpacing, 0], // Top Left
		[ horizontalSpacing,  verticalSpacing, 0], // Top Right
		[ horizontalSpacing, -verticalSpacing, 0], // Bottom Right
		[-horizontalSpacing, -verticalSpacing, 0], // Bottom Left
	]

	return (
		<group>
			{React.Children.map(children, (child, index) => {
				if (!React.isValidElement(child))
					return null;

				// Inject the freshly calculated responsive positions into the cards
				return React.cloneElement(child, {
					position: cardPositions[index] || [0, 0, 0]
				} as Record<string, unknown>)
			})}
		</group>
	)
}