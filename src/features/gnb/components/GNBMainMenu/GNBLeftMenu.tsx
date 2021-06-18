import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { CompanyLogo } from '../CompanyLogo';
import { MenuList, MenuItem, MenuItemLink } from '../MenuItem';

const LeftMenu = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
`;

const LeftMenuItem = styled(MenuItem)`
  margin-left: 10px;
`;

const HomeLink = styled(Link)`
  color: rgb(19, 21, 24);
  outline: none;
  margin-right: 0.375rem;
  margin-left: 0.375rem;
  flex: 0 0 1.75rem;
  font-size: 0px;
`;

const LeftMenuWrapper = styled.div`
  flex: 0 0 auto;
`;

const LinkText = styled.span`
  font-weight: bold;
`;

export const GNBLeftMenu = () => {
  return (
    <LeftMenu>
      <HomeLink href="/">
        <CompanyLogo />
      </HomeLink>
      <LeftMenuWrapper>
        <MenuList>
          <LeftMenuItem value="feed">
            <MenuItemLink href="/feed/dailylook">
              <LinkText>#OOTD</LinkText>
            </MenuItemLink>
          </LeftMenuItem>
          <LeftMenuItem>
            <MenuItemLink href="/store">
              <LinkText>STORE</LinkText>
            </MenuItemLink>
          </LeftMenuItem>
          <div
            className="koSVjx"
            // style="transform: translateX(86px) translateZ(0px); width: 46px;"
          />
        </MenuList>
      </LeftMenuWrapper>
    </LeftMenu>
  );
};
