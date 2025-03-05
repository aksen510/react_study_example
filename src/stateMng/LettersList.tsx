import React from "react";
import { useLetterStore } from "./letterStore";

const LettersList = () => {
  const letters = useLetterStore((state) => state.letters); // letters

  return (
    <div>
      {letters.map((letter) => (
        <div key={letter.id}>
          <h2>{letter.title}</h2>

          <p>{letter.content}</p>
        </div>
      ))}
    </div>
  );
};

export default LettersList;
