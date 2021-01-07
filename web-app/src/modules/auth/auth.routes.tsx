import { LoginPage } from './pages/login/login.page';

export const routesAuth = [
  {
    path: '/login',
    component: LoginPage,
    name: 'auth.login',
    public: false,
  },
];
