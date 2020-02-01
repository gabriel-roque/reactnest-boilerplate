import Login from "modules/auth/pages/Login/Login";
import Remember from "modules/auth/pages/Remember/Rebember";
import Registrer from "modules/auth/pages/Register/Register";

const routesAuth = [
  {
    path: "/login",
    component: Login,
    name: "auth.login",
    public: true
  },
  {
    path: "/remember",
    component: Remember,
    name: "auth.remember",
    public: true
  },
  {
    path: "/register",
    component: Registrer,
    name: "auth.register",
    public: true
  }
];

export default routesAuth;
