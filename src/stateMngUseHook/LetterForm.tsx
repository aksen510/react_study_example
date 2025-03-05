// components/LetterForm.tsx
import React, { useState } from 'react';
import { useLetterDispatch } from './useLetter';

const LetterForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const dispatch = useLetterDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch({ type: 'ADD_LETTER', payload: { title, content } });
        setTitle('');
        setContent('');
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
