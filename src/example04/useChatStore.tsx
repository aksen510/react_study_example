import { create } from "zustand";

interface ChatStore {
  messages: string[];
  messageCount: number;
  addMessage: (message: string) => void;
}

export const useChatStore = create<ChatStore>((set) => ({
  messages: [],
  messageCount: 0,
  addMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
      messageCount: state.messages.length + 1,
    })),
}));
