import axios from "axios";

var API_LINK = "http://localhost:5000/"

export const getListEmployee = () => {
    var url = API_LINK + "listemployee"
    return axios.get(url)
}



export const getListProvinces = () => {
    var url = API_LINK + "location"
    return axios.get(url)
}
export const getListDistricts = () => {
    var url = API_LINK + "location"
    return axios.get(url)
}
export const getListCommunes = () => {
    var url = API_LINK + "location"
    return axios.get(url)
}
