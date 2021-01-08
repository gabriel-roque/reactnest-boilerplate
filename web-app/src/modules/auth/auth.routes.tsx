import { lazy } from 'react'

const LoginPage = lazy(() => import('modules/auth/pages/login/login.page'))

export const routesAuth = [
  {
    path: '/login',
    component: LoginPage,
    name: 'auth.login',
    public: false,
  },
];
