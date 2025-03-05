import React from "react";
import LetterForm from "./LetterForm";
import LettersList from "./LettersList";

function LetterComponent() {
  return (
    <div>
      <h1>편지 작성하기</h1>

      <LetterForm />

      <h1>편지 목록</h1>

      <LettersList />
    </div>
  );
}

export default LetterComponent;
