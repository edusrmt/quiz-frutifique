import { PageContainer, WarningContainer, WarningMessage } from './styles';
import phoneIcon from '../../assets/smartphone-icon.svg';

export function DesktopWarning() {
  return (
    <PageContainer>
      <WarningContainer>
        <img src={phoneIcon} alt="Ícone de smartphone" />

        <WarningMessage>
          Para uma melhor experiência,
          <br />
          acesse pelo celular em modo retrato.
        </WarningMessage>
      </WarningContainer>
    </PageContainer>
  );
}
