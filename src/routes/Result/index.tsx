import { Key, useContext, useEffect, useState } from 'react';
import { Fruits, QuizContext } from '../../contexts/QuizContext';
import {
  LargeImage,
  PageContainer,
  ResultContainer,
  ResultContent,
  ResultDescription,
  ResultHeader,
  ResultTitle,
  SmallImage,
} from './styles';
import { Button } from '../../components/Button';
import frutifiqueImg from '../../assets/frutifique-only.png';
import elasPorElasLogo from '../../assets/epe-logo.png';
import { FruitsDescription } from '../../data/fruits';
import { useNavigate } from 'react-router-dom';

type ResultType = {
  fruit: string;
  isHigh: boolean;
};

export function ResultPage() {
  const navigate = useNavigate();
  const { fruits, resetScore } = useContext(QuizContext);
  const [results, setResults] = useState<ResultType[]>([]);
  const [curSlide, setCurSlide] = useState(0);

  useEffect(() => {
    let highs: ResultType[] = [];
    let lows: ResultType[] = [];
    let topValue = 0;
    let bottomValue = 15;

    for (const [key, value] of Object.entries(fruits)) {
      if (value > topValue) {
        highs = [];
        topValue = value;
      } else if (value < bottomValue) {
        lows = [];
        bottomValue = value;
      }

      if (value === topValue) {
        highs.push({
          fruit: key,
          isHigh: true,
        });
      } else if (value === bottomValue) {
        lows.push({
          fruit: key,
          isHigh: false,
        });
      }
    }

    setResults([...highs, ...lows]);
  }, [fruits]);

  const handleReturnToHome = () => {
    resetScore();
    navigate('/');
  };

  return (
    <PageContainer>
      <LargeImage src={frutifiqueImg} alt="Frutifique" />
      <ResultContainer>
        <ResultHeader>
          {results.length > 0
            ? results[curSlide].isHigh
              ? 'Você se destaca em...'
              : 'Você deveria crescer mais em...'
            : ''}
        </ResultHeader>
        <ResultContent>
          <ResultTitle>
            {results.length > 0
              ? FruitsDescription.get(results[curSlide].fruit)?.title
              : ''}
          </ResultTitle>
          <ResultDescription>
            {results.length > 0
              ? FruitsDescription.get(results[curSlide].fruit)?.description
              : ''}
          </ResultDescription>
        </ResultContent>
      </ResultContainer>
      {curSlide < results.length - 1 ? (
        <Button onClick={() => setCurSlide(curSlide + 1)}>Próximo</Button>
      ) : (
        <Button onClick={handleReturnToHome}>Voltar ao início</Button>
      )}
      <SmallImage src={elasPorElasLogo} alt="Elas por Elas" />
    </PageContainer>
  );
}
