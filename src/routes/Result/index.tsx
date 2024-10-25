import { useContext } from 'react';
import { QuizContext } from '../../contexts/QuizContext';

export function ResultPage() {
  const { fruits } = useContext(QuizContext);

  return <p>{JSON.stringify(fruits)}</p>;
}
