// components/LettersList.tsx
import React from 'react';
import { useLetterState } from './useLetter';

const LettersList = () => {
    const letters = useLetterState();

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
