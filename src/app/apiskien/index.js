import axios from 'axios'
import { API_ENPOINT } from 'app/appConfig'
import { toast } from 'react-toastify'
// axios.defaults.baseURL = 'http://training-api.oceantech.com.vn/cms'

export const getEmployeeAPI = (data) => {
    var url = API_ENPOINT + '/employees/search'
    return axios.post(url, data)
}


// export const getEmployeeByIdAPI = (id) => {
//     var url = API_ENPOINT + `/employees/search/${id}`
//     return axios.get(url, id)
// }

export const createEmployeeAPI = async (data) => {
    var url = API_ENPOINT + 'employees'
    const res = await axios.post(url, data)
    return res
}
export const updateEmployeeAPI = async (data) => {
    var url = API_ENPOINT + `/employees/${data.id}`
    const res = await axios.put(url, data)
    return res
}

export const deleteEmployeeByIdAPI = async (id) => {
    var url = API_ENPOINT + `/employees/${id}`
    const res = await axios.delete(url)
    return res


}

export const searchProvinceAPI = (searchObject) => {
    var url = API_ENPOINT + 'provinces/search';
    return axios.post(url, searchObject)

};
export const searchDistrictAPI = (searchObject) => {
    var url = API_ENPOINT + 'districts/search';
    return axios.post(url, searchObject)
};
export const searchCommuneAPI = (searchObject) => {
    var url = API_ENPOINT + 'communes/search';
    return axios.post(url, searchObject)
};