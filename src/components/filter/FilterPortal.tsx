import React, { useEffect } from 'react';
import ReactDom from 'react-dom';

interface Props {
  open: boolean;
}

export const FilterPortal: React.FC<Props> = ({ open, children }) => {
  const element = document.getElementById('filter-portal');

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  if (!element) {
    return null;
  }

  return ReactDom.createPortal(children, element);
};
