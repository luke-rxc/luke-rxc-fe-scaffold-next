import React from 'react';
import styled from 'styled-components';
import { GlobalNavibarWrapper } from '../components/GlobalNavibarWrapper';
import { GNBMainMenu } from '../components/GNBMainMenu/GNBMainMenu';
import { GNBSubMenu } from '../components/GNBSubMenu';
import { useNavService } from '../services/useNavService';

const Wrapper = styled.div`
  & {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 100;
    transition-property: background, box-shadow;
    transition-duration: 0.25s;
    transition-timing-function: ease-in-out;
    background: rgb(255, 255, 255);
    box-shadow: rgba(27, 29, 31, 0.12) 0px 2px 10px;
  }
`;

export const GlobalNavibarContainer = () => {
  const { naviItems } = useNavService();

  return (
    <GlobalNavibarWrapper>
      <Wrapper>
        <GNBMainMenu />
        {naviItems ? <GNBSubMenu navItems={naviItems} /> : null}
      </Wrapper>
    </GlobalNavibarWrapper>
  );
};
