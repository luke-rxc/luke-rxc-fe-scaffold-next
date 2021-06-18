import { useRouter } from 'next/router';
import React from 'react';
import { CategoryProductContainer } from '../containers';

const CategoryProductPage = () => {
  const { pathname, query } = useRouter();
  window.console.log(pathname, query);

  return (
    <>
      <CategoryProductContainer />
    </>
  );
};

export default CategoryProductPage;
