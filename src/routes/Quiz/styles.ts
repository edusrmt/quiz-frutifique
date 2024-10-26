import styled from 'styled-components';
import squaresBorder from '../../assets/squares-border.png';
import bgFade from '../../assets/fade.png';

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  min-height: 100dvh;
  padding: 2rem;

  background-image: url(${bgFade});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
`;

export const LargeImage = styled.img`
  width: 80%;
`;

export const QuestionSpacer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

export const QuestionContainer = styled.div`
  padding: 2rem;
  background-color: #f8f8ff;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

  span {
    font-family: 'Cooper BT', serif;
    font-weight: bold;
    color: #eb4600;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  margin-bottom: 2rem;
`;

export const SmallImage = styled.img`
  @keyframes wiggle {
    0% {
      -webkit-transform: rotate(0deg);
    }
    20% {
      -webkit-transform: rotate(10deg);
    }
    40% {
      -webkit-transform: rotate(-10deg);
    }
    60% {
      -webkit-transform: rotate(20deg);
    }
    80% {
      -webkit-transform: rotate(-5deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
    }
  }

  width: 15%;
  margin-bottom: 0.5rem;
  animation: wiggle ease-in-out 12s infinite;
`;

export const ProgressBarContainer = styled.div`
  position: relative;
  margin-bottom: -2rem;
  width: 100vw;
`;

export const ProgressBar = styled.div`
  height: 0.5rem;

  border-image-slice: 36;
  border-image-width: 0.5rem;
  border-image-outset: 0;
  border-image-repeat: space;
  border-image-source: url(${squaresBorder});
  border-style: solid;
  border-width: 0;
`;
