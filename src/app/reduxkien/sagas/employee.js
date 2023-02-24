import { getEmployeeAPI, createEmployeeAPI, updateEmployeeAPI, deleteEmployeeByIdAPI, searchProvinceAPI, searchDistrictAPI, searchCommuneAPI } from 'app/apiskien/index'
// import { setEmployeeSlice } from "../slice/employee"
import { addEmployeeSlice, deleteEmployeeSlice, editEmployeeSlice, getEmployeeSlice } from "app/redux/reducers/employee"
import { CREATE_EMPLOYEE, DELETE_EMPLOYEE_BY_ID, GET_EMPLOYEES, UPDATE_EMPLOYEE_BY_ID } from '../types'
import { put, takeEvery, call } from 'redux-saga/effects'
import { toast } from 'react-toastify'
export function* getEmployeeSaga(action) {

    const employees = yield call(getEmployeeAPI, {})
    // console.log(employees);
    yield put(getEmployeeSlice(employees.data.data))

    // console.log("data", getEmployeeSlice(employees.data));
}

// export function* getEmployeeByIdAPISaga(action) {
//     yield getEmployeeByIdAPI(action.id)
//     yield put(setEmployeeSlice(action.id))
// }
export function* createEmployeeSaga(action) {
    try {
        const addNewEmployee = yield call(createEmployeeAPI, action.employee)

        yield put(addEmployeeSlice(action.employee))
        if (addNewEmployee.data.data) {
            yield getEmployeeSaga()
        } else {
            console.log("sai cmnr");
        }


    } catch (error) {
        console.log(error);
    }
}

export function* updateEmployeeSaga(action) {
    const updateEmployee = yield call(updateEmployeeAPI, action.employee)
    yield put(editEmployeeSlice(action.employee))
    if (updateEmployee.data.data) {
        yield getEmployeeSaga()
    } else {
        console.log("sai cmnr");
    }
}

export function* deleteEmployeeByIdSaga(action) {
    // console.log(action);
    // try {
    const deleteEmployee = yield call(deleteEmployeeByIdAPI, action.id)
    // console.log("delete", deleteEmployee);
    yield put(deleteEmployeeSlice(action.id))
    if (deleteEmployee.data.data) {
        yield getEmployeeSaga()
        toast.success("delete succes")
    } else {
        toast.error("delete error")
    }
    // } catch (error) {
    //     toast.error("delete error")
    // }
}

// export function* searchProvinceSaga() {
//     yield call(searchProvinceAPI, {})
// }
// export function* searchDistrictSaga() {
//     yield call(searchDistrictAPI, {})
// };
// export function* searchCommuneSaga() {
//     yield call(searchCommuneAPI, {})

// };
export function* watchEmployeesAsync() {

    yield takeEvery(GET_EMPLOYEES, getEmployeeSaga)
    // yield takeEvery(GET_EMPLOYEE_BY_ID, getEmployeeByIdAPISaga)
    yield takeEvery(CREATE_EMPLOYEE, createEmployeeSaga)
    yield takeEvery(UPDATE_EMPLOYEE_BY_ID, updateEmployeeSaga)
    yield takeEvery(DELETE_EMPLOYEE_BY_ID, deleteEmployeeByIdSaga)

    // yield takeEvery(GET_PROVINCE, searchProvinceSaga)
    // yield takeEvery(GET_DISTRICT, searchDistrictSaga)
    // yield takeEvery(GET_COMMUNE, searchCommuneSaga)
}