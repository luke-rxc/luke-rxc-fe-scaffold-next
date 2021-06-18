import styled from 'styled-components';

export const GNBWrapper = styled.nav`
  position: relative;
  display: flex;
  height: 40px;
  background: rgb(255, 255, 255);

  ${({ theme }) => theme.mediaQuery.lg} {
    height: 64px;
    background: rgb(255, 255, 255);
    padding-left: 8px;
    overflow: hidden;
  }
`;
