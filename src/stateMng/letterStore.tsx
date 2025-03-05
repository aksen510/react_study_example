import { create } from 'zustand';

// letterStore.ts

interface letterState {
    id: number;
    title: string;
    content: string;
}

interface letterListState {
    letters: letterState[];

    addLetter: (newLetter: { title: string; content: string }) => void;
}

export const useLetterStore = create<letterListState>((set) => ({
    letters: [],

    addLetter: ({ title, content }) =>
        set((state) => ({
            letters: [
                ...state.letters,
                {
                    id: state.letters.length + 1,
                    title,
                    content,
                },
            ],
        })),
}));
