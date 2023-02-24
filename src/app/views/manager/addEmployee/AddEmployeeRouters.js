import { EgretLoadable } from "egret";
import ConstantList from "../../../appConfig";
import { useTranslation, withTranslation, Trans } from 'react-i18next';
const AddEmployee = EgretLoadable({
    loader: () => import("./AddEmployee")
});
const ViewComponent = withTranslation()(AddEmployee);

const AddEmployeeRouters = [
    {
        path: ConstantList.ROOT_PATH + "list/addEmployee",
        exact: true,
        component: ViewComponent
    }
];

export default AddEmployeeRouters;