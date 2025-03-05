import React from "react";
import { useState } from "react";
import { useLetterStore } from "./letterStore";

const LetterForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addLetter = useLetterStore((state) => state.addLetter); // addLetter

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addLetter({ title, content }); // addLetter
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목"
      />

      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용"
      />

      <button type="submit">편지 추가</button>
    </form>
  );
};

export default LetterForm;
