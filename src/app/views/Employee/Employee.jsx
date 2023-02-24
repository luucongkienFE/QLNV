import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import EmployeeDialog from "./EmployeeDialog";
import { Breadcrumb, ConfirmationDialog } from "egret";
import MaterialTable from "material-table";
import {
    Grid,
    IconButton,
    Icon,
    TablePagination,
    Button,
    TextField,
    InputAdornment,
    Input
} from "@material-ui/core";
import { deleteEmployee, searchEmployee } from "./EmployeeService";

import React from 'react'
import axios from "axios";
import { toast } from "react-toastify";

function MaterialButton(props) {
    const { item, open, handleEditEmploy, rowData, handleClickOpen } = props;


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
function Employee(props) {
    const [totalElements, setTotalElements] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = useState(0)
    const [openEmployeeDialog, setOpenEmployeeDialog] = useState(false)
    const [listEmployees, setListEmployees] = useState([])
    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState()
    const { t, i18n } = props
    const handleDelete = (id) => {
        console.log(id);
        // axios.delete('http://training-api.oceantech.com.vn/cms/employees/' + id)
        deleteEmployee(id)
            .then(() => {
                setLoading(!loading)
                toast.success("Delete success")
            })
            .catch((e) => {
                console.log(e);
                toast.error("Delete error")
            })

    };

    // const updatePageData = () => {
    //     var searchObject = {};
    //     searchObject.pageIndex = page + 1;
    //     searchObject.pageSize = rowsPerPage;
    // };

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

    useEffect(() => {
        searchEmployee({})
            .then(res => setListEmployees(res.data.data))
    }, [loading])

    const handleClickOpen = () => {
        setItem('')
        setOpenEmployeeDialog(true)
    }
    const handleClose = () => {
        setOpenEmployeeDialog(false)
        searchEmployee({})
            .then(res => setListEmployees(res.data.data))
    }


    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };
    // const handlesetRowsPerPage = event => {
    //     setRowsPerPage({ rowsPerPage: event.target.value, page: 0 }, function () {
    //         updatePageData();
    //     });
    // };
    return (
        <div>
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
                            {openEmployeeDialog && (
                                <EmployeeDialog t={t} i18n={i18n}
                                    handleClose={() => handleClose()}
                                    open={() => handleClickOpen()}
                                    item={item}
                                />
                            )}

                        </div>
                        <MaterialTable
                            title={t('staff.list')}
                            data={listEmployees}
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
                        {/* <TablePagination
                            align="left"
                            className="px-16"
                            rowsPerPageOptions={[1, 2, 3, 5, 10, 25, 50, 100]}
                            component="div"
                            labelRowsPerPage={t('general.rows_per_page')}
                            labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${t('general.of')} ${count !== -1 ? count : `more than ${to}`}`}
                            count={totalElements}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            backIconButtonProps={{
                                "aria-label": "Previous Page"
                            }}
                            nextIconButtonProps={{
                                "aria-label": "Next Page"
                            }}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handlesetRowsPerPage}
                        /> */}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
export default Employee;

// ClassComponent
// import React from "react";
// import { useTranslation } from "react-i18next";
// import EmployeeDialog from "./EmployeeDialog";
// import getEmployee from "./EmployeeService";
// import { Breadcrumb, ConfirmationDialog } from "egret";
// import MaterialTable from "material-table";
// import { API_ENPOINT } from "app/appConfig";
// import {
//     Grid,
//     IconButton,
//     Icon,
//     TablePagination,
//     Button,
//     TextField,
//     InputAdornment,
//     Input
// } from "@material-ui/core";
// import { searchEmployee } from "./EmployeeService";
// function MaterialButton(props) {
//     const { t, i18n } = useTranslation();
//     const item = props.item;
//     return <div>
//         <IconButton size="small" onClick={() => props.onSelect(item, 0)}>
//             <Icon fontSize="small" color="primary">edit</Icon>
//         </IconButton>
//         <IconButton onClick={() => props.onSelect(item, 1)}>
//             <Icon color="error">delete</Icon>
//         </IconButton>
//     </div>;
// }



// class Employee extends React.Component {
//     state = {
//         openEmployeeDialog: false,
//         listData: [],
//         totalElements: 0,
//         rowsPerPage: 10,
//         page: 0,
//     }
//     componentDidMount() {
//         this.renderEmployeeTable()
//     }
//     renderEmployeeTable = async () => {
//         let res = await searchEmployee({})
//         this.setState({
//             listData: res.data.data
//         })
//     }
//     handleOpenEmployeeDialog = () => {
//         this.setState({
//             openEmployeeDialog: true,
//         })
//     }

//     handleCloseEmployeeDialog = () => {
//         this.setState({
//             openEmployeeDialog: false,
//         });
//     };
//     render() {

//         const { t, i18n } = this.props
//         const { shouldOpenConfirmationDialog,
//             totalElements,
//             rowsPerPage, page, item
//         } = this.state
//         const columns = [
//             {
//                 title: t("Action"),
//                 field: "custom",
//                 align: "left",
//                 width: "250",
//                 render: () => {
//                     return (
//                         <div>
//                             <MaterialButton />

//                         </div>
//                     )
//                 }

//             },
//             { title: t("staff.name"), field: "name", width: "150" },
//             { title: t("staff.code"), field: "code", width: "150" },
//             { title: t("staff.age"), field: "age", align: "left", width: "150" },
//             { title: t("staff.phoneNumber"), field: "phone", width: "150" },
//             { title: t("staff.email"), field: "email", width: "150" },
//         ]

//         console.log(this.state.listData);
//         return (
//             <div className="mt-20 ml-20">
//                 <Breadcrumb routeSegments={[
//                     { name: t("Dashboard.manage"), path: "/directory/apartment" },
//                     { name: t("staff.title") }
//                 ]}
//                 />

//                 <Grid container spacing={2} justify="space-between">
//                     <Grid item lg={3} md={3} xs={12} >
//                         <Button
//                             className="align-bottom mt-30 mr-16 mb-16"
//                             variant="contained"
//                             color="primary"
//                             onClick={this.handleOpenEmployeeDialog}
//                         >
//                             {t('staff.addNew')}
//                         </Button>
//                     </Grid>
//                     <Grid item xs={12}>
//                         <div>
//                             {this.state.openEmployeeDialog && (
//                                 <EmployeeDialog t={t} i18n={i18n}
//                                     handleClose={this.handleCloseEmployeeDialog}
//                                     open={this.state.openEmployeeDialog}
//                                     item={item}
//                                     employeeTable={() => this.renderEmployeeTable()}
//                                     handleCloseEmployeeDialog={() => this.handleCloseEmployeeDialog()}
//                                 />
//                             )}

//                             {shouldOpenConfirmationDialog && (
//                                 <ConfirmationDialog
//                                     title={t("confirm")}
//                                     openEmployeeDialog={shouldOpenConfirmationDialog}
//                                     onConfirmDialogClose={this.handleCloseEmployeeDialog}
//                                     onYesClick={this.handleConfirmationResponse}
//                                     text={t('DeleteConfirm')}
//                                 />
//                             )}
//                         </div>
//                         <MaterialTable
//                             title={t('staff.list')}
//                             data={this.state.listData}
//                             columns={columns}
//                         />
//                         <TablePagination
//                             align="left"
//                             className="px-16"
//                             rowsPerPageOptions={[1, 2, 3, 5, 10, 25, 50, 100]}
//                             component="div"
//                             labelRowsPerPage={t('general.rows_per_page')}
//                             labelDisplayedRows={({ from, to, count }) => `${from}-${to} ${t('general.of')} ${count !== -1 ? count : `more than ${to}`}`}
//                             count={totalElements}
//                             rowsPerPage={rowsPerPage}
//                             page={page}
//                             backIconButtonProps={{
//                                 "aria-label": "Previous Page"
//                             }}
//                             nextIconButtonProps={{
//                                 "aria-label": "Next Page"
//                             }}
//                         />
//                     </Grid>
//                 </Grid>
//             </div>
//         )

//     }

// }
// export default Employee;

