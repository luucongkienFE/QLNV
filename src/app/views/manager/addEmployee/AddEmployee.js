import React, { useState } from 'react'
import { Breadcrumb } from 'egret'
import { Grid, Button, IconButton, Icon } from '@material-ui/core'
import AddEmployeeDialog from './AddEmployeeDialog'
import { useEffect } from 'react'
import { getListEmployee } from './AddEmployeeService'
import { Log } from 'victory'
import MaterialTable from 'material-table'

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

export default function AddEmployee(props) {
    const { t, i18n } = props
    const [listEmployee, setListEmployee] = useState([])
    const [openAddEmployeeDialog, setOpenAddEmployeeDialog] = useState(false)

    const handleClickOpen = () => {
        setOpenAddEmployeeDialog(true)
    }

    const handleClose = () => {
        setOpenAddEmployeeDialog(false)
    }

    const columns = [

        { title: t("staff.name"), field: "name", width: "150" },
        { title: t("staff.code"), field: "code", width: "150" },
        { title: t("staff.age"), field: "birthdate", align: "left", width: "150" },
        { title: t("staff.phoneNumber"), field: "phone", width: "150" },
        { title: t("staff.email"), field: "email", width: "150" },
        { title: "Team", field: "team", width: "150" },
        { title: "Salary", field: "salary", width: "150" },
        { title: "Position", field: "position", width: "150" },
        { title: "Place of Birth", field: "placeofbirth", width: "150" },
        // {placeofbirth
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
                        // setItem(rowData)

                    } else if (method === 1) {
                        // handleDelete(rowData.id);
                    } else {
                        alert('Call Selected Here:' + rowData.id);
                    }
                }
                }
            />


        },
    ]

    useEffect(() => {
        getListEmployee().then(res => setListEmployee(res.data))
    }, [openAddEmployeeDialog])
    console.log("listEmployee", listEmployee.map(item => item.name));
    return (
        <div>
            <div className='mt-20 ml-20'>
                <Breadcrumb routeSegments={[
                    { name: t("Dashboard.manage"), path: "/directory/apartment" },
                    { name: t("staff.addNewEmployee") }
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
                            {openAddEmployeeDialog && (
                                <AddEmployeeDialog t={t} i18n={i18n}
                                    handleClose={() => handleClose()}
                                    open={() => handleClickOpen()}
                                // item={item}
                                />
                            )}
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
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}
