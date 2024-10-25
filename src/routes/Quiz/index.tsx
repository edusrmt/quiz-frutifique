import { useContext, useMemo, useState } from 'react';
import { Button } from '../../components/Button';
import {
  LargeImage,
  OptionsContainer,
  PageContainer,
  ProgressBar,
  QuestionContainer,
  QuestionSpacer,
  SmallImage,
} from './styles';
import { QUESTIONNAIRE } from '../../data/questionnaire';
import { QuizContext } from '../../contexts/QuizContext';
import { useNavigate } from 'react-router-dom';
import frutifiqueImg from '../../assets/frutifique-only.png';
import elasPorElasLogo from '../../assets/epe-logo.png';

export function QuizPage() {
  const navigate = useNavigate();
  const { addScore } = useContext(QuizContext);
  const [curQuestion, setCurQuestion] = useState(0);

  const quizData = useMemo(() => {
    const shuffledArray = [...QUESTIONNAIRE];

    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }

    return shuffledArray;
  }, []);

  const handleSelectOption = (score: number) => {
    addScore(quizData[curQuestion].fruit, score);

    if (curQuestion < 44) {
      setCurQuestion(curQuestion + 1);
    } else {
      navigate('/resultado');
    }
  };

  return (
    <PageContainer>
      <LargeImage src={frutifiqueImg} alt="Frutifique" />
      <QuestionSpacer>
        <QuestionContainer>
          <span>{`#${curQuestion + 1}`}</span>
          <p>{quizData[curQuestion].wording}</p>
        </QuestionContainer>
      </QuestionSpacer>
      <OptionsContainer>
        <Button onClick={() => handleSelectOption(3)}>Sempre</Button>
        <Button onClick={() => handleSelectOption(2)}>Às vezes</Button>
        <Button onClick={() => handleSelectOption(1)}>Raramente</Button>
        <Button onClick={() => handleSelectOption(0)}>Nunca</Button>
      </OptionsContainer>
      <SmallImage src={elasPorElasLogo} alt="Elas por Elas" />
      <ProgressBar
        style={{ width: `${(curQuestion / 45) * 100}vw` }}
      ></ProgressBar>
    </PageContainer>
  );
}
