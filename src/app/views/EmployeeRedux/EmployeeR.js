import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import EmployeeRDialog from "./EmployeeRDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import MaterialTable from "material-table";
import {
    Grid,
    IconButton,
    Icon,
    Button,

} from "@material-ui/core";

import React from 'react'
import axios from "axios";
import { toast } from "react-toastify";
import { Provider, useDispatch, useSelector } from "react-redux";
import employee from "app/reduxkien/slice/employee";
import { CREATE_EMPLOYEE, DELETE_EMPLOYEE_BY_ID, GET_EMPLOYEES, } from "app/reduxkien/types/index"
import { getEmployeeAPI, createEmployeeAPI } from "app/apiskien/index"
import { error } from "jquery";
import { searchEmployee } from "../Employee/EmployeeService";
import store from "app/reduxkien/store";
// import { } from "app/reduxkien/sagas/employee"
function MaterialButton(props) {
    const { item } = props;


    return <div>
        <IconButton size="small" onClick={() => {
            props.onSelect(item, 0)
        }}>
            <Icon fontSize="small" color="primary">edit</Icon>
        </IconButton>
        <IconButton disabled={props.loading} onClick={() => props.onSelect(item, 1)}>
            <Icon color="error">delete</Icon>
        </IconButton>
    </div>;
}
function EmployeeR(props) {
    const [openEmployeeRDialog, setOpenEmployeeRDialog] = useState(false)
    // const [listEmployees, setListEmployees] = useState([])
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState()
    const { t, i18n } = props
    const employeess = useSelector(state => state.employee)
    // console.log("sss", employeess);
    // const [employees, setEmployees] = useState(employees)
    const listEmployee = employeess.map(item => ({ ...item }));
    const [listEmployees, setListEmployees] = useState(listEmployee)
    console.log("mm", employeess);
    const dispatch = useDispatch()


    const handleDelete = (id) => {
        dispatch({ type: DELETE_EMPLOYEE_BY_ID, id })

        // axios.delete('http://training-api.oceantech.com.vn/cms/employees/' + id)
        //     .then(() => {
        //         setLoading(!loading)
        //         toast.success("Delete success")
        //     })
        //     .catch((e) => {
        //         console.log(e);
        //         toast.error("Delete error")
        //     })

    };


    const columns = [

        { title: t("staff.name"), field: "name", width: "150" },
        { title: t("staff.code"), field: "code", width: "150" },
        { title: t("staff.age"), field: "age", align: "left", width: "150" },
        { title: t("staff.phoneNumber"), field: "phone", width: "150" },
        { title: t("staff.email"), field: "email", width: "150" },
        {
            title: t("Action"),
            field: "custom",
            align: "left",
            width: "250",
            render: rowData => <MaterialButton
                item={rowData}
                onSelect={(rowData, method) => {
                    if (method === 0) {
                        handleClickOpen()
                        setItem(rowData)

                    } else if (method === 1) {
                        handleDelete(rowData.id);
                    } else {
                        alert('Call Selected Here:' + rowData.id);
                    }
                }
                }
            />


        },
    ]


    const handleClickOpen = () => {

        setItem('')
        setOpenEmployeeRDialog(true)
    }
    const handleClose = () => {
        setOpenEmployeeRDialog(false)
    }
    useEffect(() => {


        dispatch({ type: GET_EMPLOYEES })
        // console.log(GET_EMPLOYEES);
        // getEmployeeAPI({})
        //     .then(res => setListEmployees(res.data.data))

    }, [])


    useEffect(() => {
        setListEmployees(listEmployees)
    }, [listEmployees])
    return (
        // <Provider store={store}>
        <div className="mt-20 ml-20">
            <Breadcrumb routeSegments={[
                { name: t("Dashboard.manage"), path: "/directory/apartment" },
                { name: t("staff.title") }
            ]}
            />

            <Grid container spacing={2} justify="space-between">
                <Grid item lg={3} md={3} xs={12} >
                    <Button
                        className="align-bottom mt-30 mr-16 mb-16"
                        variant="contained"
                        color="primary"
                        onClick={handleClickOpen}
                    >
                        {t('staff.addNew')}
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        {openEmployeeRDialog && (
                            <EmployeeRDialog t={t} i18n={i18n}
                                handleClose={() => handleClose()}
                                open={() => handleClickOpen()}
                                item={item}
                            />
                        )}

                    </div>
                    <MaterialTable
                        title={t('staff.list')}
                        data={listEmployee}
                        columns={columns}
                        options={{
                            selection: false,
                            actionsColumnIndex: -1,
                            paging: true,
                            search: false,
                            rowStyle: (rowData, index) => ({
                                backgroundColor: (index % 2 === 1) ? '#EEE' : '#FFF',
                            }),
                            maxBodyHeight: '450px',
                            minBodyHeight: '370px',
                            headerStyle: {
                                backgroundColor: '#358600',
                                color: '#fff',
                            },
                            padding: 'dense',
                            toolbar: false
                        }}
                    />

                </Grid>

            </Grid>
        </div>
        // </Provider>
    )
}
export default EmployeeR;