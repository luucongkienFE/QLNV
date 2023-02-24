import { EgretLoadable } from "egret";
import ConstantList from "../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const EmployeeR = EgretLoadable({
    loader: () => import("./EmployeeR")
});
const ViewComponent = withTranslation()(EmployeeR);

const EmployeeRRouters = [
    {
        path: ConstantList.ROOT_PATH + "list/employeeredux",
        exact: true,
        component: ViewComponent
    }
];

export default EmployeeRRouters;