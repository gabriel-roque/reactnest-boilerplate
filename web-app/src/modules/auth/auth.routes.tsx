import { Login } from './pages/Login/login.page';

export const routesAuth = [
  {
    path: '/login',
    component: Login,
    name: 'auth.login',
    public: true,
  },
];
