import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: transparent;
  margin-right: 0.5rem;
  height: 32px;
  font-size: 0.875rem;
  color: rgb(255, 255, 255);
  letter-spacing: -0.4px;
  line-height: 1.4;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  border-radius: 22px;
  font-weight: 700;
  cursor: pointer;
`;

const StyledButton = styled.button`
  color: rgb(19, 21, 24);
  text-decoration: none;
  border: none;
  background: none;
`;

interface Props {
  userName: string | null;
  isLogin: boolean;
  onToggleLogin: () => void;
}

export const LoginStatus = ({ isLogin, userName, onToggleLogin }: Props) => {
  return (
    <Wrapper>
      <StyledButton type="button" onClick={onToggleLogin}>
        {isLogin ? `${userName}님` : '로그인'}
      </StyledButton>
    </Wrapper>
  );
};
