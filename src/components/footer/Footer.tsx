import React from 'react';
import styled from 'styled-components';
import { ComponyInfo } from './ComponyInfo';
import { EscrowMark } from './EscrowMark';
import { FooterLinkContents } from './FooterLinkContents';

const FooterWrapper = styled.div`
  background: #1b1d1f;
  padding: 40px 1.25rem;
  -webkit-text-size-adjust: none;
`;

export const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterLinkContents />

        <ComponyInfo />

        <EscrowMark />
      </FooterWrapper>
    </>
  );
};
