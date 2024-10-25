import { createContext, ReactNode, useState } from 'react';

export enum Fruits {
  Love = 'love',
  Joy = 'joy',
  Peace = 'peace',
  Patience = 'patience',
  Kindness = 'kindness',
  Goodness = 'goodness',
  Faithfulness = 'faithfulness',
  Gentleness = 'gentleness',
  SelfControl = 'selfControl',
}

type QuizContextType = {
  fruits: { [key in Fruits]: number };
  addScore: (fruit: Fruits, value: number) => void;
};

const INITIAL_STATE: QuizContextType = {
  fruits: {
    love: 0,
    joy: 0,
    peace: 0,
    patience: 0,
    kindness: 0,
    goodness: 0,
    faithfulness: 0,
    gentleness: 0,
    selfControl: 0,
  },
  addScore: () => {},
};

export const QuizContext = createContext(INITIAL_STATE);

interface QuizContextProviderProps {
  children: ReactNode;
}

export function QuizContextProvider({ children }: QuizContextProviderProps) {
  const [fruits, setFruits] = useState(INITIAL_STATE.fruits);

  const addScore = (fruit: Fruits, value: number) => {
    const newScore = fruits[fruit] + value;
    setFruits({ ...fruits, [fruit]: newScore });
  };

  return (
    <QuizContext.Provider value={{ fruits, addScore }}>
      {children}
    </QuizContext.Provider>
  );
}
