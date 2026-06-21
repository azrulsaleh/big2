import { create } from "zustand";

export type GameScene = "LOGIN" | "HOME" | "LOBBY" | "GAMEPLAY" | "THREEGAMEPLAY" | "RESULTS";

interface GameState {
    currentScene: GameScene;
    playerName: string;
	score: number;

    setScene: (scene: GameScene) => void;
    setPlayerName: (name: string) => void;
    increaseScore: (by: number) => void;
    resetGame: () => void;
}

export const useGameStore = create<GameState>((set) => ({
    currentScene: "LOGIN",
    playerName: "",
    score: 0,

    setScene: (scene: GameScene) => set({ currentScene: scene }),
    setPlayerName: (name: string) => set({ playerName: name }),
    increaseScore: (by: number) => set((state) => ({ score: state.score + by })),
    resetGame: () => set({ playerName: "", currentScene: "LOGIN", score: 0 }),
}));