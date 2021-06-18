import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 10px;
`;

export const EscrowMark = () => {
  return (
    <Wrapper>
      <a
        href="https://okbfex.kbstar.com/quics?page=C021590&amp;cc=b034066%3Ab035526&amp;mHValue=c2f9e422330c79617b06731f6993594a201509091632335"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          alt="kb escrow mark"
          className="escrow"
          height="44"
          width="44"
          src="https://web-frontend.styleshare.io/frontend/prod/assets/escrowmark.b59878ff.png"
        />
      </a>
    </Wrapper>
  );
};
