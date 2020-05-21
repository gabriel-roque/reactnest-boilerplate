import { LoginPage } from './pages/Login/login.page';

export const routesAuth = [
  {
    path: '/login',
    component: LoginPage,
    name: 'auth.login',
    public: true,
  },
];
