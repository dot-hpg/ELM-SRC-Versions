import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Layout } from './pages/layout/layout';
import { Employee } from './pages/employee/employee';
import { Dashboard } from './pages/dashboard/dashboard';
import { Leave } from './pages/leave/leave';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: Login
  },
  {
    path: "",
    component: Layout,
    children: [
      {
        path: "employee",
        component: Employee
      },
      {
        path: "dashboard",
        component: Dashboard
      },
      {
        path: "leave",
        component: Leave
      }
    ]
  }
];
