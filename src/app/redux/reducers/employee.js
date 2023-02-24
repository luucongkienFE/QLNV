import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
const employee = createSlice({
    name: 'employee',
    initialState: [
    ],
    reducers: {
        // setEmployeeSlice: (state, action) => {
        //     state = action.payload
        //     return state
        // },
        getEmployeeSlice: (state, action) => {
            state = action.payload
            return state
        },
        addEmployeeSlice: (state, action) => {
            // console.log(action.payload);
            state.push(action.payload)
            return state
        },
        editEmployeeSlice: (state, action) => {
            state = state.map(i => i.id == action.payload.id ? action.payload : i)
            return state
        },
        deleteEmployeeSlice: (state, action) => {
            state = state.filter(i => i.id !== action.payload)
            return state
        }
    }
})
export const { getEmployeeSlice, addEmployeeSlice, editEmployeeSlice, deleteEmployeeSlice } = employee.actions
// export const employees = (state) => state.employee.value
// console.log("employee", employees);
export default employee.reducer