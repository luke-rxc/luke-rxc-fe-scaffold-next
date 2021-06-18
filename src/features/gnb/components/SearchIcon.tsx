import React from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
}

const SvgSearch = (props: Props) => (
  <svg viewBox="0 0 24 24" className="icon" width="1em" height="1em" {...props}>
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm6.851-1.664l3.603 3.558a.5.5 0 0 1 .002.71l-.354.353a.5.5 0 0 1-.705.002l-3.61-3.566a9 9 0 1 1 1.064-1.057z"
    />
  </svg>
);

export const SearchIcon = styled(SvgSearch)`
  width: 1rem;
  height: 1rem;
`;
