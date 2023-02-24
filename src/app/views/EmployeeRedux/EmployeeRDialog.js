import React, { useEffect, useState } from 'react'
import {
    Dialog,
    Button,
    Grid,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    InputAdornment,
    Checkbox,
    TextField,
    DialogActions,
    FormControlLabel,
    DialogTitle,
    DialogContent,
    TablePagination,
    IconButton,
    Icon,
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import '../../../styles/views/_loadding.scss';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/views/_style.scss';
// import employee from 'app/reduxkien/slice/employee';
import { useSelect } from 'downshift';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployeeAPI, searchCommune, searchCommuneAPI, searchDistrict, searchDistrictAPI, searchProvince, searchProvinceAPI } from 'app/apiskien';
import { createEmployeeAPI } from 'app/apiskien/index'
import { Log } from 'victory';
import { type } from 'jquery';
import { CREATE_EMPLOYEE, GET_COMMUNE, GET_DISTRICT, GET_EMPLOYEES, GET_PROVINCE, UPDATE_EMPLOYEE_BY_ID } from 'app/reduxkien/types';
import { nanoid } from '@reduxjs/toolkit';
import { createEmployeeSaga } from 'app/reduxkien/sagas/employee';

toast.configure({
    autoClose: 1000,
    draggable: false,
    limit: 3
});

function EmployeeDialog(props) {
    const { open, handleClose, t, i18n, rowData, handleEditEmploy, item } = props
    const employees = useSelector(state => state.employee)
    console.log("employ", employees);
    const dispatch = useDispatch()

    const [checkName, setCheckName] = useState('')
    const [checkCode, setCheckCode] = useState('')
    const [checkAge, setCheckAge] = useState('')
    const [checkPhone, setCheckPhone] = useState('')
    const [checkEmail, setCheckEmail] = useState('')
    const [checkProvince, setCheckProvince] = useState('')
    const [checkDistrict, setCheckDistrict] = useState('')
    const [checkCommune, setCheckCommune] = useState('')
    const [listProvinces, setListProvinces] = useState([])
    const [listDistricts, setListDistrict] = useState([])
    const [listCommunes, setListCommunes] = useState([])
    const [loading, setLoading] = useState(false)
    const [employee, setEmployee] = useState({})
    const handleFormSubmit = () => {
        if (employee.id) {
            if (!employee.name || !employee.code || !employee.age || !employee.phone || !employee.email || !employee.province || !employee.district || !employee.commune) { }
            else {
                dispatch({ type: UPDATE_EMPLOYEE_BY_ID, employee })
                props.handleClose()
            }
        } else {
            if (!employee.name || !employee.code || !employee.age || !employee.phone || !employee.email || !employee.province || !employee.district || !employee.commune) {
                // alert("chua nhap gi")
            } else {
                // console.log("vao dispatch");

                dispatch({ type: CREATE_EMPLOYEE, employee })
                props.handleClose()
                // setLoading(true)
                // toast.success("Add new success")
            }
        }
    }
    // }





    useEffect(() => {
        if (item.id) {
            setEmployee(item)
        }
        // dispatch({ type: GET_PROVINCE })
        // dispatch({ type: GET_DISTRICT })
        // dispatch({ type: GET_COMMUNE })
        searchProvinceAPI({})
            .then(res => setListProvinces(res.data.data))
        searchDistrictAPI({})
            .then(res => setListDistrict(res.data.data))
        searchCommuneAPI({})
            .then(res => setListCommunes(res.data.data))

    }, [loading])
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <ValidatorForm
                    style={{
                        overflowY: "auto",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <DialogContent dividers>
                        <Grid className="mb-16" container spacing={1}>


                            <Grid item lg={6} md={6} sm={12} xs={12} >
                                <TextValidator
                                    className="w-200 mb-8"
                                    label={
                                        <span className="font">
                                            <span style={{ color: "red" }}> * </span>
                                            {t('staff.name')}
                                        </span>
                                    }
                                    onChange={(event) => {
                                        setEmployee({ ...employee, name: event.target.value })
                                        setCheckName('')
                                    }}
                                    type="text"
                                    name="name"
                                    value={employee.name}
                                    // ^[A-Za-z\\s]+$
                                    // ^[\p{L} ]+$
                                    validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                                    errorMessages={[("Invalid a name"), "No number"]}
                                    variant="outlined"
                                    size="small"
                                    style={{ width: "100%" }}


                                ></TextValidator>
                            </Grid>


                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextValidator
                                    className="w-100 mb-8"
                                    label={
                                        <span className="font">
                                            <span style={{ color: "red" }}> * </span>
                                            {t('staff.code')}
                                        </span>
                                    }
                                    onChange={(event) => {
                                        setEmployee({ ...employee, code: event.target.value })
                                        setCheckCode('')
                                    }}
                                    type="text"
                                    name="code"
                                    value={employee.code}
                                    validators={["required", "matchRegexp:^([0-9][0-9][0-9][0-9][0-9][0-9])$"]}
                                    errorMessages={[t("Invalid a code"), "Ex: 123456"]}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextValidator
                                    className="w-100 mb-8"
                                    label={
                                        <span className="font">
                                            <span style={{ color: "red" }}> * </span>
                                            {t('staff.age')}
                                        </span>
                                    }
                                    onChange={(event) => {
                                        setEmployee({ ...employee, age: event.target.value })
                                        setCheckAge('')
                                    }}
                                    type="text"
                                    name="age"
                                    value={employee.age}
                                    validators={["required", "matchRegexp:^(0?[1-9]|[1-9][0-9]|[1][0-9][0-9]|300)$"]}
                                    errorMessages={[t("Invalid a age"), "Age number Error"]}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextValidator

                                    className="w-100 mb-8"
                                    label={
                                        <span className="font">
                                            <span style={{ color: "red" }}> * </span>
                                            {t('staff.phoneNumber')}
                                        </span>
                                    }
                                    onChange={(event) => {
                                        setEmployee({ ...employee, phone: event.target.value })
                                        setCheckPhone('')
                                    }}
                                    type="text"
                                    name="phone"
                                    value={employee.phone}
                                    validators={["required", "matchRegexp:^(0?([3|5|7|8|9])+[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$"]}
                                    errorMessages={[t("Invalid a phone"), "Ex : 0326777888"]}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextValidator

                                    className="w-100 mb-8"
                                    label={
                                        <span className="font">
                                            <span style={{ color: "red" }}> * </span>
                                            {t('staff.Email')}
                                        </span>
                                    }
                                    onChange={(event) => {
                                        setEmployee({ ...employee, email: event.target.value })
                                        setCheckEmail('')
                                    }}
                                    type="text"
                                    name="email"
                                    value={employee.email}
                                    validators={["required", "matchRegexp:[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"]}
                                    errorMessages={[t("Invalid a email"), "Ex: kien@gmail.com"]}
                                    variant="outlined"
                                    size="small"
                                />
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} >

                                <TextValidator
                                    className="selectinput mb-8"
                                    label={t('staff.province')}
                                    select
                                    name="province"
                                    value={employee.province}
                                    onChange={(event) => {
                                        setEmployee({ ...employee, province: event.target.value })
                                        setCheckProvince('')
                                    }}
                                    variant="outlined"
                                    size="small"
                                    validators={["required"]}
                                    errorMessages={[t("Select province")]}
                                    style={{ width: "100%" }}

                                >
                                    {listProvinces.map((item) => (
                                        <MenuItem value={item}>{item.name}</MenuItem>
                                    ))}
                                </TextValidator>

                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>

                                <TextValidator
                                    className="selectinput mb-8"
                                    label={t('staff.district')}
                                    select
                                    name="district"
                                    value={employee.district}
                                    onChange={(event) => {
                                        setEmployee({ ...employee, district: event.target.value })
                                        setCheckDistrict('')
                                    }}
                                    variant="outlined"
                                    size="small"
                                    validators={["required"]}
                                    errorMessages={[t("Select district")]}
                                    style={{ width: "100%" }}
                                >
                                    {employee.province && listDistricts.map((item) => (
                                        <MenuItem value={item}>{item.name}</MenuItem>
                                    ))}
                                </TextValidator>

                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>

                                <TextValidator
                                    className="selectinput mb-8"
                                    label={t('staff.commune')}
                                    select

                                    value={employee.commune}
                                    onChange={(event) => {
                                        setEmployee({ ...employee, commune: event.target.value })
                                        setCheckCommune('')
                                    }}
                                    variant="outlined"
                                    size="small"
                                    validators={["required"]}
                                    errorMessages={[t("Select commune")]}
                                    style={{ width: "100%" }}
                                >
                                    {employee.district && listCommunes.map((item) => (
                                        <MenuItem value={item}>{item.name}</MenuItem>
                                    ))}
                                </TextValidator>

                            </Grid>
                        </Grid>

                    </DialogContent>

                    <DialogActions spacing={4} className="flex flex-end flex-middle">
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={() => props.handleClose()}>
                            {t('Cancel')}
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={loading}
                            onClick={handleFormSubmit}
                        >
                            {t('Save')}
                        </Button>
                    </DialogActions>
                </ValidatorForm>

            </Dialog >

        </div>
    )
}
export default EmployeeDialog;