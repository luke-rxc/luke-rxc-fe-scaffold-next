import React, { ReactElement } from 'react';
import { GNBWrapper } from '../GNBWrapper';
import { GNBLeftMenu } from './GNBLeftMenu';
import { GNBRightMenu } from './GNBRightMenu';

interface Props {
  children?: ReactElement;
}

export const GNBMainMenu = ({ children }: Props) => (
  <GNBWrapper>
    <GNBLeftMenu />
    <GNBRightMenu>{children}</GNBRightMenu>
  </GNBWrapper>
);
