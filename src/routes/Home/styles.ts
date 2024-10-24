import styled from 'styled-components';
import squaresBorder from '../../assets/squares-border.png';
import bgFade from '../../assets/fade.png';

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-height: 100dvh;
`;

export const CoverSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 100dvh;
  padding: 4rem 2rem 2rem;

  background-image: url(${bgFade});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
`;

export const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100dvh;
  padding: 2rem;

  border-image-slice: 36;
  border-image-width: 1rem;
  border-image-outset: 0;
  border-image-repeat: round;
  border-image-source: url(${squaresBorder});
  border-style: solid;
  border-width: 0;

  h2 {
    font-family: 'Cooper BT', serif;
    font-size: 1.6rem;
    font-weight: bold;
    color: #eb4600;
  }

  p {
    text-align: justify;
  }
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LargeImage = styled.img`
  width: 100%;
`;

export const FloatingImage = styled.img`
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-13%);
    }
    100% {
      transform: translatey(0px);
    }
  }

  width: 70%;
  animation: float 6s ease-in-out infinite;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.65rem;
    font-weight: 900;
    text-align: center;
    color: #eb4600;
    font-family: 'Cooper BT', serif;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }
`;

export const SwipeUpContainer = styled.div`
  @keyframes bounce {
    70% {
      transform: translateY(0%);
    }
    80% {
      transform: translateY(-15%);
    }
    90% {
      transform: translateY(0%);
    }
    95% {
      transform: translateY(-7%);
    }
    97% {
      transform: translateY(0%);
    }
    99% {
      transform: translateY(-3%);
    }
    100% {
      transform: translateY(0);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  animation: bounce 2s ease infinite;

  img {
    width: 1rem;
  }

  p {
    text-transform: uppercase;
    font-weight: bold;
    color: #ffffff;
    text-shadow: 0px 2px 0px #b2a98f, 0px 6px 10px rgba(0, 0, 0, 0.15);
  }
`;
