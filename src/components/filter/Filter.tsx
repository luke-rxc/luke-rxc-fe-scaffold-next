import React, { ReactElement } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { FilterPortal } from './FilterPortal';

interface Props {
  children: ReactElement | Array<ReactElement>;
  open: boolean;
  onClose?: () => void;
}

export const Filter = ({ children, open, onClose }: Props) => {
  return (
    <FilterPortal open={open}>
      <Overlay open={open} onClick={onClose} />
      <Content open={open}>{children}</Content>
    </FilterPortal>
  );
};

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const FadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const includeModalAnimation = ({ open }: { open: boolean }) =>
  open
    ? css`
        visibility: visible;
        animation: ${FadeInAnimation} 0.2s;
      `
    : css`
        visibility: hidden;
        animation: ${FadeOutAnimation} 0.2s;
        animation-fill-mode: forwards;
      `;

const Overlay = styled.div<{ open: boolean }>`
  ${includeModalAnimation}
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background: rgba(38, 40, 43, 0.5);
  overscroll-behavior: contain;
`;

const Content = styled.div<{ open: boolean }>`
  ${includeModalAnimation}
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  max-height: 600px;
  overflow: hidden;
  background: ${({ theme }) => theme.color.white};
  transform: translate(0, 0);
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  overscroll-behavior: contain;
`;
