import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { CartIcon } from '../CartIcon';
import { SearchIcon } from '../SearchIcon';
import { MenuList, MenuItem } from '../MenuItem';

const RightMenu = styled.div`
  display: flex;
  position: absolute;
  -webkit-box-align: center;
  align-items: center;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;

const RightMenuWrapper = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 1.5rem;
  height: 1.5rem;
`;

const StyledCartIcon = styled(CartIcon)`
  width: 1.5rem;
  height: 1.5rem;
`;

const MenuItemLink = styled(Link)`
  padding: 5px 8px;
  color: inherit;
  font-size: 0px;
`;

interface Props {
  children?: ReactElement;
}

export const GNBRightMenu = ({ children }: Props) => {
  return (
    <RightMenu>
      <MenuItemLink href="/search">
        <StyledSearchIcon />
      </MenuItemLink>
      <RightMenuWrapper>
        <MenuList>
          <MenuItem>
            <MenuItemLink href="/me/cart">
              <StyledCartIcon />
            </MenuItemLink>
          </MenuItem>
        </MenuList>
        {children}
      </RightMenuWrapper>
    </RightMenu>
  );
};
