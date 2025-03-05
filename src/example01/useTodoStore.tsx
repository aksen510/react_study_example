import { create } from "zustand";

interface todoState {
	todoStatus: string;
	setTodoStatus: (newStatus: string) => void;
}

export const useTodoStore = create<todoState>((set) => ({
	todoStatus: "all",
	setTodoStatus: (newStatus: string) => set({ todoStatus: newStatus }),
}));
