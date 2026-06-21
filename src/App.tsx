import { useGameStore } from "./store/useGameStore";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Lobby } from "./pages/Lobby";
import { Gameplay } from "./pages/Gameplay";
import { ThreeGameplay } from "./pages/ThreeGameplay";
import { Results } from "./pages/Results";

export default function App() {
	const currentScene = useGameStore((state) => state.currentScene);

	return (
		<>
			{currentScene === 'LOGIN' && <Login />}
			{currentScene === 'HOME' && <Home />}
			{currentScene === 'LOBBY' && <Lobby />}
			{currentScene === 'GAMEPLAY' && <Gameplay />}
			{currentScene === 'THREEGAMEPLAY' && <ThreeGameplay />}
			{currentScene === 'RESULTS' && <Results />}
		</>
	);
}