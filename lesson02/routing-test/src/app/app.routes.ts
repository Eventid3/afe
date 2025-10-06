import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import {authGuard} from './auth-guard';
import {Login} from './login/login';

export const routes: Routes = [
  {
    path: "",
    component: Home,
    title: "Home Page"
  },
  {
    path: "users",
    loadChildren: () => import("./user/user-module")
      .then(m => m.UserModule),
    canActivateChild: [authGuard]
  },
  {
    path: "login",
    component: Login,
    title: "Login"
  },
  {
    path: "**",
    component: PageNotFound,
    title: "404 - Not Found"
  }
];
