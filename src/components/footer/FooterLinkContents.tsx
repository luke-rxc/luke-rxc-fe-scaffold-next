/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components';

import React from 'react';

export const FooterLinkContentList = styled.ul`
  display: block;
  color: #e8ebed;
  padding: 16px 0 7px;
`;

export const FooterLinkContentItem = styled.li`
  display: inline-block;
  margin: 0 0 0 16px;
  font-size: ${({ theme }) => theme.fontSize.s13};

  &:first-child {
    margin: 0;
  }
`;

export const FooterLinkContents = () => {
  return (
    <FooterLinkContentList>
      <FooterLinkContentItem>
        <a href="#">사용 약관</a>
      </FooterLinkContentItem>
      <FooterLinkContentItem>
        <a href="#">개인정보 처리방침</a>
      </FooterLinkContentItem>
      <FooterLinkContentItem>
        <a href="#">이용 약관</a>
      </FooterLinkContentItem>
    </FooterLinkContentList>
  );
};
