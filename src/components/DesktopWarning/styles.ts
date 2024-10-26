import styled from 'styled-components';

export const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  background-color: #eb4600;
`;

export const WarningContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  img {
    height: 2.25rem;
    filter: drop-shadow(1px 2px 5px rgba(0, 0, 0, 0.5));
  }
`;

export const WarningMessage = styled.p`
  font-family: 'Cooper BT', serif;
  color: #f8f8ff;

  text-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
`;
