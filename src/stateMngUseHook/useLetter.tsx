// hooks/useLetter.tsx
import React, { createContext, useContext, useReducer } from 'react';

// 상태 타입 정의
interface LetterState {
    id: number;
    title: string;
    content: string;
}

type LetterAction = {
    type: 'ADD_LETTER';
    payload: { title: string; content: string };
};

// 리듀서 작성
const letterReducer: any = (
    state: LetterState[],
    action: LetterAction
): LetterState[] => {
    switch (action.type) {
        case 'ADD_LETTER':
            return [
                ...state,
                {
                    id: state.length + 1,
                    title: action.payload.title,
                    content: action.payload.content,
                },
            ];
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
};

// Context 생성
const LetterStateContext = createContext<LetterState[] | undefined>(undefined);
const LetterDispatchContext = createContext<
    React.Dispatch<LetterAction> | undefined
>(undefined);

// Provider 작성
export const LetterProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [state, dispatch] = useReducer(letterReducer, []);

    return (
        <LetterStateContext.Provider value={state}>
            <LetterDispatchContext.Provider value={dispatch}>
                {children}
            </LetterDispatchContext.Provider>
        </LetterStateContext.Provider>
    );
};

// 커스텀 Hook
export const useLetterState = () => {
    const context = useContext(LetterStateContext);
    if (!context) {
        throw new Error('useLetterState must be used within a LetterProvider');
    }
    return context;
};

export const useLetterDispatch = () => {
    const context = useContext(LetterDispatchContext);
    if (!context) {
        throw new Error(
            'useLetterDispatch must be used within a LetterProvider'
        );
    }
    return context;
};
