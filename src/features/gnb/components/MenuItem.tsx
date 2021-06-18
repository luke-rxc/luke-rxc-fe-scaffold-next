import Link from 'next/link';
import styled from 'styled-components';

export const MenuList = styled.ol`
  position: relative;
  list-style: none;
  text-align: center;
  margin: 0px;
  padding: 0px;
`;

export const MenuItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.4px;
  line-height: 1.43;
  display: inline-block;
  vertical-align: middle;
`;

export const MenuItemLink = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: rgb(19, 21, 24);
  display: block;
  cursor: pointer;
  border: 0px;
  background: transparent;
  padding: 10px 12px;
  outline: none;
  transition: color 0.2s ease-in-out 0s;
`;
