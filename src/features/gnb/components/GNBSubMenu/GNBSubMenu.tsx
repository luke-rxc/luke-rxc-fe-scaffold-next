/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { NavSchema } from '../../schemas/nav.schema';
import { GNBWrapper } from '../GNBWrapper';
import { MenuItem, MenuItemLink, MenuList } from '../MenuItem';

const SubMenuList = styled(MenuList)`
  text-align: left;
`;

const SubMenuItem = styled(MenuItem)`
  margin-left: 10px;
`;

interface Props {
  navItems: Array<NavSchema>;
}

export const GNBSubMenu = ({ navItems }: Props) => {
  return (
    <GNBWrapper
      className="menu-wrapper categories"
      // style="position: relative; display: flex; opacity: 1; transform: translateY(0%) translateZ(0px);"
    >
      <SubMenuList>
        <SubMenuItem value="/store">
          <MenuItemLink href="/store" data-text="홈">
            홈
          </MenuItemLink>
        </SubMenuItem>
        {navItems.map((item) => (
          <SubMenuItem key={item.id}>
            <MenuItemLink href={`/categories/${item.id}`}>
              {item.displayName}
            </MenuItemLink>
          </SubMenuItem>
        ))}
        <div
          className="koSVjx"
          // style="transform: translateX(167px) translateZ(0px); width: 47px;"
        />
      </SubMenuList>
    </GNBWrapper>
  );
};
