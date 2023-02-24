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
import { ValidatorForm,TextValidator } from "react-material-ui-form-validator";
import { addEmployee, searchCommune, searchDistrict, searchProvince, searchEmployee, upDateEmployee } from "./EmployeeService";
import '../../../styles/views/_loadding.scss';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../../styles/views/_style.scss';
import './Employee.scss'
toast.configure({
    autoClose: 1000,
    draggable: false,
    limit: 3
});

function EmployeeDialog(props) {
    const { open, handleClose, t, item }=props
    
    const [checkName,setCheckName]=useState('')
    const [checkCode, setCheckCode] = useState('')
    const [checkAge, setCheckAge] = useState('')
    const [checkPhone, setCheckPhone] = useState('')
    const [checkEmail, setCheckEmail] = useState('')
    const [checkProvince, setCheckProvince] = useState('')
    const [checkDistrict, setCheckDistrict] = useState('')
    const [checkCommune, setCheckCommune] = useState('')
    const handleFormSubmit =()=>{
    
        if(employee.id){
            if (!employee.name || !employee.code || !employee.age || !employee.phone || !employee.email || !employee.province || !employee.district || !employee.commune) { }
            else{
            upDateEmployee(employee.id,employee).then(()=>{
                props.handleClose()
                setLoading(true)
                toast.success("Update success")
            })
            }
        }else{
            if (!employee.name || !employee.code || !employee.age || !employee.phone || !employee.email || !employee.province || !employee.district || !employee.commune){

            }else{
            addEmployee(employee).then(() => {
                props.handleClose()
                setLoading(true)
                toast.success("Add new success")
            })
            }
        }
        }
    // }

    const [listProvinces, setListProvinces]=useState([])
    const [listDistricts, setListDistrict] = useState([])
    const [listCommunes, setListCommunes] = useState([])
    const [loading,setLoading]=useState(false)
    const [employee,setEmployee]=useState({})
console.log("aaaa",employee);
    
    useEffect(() => {
        if(item.id){
            setEmployee(item)
        }
        searchProvince({})
            .then(res => setListProvinces(res.data.data))
        searchDistrict({})
            .then(res => setListDistrict(res.data.data))
        searchCommune({})
            .then(res => setListCommunes(res.data.data))
        
    },[])
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
                        

                            <Grid item lg={6} md={6} sm={12} xs={12}>
                                <TextValidator
                                    className="w-200 mb-8"
                                    label={
                                        <span className="font">
                                            <span style={{ color: "red" }}> * </span>
                                            {t('staff.name')}
                                        </span>
                                    }
                                    onChange={(event) => {setEmployee({...employee, name: event.target.value})
                                    setCheckName('')
                                    }}
                                    type="text"
                                    name="name"
                                    value={employee.name}
                                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                                  errorMessages={[("Invalid a name"),"No number"]}
                                    variant="outlined"
                                    size="small"

                                    
                          ></TextValidator><span>{checkName}</span>
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
                                    onChange={(event) => {setEmployee({...employee, code : event.target.value})
                                        setCheckCode('')
                                }}
                                    type="text"
                                    name="code"
                                    value={employee.code}
                                  validators={["required", "matchRegexp:^([0-9][0-9][0-9][0-9][0-9][0-9])$"]}
                                  errorMessages={[t("Invalid a code"),"Ex: 123456"]}
                                    variant="outlined"
                                    size="small"
                          /><span>{checkCode}</span>
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
                              onChange={(event) => {setEmployee({ ...employee, age: event.target.value })
                                  setCheckAge('')
                            }}
                                    type="text"
                                    name="age"
                                    value={employee.age}
                                  validators={["required", "matchRegexp:^(0?[1-9]|[1-9][0-9]|[1][0-9][0-9]|300)$"]}
                                  errorMessages={[t("Invalid a age"),"Age number Error"]}
                                    variant="outlined"
                                    size="small"
                          /><span>{checkAge}</span>
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
                              onChange={(event) => {setEmployee({ ...employee, phone: event.target.value })
                                  setCheckPhone('')
                            }}
                                    type="text"
                                    name="phone"
                                    value={employee.phone}
                                  validators={["required", "matchRegexp:^(0?([3|5|7|8|9])+[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])$"]}
                                  errorMessages={[t("Invalid a phone"),"Ex : 0326777888"]}
                                    variant="outlined"
                                    size="small"
                          /><span>{checkPhone}</span>
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
                              onChange={(event) => {setEmployee({ ...employee, email: event.target.value })
                                  setCheckEmail('')
                            }}
                              type="text"
                              name="email"
                              value={employee.email}
                                  validators={["required", "matchRegexp:[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"]}
                                  errorMessages={[t("Invalid a email"),"Ex: kien@gmail.com"]}
                              variant="outlined"
                              size="small"
                          /><span>{checkEmail}</span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12} >

                                <TextValidator
                                    className="selectinput mb-8"
                                    label={t('staff.province')}
                                    select
                                    name="province"
                                    value={employee.province}
                              onChange={(event) => {setEmployee({ ...employee, province: event.target.value })
                            setCheckProvince('')
                            }}
                                    variant="outlined"
                                    size="small"
                                  validators={["required"]}
                                  errorMessages={[t("Select province")]}

                                >
                                    {listProvinces.map((item) => (
                                        <MenuItem value={item}>{item.name}</MenuItem>
                                    ))}
                                </TextValidator>
                                        <span>{checkProvince}</span>
                             </Grid>
                      <Grid item lg={6} md={6} sm={12} xs={12}>

                                <TextValidator
                                    className="selectinput mb-8"
                                    label={t('staff.district')}
                                    select
                                    name="district"
                                    value={employee.district}
                              onChange={(event) => {setEmployee({ ...employee, district: event.target.value })
                                  setCheckDistrict('')
                            }}
                                    variant="outlined"
                                    size="small"
                                  validators={["required"]}
                                  errorMessages={[t("Select district")]}
                                >
                                    {employee.province && listDistricts.map((item) => (
                                        <MenuItem value={item}>{item.name}</MenuItem>
                                    ))}
                                </TextValidator>
                          <span>{checkDistrict}</span>
                            </Grid>
                            <Grid item lg={6} md={6} sm={12} xs={12}>

                                <TextValidator
                                    className="selectinput mb-8"
                                    label={t('staff.commune')}
                                    select
                                    
                                    value={employee.commune}
                              onChange={(event) => {setEmployee({ ...employee, commune: event.target.value })
                                  setCheckCommune('')
                            }}
                                    variant="outlined"
                                    size="small"
                                  validators={["required"]}
                                  errorMessages={[t("Select commune")]}
                                >
                                    {employee.district && listCommunes.map((item) => (
                                        <MenuItem value={item}>{item.name}</MenuItem>
                                    ))}
                                </TextValidator>
                          <span>{checkCommune}</span>
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








// Class Component

// import React, { Component } from "react";

// import {
//     Dialog,
//     Button,
//     Grid,
//     InputLabel,
//     FormControl,
//     MenuItem,
//     Select,
//     InputAdornment,
//     Checkbox,
//     TextField,
//     DialogActions,
//     FormControlLabel,
//     DialogTitle,
//     DialogContent,
//     TablePagination,
//     IconButton,
//     Icon
// } from "@material-ui/core";
// import { Breadcrumb, ConfirmationDialog } from "egret";
// import MaterialTable, {
//     MTableToolbar,
//     Chip,
//     MTableBody,
//     MTableHeader
// } from "material-table";
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import { ValidatorForm, TextField } from "react-material-ui-form-validator";
// import { addEmployee, searchCommune, searchDistrict, searchProvince, searchEmployee } from "./EmployeeService";
// import AsynchronousAutocomplete from "../utilities/AsynchronousAutocomplete";
// import Draggable from 'react-draggable';
// import Paper from '@material-ui/core/Paper';
// import '../../../styles/views/_loadding.scss';
// import clsx from 'clsx';
// import CircularProgress from '@material-ui/core/CircularProgress';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import '../../../styles/views/_style.scss';
// import './Employee.scss'
// import { event } from "jquery";
// import { Log } from "victory";
// toast.configure({
//     autoClose: 1000,
//     draggable: false,
//     limit: 3
// });
// function PaperComponent(props) {
//     return (
//         <Draggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
//             <Paper {...props} />
//         </Draggable>
//     );
// }
// function MaterialButton(props) {
//     const item = props.item;
//     return (
//         <div>
//             <IconButton onClick={() => props.onSelect(item, 1)}>
//                 <Icon color="error">delete</Icon>
//             </IconButton>
//         </div>
//     );
// }


// class EmployeeDialog extends Component {
//     constructor(props) {
//         super(props);

//     }
//     state = {
        
//         email: '',
//         loading: false,
//         listProvinces: [],
//         province: null,
//         listDistricts: [],
//         district: null,
//         listCommunes: [],
//         commune: null,
//         code: '',
//         age: '',
//         phone: '',
//         nameEmployee: '',

//     };



//     handleChangeEmployee = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })

//     }
//     handleFormSubmit = () => {
//         addEmployee({
//             name: this.state.nameEmployee,
//             code: this.state.code,
//             age: this.state.age,
//             phone: this.state.phone,
//             email: this.state.email,
//             province: this.state.province,
//             district: this.state.district,
//             commune: this.state.commune,
//         }).then(() => {
//             this.props.employeeTable()
//             this.props.handleCloseEmployeeDialog()
//         })

//     };
//     componentDidMount() {

//         searchProvince({})
//             .then((res) => {
//                 this.setState({
//                     listProvinces: res.data.data
//                 })
//             })
//         searchDistrict({})
//             .then((res) => {
//                 this.setState({
//                     listDistricts: res.data.data
//                 })
//             })
//         searchCommune({})
//             .then((res) => {
//                 this.setState({
//                     listCommunes: res.data.data
//                 })
//             })

//     }
//     render() {
//         let { open, handleClose, t, i18n } = this.props;
//         let {
            
//             email,
//             loading,
//             listProvinces,
//             province,
//             listDistricts,
//             district,
//             listCommunes,
//             commune, code, age, phone, nameEmployee
//         } = this.state;

//         return (
//             <Dialog open={open} onClose={handleClose}>
//                 <ValidatorForm ref="form" onSubmit={this.handleFormSubmit} style={{
//                     overflowY: "auto",
//                     display: "flex",
//                     flexDirection: "column"
//                 }}>
//                     <DialogContent dividers>
//                         <Grid className="mb-16" container spacing={1}>
//                             <Grid item lg={6} md={6} sm={12} xs={12}>
//                                 <TextField
//                                     className="w-100 mb-16"
//                                     label={
//                                         <span className="font">
//                                             <span style={{ color: "red" }}> * </span>
//                                             {t('staff.name')}
//                                         </span>
//                                     }
//                                     onChange={(event) => this.handleChangeEmployee(event)}
//                                     type="text"
//                                     name="nameEmployee"
//                                     value={nameEmployee}
//                                     validators={["required"]}
//                                     errorMessages={[t("general.errorMessages_required")]}
//                                     variant="outlined"
//                                     size="small"
//                                 />
//                             </Grid>

//                             <Grid item lg={6} md={6} sm={12} xs={12}>
//                                 <TextField
//                                     className="w-100 mb-16"
//                                     label={
//                                         <span className="font">
//                                             <span style={{ color: "red" }}> * </span>
//                                             {t('staff.code')}
//                                         </span>
//                                     }
//                                     onChange={(event) => this.handleChangeEmployee(event)}
//                                     type="text"
//                                     name="code"
//                                     value={code}
//                                     validators={["required"]}
//                                     errorMessages={[t("general.errorMessages_required")]}
//                                     variant="outlined"
//                                     size="small"
//                                 />
//                             </Grid>
//                             <Grid item lg={6} md={6} sm={12} xs={12}>
//                                 <TextField
//                                     className="w-100 mb-16"
//                                     label={
//                                         <span className="font">
//                                             <span style={{ color: "red" }}> * </span>
//                                             {t('staff.age')}
//                                         </span>
//                                     }
//                                     onChange={(event) => this.handleChangeEmployee(event)}
//                                     type="text"
//                                     name="age"
//                                     value={age}
//                                     validators={["required"]}
//                                     errorMessages={[t("general.errorMessages_required")]}
//                                     variant="outlined"
//                                     size="small"
//                                 />
//                             </Grid>
//                             <Grid item lg={6} md={6} sm={12} xs={12}>
//                                 <TextField

//                                     className="w-100 mb-16"
//                                     label={
//                                         <span className="font">
//                                             <span style={{ color: "red" }}> * </span>
//                                             {t('staff.phoneNumber')}
//                                         </span>
//                                     }
//                                     onChange={(event) => this.handleChangeEmployee(event)}
//                                     type="text"
//                                     name="phone"
//                                     value={phone}
//                                     validators={["required"]}
//                                     errorMessages={[t("general.errorMessages_required")]}
//                                     variant="outlined"
//                                     size="small"
//                                 />
//                             </Grid>
//                             <Grid item lg={6} md={6} sm={12} xs={12}>
//                                 <TextField
//                                     className="w-100 mb-16"
//                                     label={
//                                         <span className="font">
//                                             <span style={{ color: "red" }}> * </span>
//                                             {t("Email")}
//                                         </span>
//                                     }
//                                     onChange={(event) => this.handleChangeEmployee(event)}
//                                     type="email"
//                                     name="email"
//                                     value={email}
//                                     validators={["required", "isEmail"]}
//                                     errorMessages={[
//                                         t("general.errorMessages_required"),
//                                         t("general.errorMessages_email_valid")
//                                     ]}
//                                     variant="outlined"
//                                     size="small"
//                                 />
//                             </Grid>
//                             <Grid item lg={6} md={6} sm={12} xs={12} >

//                                 <TextField
//                                     className="selectinput"
//                                     label={t('staff.province')}
//                                     select
//                                     value={province ? province : null}
//                                     onChange={(event) => this.setState({
//                                         province: event.target.value
//                                     })}
//                                     variant="outlined"
//                                     size="small"

//                                 >
//                                     {listProvinces.map((item) => (
//                                         <MenuItem value={item}>{item.name}</MenuItem>
//                                     ))}
//                                 </TextField>

//                             </Grid>
//                             <Grid item lg={6} md={6} sm={12} xs={12}>

//                                 <TextField
//                                     className="selectinput"
//                                     label={t('staff.district')}
//                                     select
//                                     value={district ? district : null}
//                                     onChange={(event) => this.setState({
//                                         district: event.target.value
//                                     })}
//                                     variant="outlined"
//                                     size="small"
//                                 >
//                                     {province && listDistricts.map((item) => (
//                                         <MenuItem value={item}>{item.name}</MenuItem>
//                                     ))}
//                                 </TextField>

//                             </Grid>
//                             <Grid item lg={6} md={6} sm={12} xs={12}>

//                                 <TextField
//                                     className="selectinput"
//                                     label={t('staff.commune')}
//                                     select
//                                     value={commune ? commune : null}
//                                     onChange={(event) => this.setState({
//                                         commune: event.target.value
//                                     })}
//                                     variant="outlined"
//                                     size="small"
//                                 >
//                                     {district && listCommunes.map((item) => (
//                                         <MenuItem value={item}>{item.name}</MenuItem>
//                                     ))}
//                                 </TextField>

//                             </Grid>
//                         </Grid>
//                     </DialogContent>

//                     <DialogActions spacing={4} className="flex flex-end flex-middle">
//                         <Button
//                             variant="contained"
//                             color="secondary"
//                             onClick={() => this.props.handleClose()}>
//                             {t('Cancel')}
//                         </Button>
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             type="submit"
//                             disabled={loading}
//                         >
//                             {t('Save')}
//                         </Button>
//                     </DialogActions>
//                 </ValidatorForm>
//             </Dialog >

//         );
//     }
// }

// export default EmployeeDialog;
