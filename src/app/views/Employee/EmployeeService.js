import axios from "axios";
import ConstantList from "../../appConfig";
import { API_ENPOINT } from "../../appConfig";
const API_PATH = ConstantList.API_ENPOINT + "/api/employees/";

export const searchByPage = (page, pageSize) => {
    var params = page + "/" + pageSize;
    var url = API_PATH + params;
    return axios.get(url);
};
export const searchEmployee = (searchObject) => {
    var url = API_ENPOINT + '/employees/search';
    return axios.post(url, searchObject);
};
export const addEmployee = (dataEmployee) => {
    var url = API_ENPOINT + '/employees';
    return axios.post(url, dataEmployee);
};
export const upDateEmployee = (id, data) => {
    var url = API_ENPOINT + '/employees/' + id;
    return axios.put(url, data);
}
export const deleteEmployee = (id) => {
    var url = API_ENPOINT + `/employees/${id}`;
    return axios.delete(url);
}
// export const getEmployById = id => {
//     var url = API_ENPOINT + 'employees' + id;
//     return axios.get(url);
// };

export const searchProvince = (searchObject) => {
    var url = API_ENPOINT + '/provinces/search';
    return axios.post(url, searchObject);
};
export const searchDistrict = (searchObject) => {
    var url = API_ENPOINT + '/districts/search';
    return axios.post(url, searchObject);
};
export const searchCommune = (searchObject) => {
    var url = API_ENPOINT + '/communes/search';
    return axios.post(url, searchObject);
};
