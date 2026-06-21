import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { Lobby } from "./pages/Lobby";
import { Gameplay } from "./pages/Gameplay";
import { Three } from "./pages/Three";
import { Results } from "./pages/Results";

// export enum GameScene {
// 	LOGIN = "LOGIN",
// 	HOME = "HOME",
// 	LOBBY = "LOBBY",
// 	GAMEPLAY = "GAMEPLAY",
// 	THREE = "THREE",
// 	RESULTS = "RESULTS",
// }

export default function App() {
	// const currentScene = useGameStore((state) => state.currentScene);

	return (
		<>
			<Login />
			{/* <Home /> */}
			{/* <Lobby /> */}
			{/* <Gameplay /> */}
			{/* <Three /> */}
			{/* <Results /> */}
			{/* {currentScene === GameScene.LOGIN && <Login />} */}
			{/* {currentScene === GameScene.HOME && <Home />} */}
			{/* {currentScene === GameScene.LOBBY && <Lobby />} */}
			{/* {currentScene === GameScene.GAMEPLAY && <Gameplay />} */}
			{/* {currentScene === GameScene.THREE && <Three />} */}
			{/* {currentScene === GameScene.RESULTS && <Results />} */}
		</>
	);
}