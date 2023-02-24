import React from "react";
import { Redirect } from "react-router-dom";
import homeRoutes from "./views/home/HomeRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";
import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import administrativeUnitRoutes from "./views/AdministrativeUnit/AdministrativeUnitRoutes";
import UserRoutes from "./views/User/UserRoutes";
import departmentRoutes from "./views/Department/DepartmentRoutes";
import ConstantList from "./appConfig";
// import MenuRoutes from "./views/Menus/MenuRoutes";
import pageLayoutRoutes from "./views/page-layouts/PageLayoutRoutees";
import MenuRoutes from "./views/Menus/MenuRoutes";
import ShiftWorkRouters from "./views/ShiftWork/ShiftWorkRouters";
import TimeSheetRoutes from "./views/TimeSheet/TimeSheetRoutes";
import ColorRoutes from "./views/Color/ColorRoutes"
import CategoryRoutes from "./views/Category/CategoryRoutes"
import EmployeeRouters from "./views/Employee/EmployeeRouters";
import EmployeeRRouters from "./views/EmployeeRedux/EmployeeRRouters.js";
import AddEmployeeRouters from "./views/manager/addEmployee/AddEmployeeRouters";
import EmployeeManagerRouters from "./views/manager/EmployeeManager/EmployeeManagerRouter";
import EndEmployeeRouters from "./views/manager/EndEmployee/EndEmployeeRouter";
const redirectRoute = [
  {
    path: ConstantList.ROOT_PATH,
    exact: true,
    component: () => <Redirect to={ConstantList.HOME_PAGE} /> //Luôn trỏ về HomePage được khai báo trong appConfig
  }
];

const errorRoute = [
  {
    component: () => <Redirect to={ConstantList.ROOT_PATH + "session/404"} />
  }
];

const routes = [
  ...homeRoutes,
  ...sessionRoutes,
  ...dashboardRoutes,
  ...TimeSheetRoutes,
  ...administrativeUnitRoutes,
  ...departmentRoutes,
  ...pageLayoutRoutes,
  ...MenuRoutes,
  ...EmployeeRouters,
  ...EmployeeRRouters,
  ...AddEmployeeRouters,
  ...EmployeeManagerRouters,
  ...EndEmployeeRouters,
  ...UserRoutes,
  ...ShiftWorkRouters,
  ...ColorRoutes,
  ...CategoryRoutes,
  ...errorRoute

];

export default routes;
