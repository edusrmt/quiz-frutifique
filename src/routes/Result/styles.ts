import styled from 'styled-components';
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
  width: 50%;
`;

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const ResultHeader = styled.div`
  padding: 0.75rem 1rem 1rem;
  background-color: #eb4600;
  color: #f8f8ff;
  font-weight: bold;
  border-radius: 16px 16px 0 0;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;

export const ResultContent = styled.div`
  padding: 1.5rem 2rem;
  margin-top: -16px;
  background-color: #f8f8ff;
  border-radius: 16px;
  box-shadow: rgba(204, 219, 232, 0.5) -3px -3px 6px 0px inset,
    rgba(255, 255, 255, 0.25) 3px 3px 6px 1px inset;
`;

export const ResultTitle = styled.h2`
  font-family: 'Cooper BT', serif;
  color: #eb4600;
  margin-bottom: 1rem;
`;

export const ResultDescription = styled.p`
  font-weight: 600;
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
  margin-top: 2rem;
  animation: wiggle ease-in-out 12s infinite;
`;
