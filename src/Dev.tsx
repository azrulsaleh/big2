import { useGameStore } from './store/useGameStore';

export default function Dev() {
	const setScene = useGameStore((state) => state.setScene);

	return (
		<footer className="flex place-content-evenly">
			<button className="btn-dev" onClick={() => setScene('LOGIN')}>Login</button>
			<button className="btn-dev" onClick={() => setScene('HOME')}>Home</button>
			<button className="btn-dev" onClick={() => setScene('LOBBY')}>Lobby</button>
			<button className="btn-dev" onClick={() => setScene('GAMEPLAY')}>Gameplay</button>
			<button className="btn-dev" onClick={() => setScene('THREEGAMEPLAY')}>Three Gameplay</button>
			<button className="btn-dev" onClick={() => setScene('RESULTS')}>Results</button>
		</footer>
	);
}