import { lazy } from 'react';

export default [
  {
    component: lazy(() => import('./pages/CategoryProductPage')),
    path: '/categories/:categoryId',
  },
];
