import React from 'react';
import styled from 'styled-components';

const ComponyInfoWrapper = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.s13};
`;

export const ComponyInfo = () => {
  return (
    <ComponyInfoWrapper>
      상호명: 주식회사 스타일쉐어 | 사업자 등록번호: 110-81-95574 |&nbsp;
      <a
        href="http://www.ftc.go.kr/info/bizinfo/communicationViewPopup.jsp?wrkr_no=1108195574"
        target="_blank"
        rel="noopener noreferrer"
      >
        사업자등록정보 확인
      </a>
      <br />
      통신판매업신고: 제 2015-서울강남-02962호 | 주소: 서울특별시 강남구
      선릉로93길 35 나라키움 역삼B빌딩 3층 | 대표자: 윤자영 | 개인정보책임자:
      오형내
    </ComponyInfoWrapper>
  );
};
