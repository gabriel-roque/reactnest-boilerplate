import { lazy } from 'react'

const HomePage = lazy(() => import('./pages/home/home.page'))

export const routesHome = [
  {
    path: '/',
    component: HomePage,
    name: 'home.home',
    public: true,
  },
];
