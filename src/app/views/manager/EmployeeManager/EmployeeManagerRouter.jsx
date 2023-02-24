import { EgretLoadable } from "egret";
import ConstantList from "../../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const EmployeeManager = EgretLoadable({
    loader: () => import("./EmployeeManager")
});
const ViewComponent = withTranslation()(EmployeeManager);

const EmployeeManagerRouters = [
    {
        path: ConstantList.ROOT_PATH + "list/employeeManager",
        exact: true,
        component: ViewComponent
    }
];

export default EmployeeManagerRouters;