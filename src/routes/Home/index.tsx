import { Button } from '../../components/Button';

import {
  FloatingImage,
  LargeImage,
  PageContainer,
  CoverSection,
  TextContainer,
  IntroSection,
  SwipeUpContainer,
  ImagesContainer,
  CreditsLabel,
} from './styles';
import frutifiqueLogo from '../../assets/frutifique-logo.png';
import fruitImage from '../../assets/fruit.png';
import swipeUp from '../../assets/swipe-up.png';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DesktopWarning } from '../../components/DesktopWarning';

export function HomePage() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (currentPage === 0) {
        if (window.scrollY > 32) {
          setCurrentPage(1);
          window.scrollTo({ top: window.outerHeight, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        if (window.scrollY < window.outerHeight - 32) {
          setCurrentPage(0);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          window.scrollTo({ top: window.outerHeight, behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('scrollend', handleScroll);

    return () => {
      window.removeEventListener('scrollend', handleScroll);
    };
  }, [currentPage]);

  if (window.outerWidth > window.outerHeight) {
    return <DesktopWarning />;
  }

  return (
    <PageContainer>
      <CoverSection>
        <ImagesContainer>
          <LargeImage
            src={frutifiqueLogo}
            alt="Frutifique por Elas Por Elas CCVideira"
          />
          <FloatingImage
            src={fruitImage}
            alt="Ilustração de um limão siciliano com adesivos colados nele que dizem alegria, amor, paz e bondade."
          />
        </ImagesContainer>

        <TextContainer>
          <h1>Quiz Fruto do Espírito</h1>
          <p>
            Descubra qual virtude é mais visível
            <br />
            na sua personalidade.
          </p>
        </TextContainer>

        <SwipeUpContainer>
          <img src={swipeUp} alt="Setas apontando para cima" />
          <p>Arraste para começar</p>
        </SwipeUpContainer>
      </CoverSection>

      <IntroSection>
        <h2>Instruções</h2>
        <p>
          Leia cada frase e determine o quanto ela faz sentido para você. Para
          garantir a eficácia do teste, evite criar um raciocínio a respeito de
          sua resposta, apenas determine rapidamente e com sinceridade um valor
          para a afirmação.
        </p>
        <Button style={{ width: '75%' }} onClick={() => navigate('/quiz')}>
          Começar
        </Button>
      </IntroSection>
      <CreditsLabel>
        Desenvolvido por{' '}
        <a
          href="https://www.instagram.com/edu.sarmento"
          target="_blank"
          rel="noopener noreferrer"
        >
          Eduardo Sarmento
        </a>
      </CreditsLabel>
    </PageContainer>
  );
}
