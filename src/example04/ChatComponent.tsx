import React, { useRef } from "react";
import { useChatStore } from "./useChatStore.tsx";

export default function ChatComponent() {
  const valueRef = useRef(null);
  const { messages, messageCount, addMessage } = useChatStore();

  const handleSend = () => {
    if (valueRef.current?.value.trim()) {
      addMessage(valueRef.current.value.trim());
      valueRef.current.value = "";
    }
  };

  return (
    <div>
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
      <h2>messageCount: {messageCount}</h2>
      <input ref={valueRef} />
      <button onClick={() => handleSend()}>메시지 보내기</button>
    </div>
  );
}
