import React, { useState } from 'react'
import { Grid, DialogContent, Dialog, Select, MenuItem } from '@material-ui/core'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import CustomAvatar from './CustomAvatar'
import { useEffect } from 'react'
import { getListProvinces, getListDistricts, getListCommunes } from './AddEmployeeService'
export default function ProfileEmployee(props) {
  const { t, item } = props
  const [listEmployee, setListEmployee] = useState({})
  const [listProvinces, setListProvinces] = useState([])
  const [listDistricts, setListDistricts] = useState([])
  const [listCommunes, setListCommunes] = useState([])
  useEffect(() => {
    // if (item.id) {
    //   setListEmployee(item)
    // }
    getListProvinces({})
      .then(res => setListProvinces(res.data.provinces))
    getListDistricts({})
      .then(res => setListDistricts(res.data.districts))
    getListCommunes({})
      .then(res => setListCommunes(res.data.communes))
  }, [])
  return (
    <div>

      {/* <Dialog maxWidth="md"> */}
      {/* open={open} onClose={handleClose} */}
      <ValidatorForm
        style={{
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DialogContent >

          <Grid className="mb-16" container spacing={1}>
            <Grid item lg={4} md={4} sm={12} xs={12}  >
              <CustomAvatar></CustomAvatar>
            </Grid>
            <Grid item lg={8} md={8} sm={12} xs={12} container spacing={1} className="mb-20" >

              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Tên nhân viên
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                ></TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Mã nhân viên
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                ></TextValidator>
              </Grid>

              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Giới tính
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                >

                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Ngày sinh
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                >

                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Tôn giáo
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                >

                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Dân tộc
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                >

                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Email
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                >

                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Số điện thoại
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"
                >
                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}  >
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Chọn Tỉnh / Thành phố
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  onChange={(event) => {
                    setListEmployee({ ...listEmployee, province: event.target.value })
                  }}
                  // type="text"
                  select
                  name="province"
                  value={listEmployee.province}
                  // validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  // errorMessages={[("Select province"), "No number"]}
                  variant="outlined"
                  size="small"
                >
                  {listProvinces.map((item) => (
                    <MenuItem value={item}>{item.name}</MenuItem>
                  ))}

                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}  >
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Quận / Huyện
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  onChange={(event) => {
                    setListEmployee({ ...listEmployee, district: event.target.value })
                  }}
                  // type="text"
                  select
                  name="district"
                  value={listEmployee.district}
                  // validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  // errorMessages={[("Select province"), "No number"]}
                  variant="outlined"
                  size="small"
                >
                  {listDistricts.map((item) => (
                    <MenuItem value={item}>{item.name}</MenuItem>
                  ))}

                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}  >
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Phường / Xã
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  onChange={(event) => {
                    setListEmployee({ ...listEmployee, commune: event.target.value })
                  }}
                  // type="text"
                  select
                  name="commune"
                  value={listEmployee.commune}
                  // validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  // errorMessages={[("Select province"), "No number"]}
                  variant="outlined"
                  size="small"
                >
                  {listCommunes.map((item) => (
                    <MenuItem value={item}>{item.name}</MenuItem>
                  ))}

                </TextValidator>
              </Grid>
              <Grid item lg={3} md={3} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Nơi sinh
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                ></TextValidator>
              </Grid>

              {/* <Grid item lg={12} md={12} sm={12} xs={12} container spacing={1} className="mt-20"> */}

              <Grid item lg={12} md={12} sm={12} xs={12}>
                <TextValidator
                  className="w-100 mb-8"
                  label={
                    <span className="font">
                      Địa chỉ cụ thể
                      <span style={{ color: "red" }}> * </span>
                    </span>
                  }
                  // onChange={(event) => {
                  //   setEmployee({ ...employee, name: event.target.value })
                  //   setCheckName('')
                  // }}
                  type="text"
                  name="name"
                  // value={employee.name}
                  validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                  errorMessages={[("Invalid a name"), "No number"]}
                  variant="outlined"
                  size="small"


                ></TextValidator>
              </Grid>
              {/* </Grid> */}
              <Grid item lg={12} md={12} sm={12} xs={12} container spacing={1} className="mt-20">

                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className="w-100 mb-8"
                    label={
                      <span className="font">
                        Mã CCCD
                        <span style={{ color: "red" }}> * </span>
                      </span>
                    }
                    // onChange={(event) => {
                    //   setEmployee({ ...employee, name: event.target.value })
                    //   setCheckName('')
                    // }}
                    type="text"
                    name="name"
                    // value={employee.name}
                    validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                    errorMessages={[("Invalid a name"), "No number"]}
                    variant="outlined"
                    size="small"


                  ></TextValidator>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className="w-100 mb-8"
                    label={
                      <span className="font">
                        Nơi cấp
                        <span style={{ color: "red" }}> * </span>
                      </span>
                    }
                    // onChange={(event) => {
                    //   setEmployee({ ...employee, name: event.target.value })
                    //   setCheckName('')
                    // }}
                    type="text"
                    name="name"
                    // value={employee.name}
                    validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                    errorMessages={[("Invalid a name"), "No number"]}
                    variant="outlined"
                    size="small"


                  ></TextValidator>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className="w-100 mb-8"
                    label={
                      <span className="font">
                        Ngày cấp
                        <span style={{ color: "red" }}> * </span>
                      </span>
                    }
                    // onChange={(event) => {
                    //   setEmployee({ ...employee, name: event.target.value })
                    //   setCheckName('')
                    // }}
                    type="text"
                    name="name"
                    // value={employee.name}
                    validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                    errorMessages={[("Invalid a name"), "No number"]}
                    variant="outlined"
                    size="small"


                  ></TextValidator>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className="w-100 mb-8"
                    label={
                      <span className="font">
                        Nhóm
                        <span style={{ color: "red" }}> * </span>
                      </span>
                    }
                    // onChange={(event) => {
                    //   setEmployee({ ...employee, name: event.target.value })
                    //   setCheckName('')
                    // }}
                    type="text"
                    name="name"
                    // value={employee.name}
                    validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                    errorMessages={[("Invalid a name"), "No number"]}
                    variant="outlined"
                    size="small"


                  ></TextValidator>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className="w-100 mb-8"
                    label={
                      <span className="font">
                        Lương (VND)
                        <span style={{ color: "red" }}> * </span>
                      </span>
                    }
                    // onChange={(event) => {
                    //   setEmployee({ ...employee, name: event.target.value })
                    //   setCheckName('')
                    // }}
                    type="text"
                    name="name"
                    // value={employee.name}
                    validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                    errorMessages={[("Invalid a name"), "No number"]}
                    variant="outlined"
                    size="small"


                  ></TextValidator>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <TextValidator
                    className="w-100 mb-8"
                    label={
                      <span className="font">
                        Chức vụ
                        <span style={{ color: "red" }}> * </span>
                      </span>
                    }
                    // onChange={(event) => {
                    //   setEmployee({ ...employee, name: event.target.value })
                    //   setCheckName('')
                    // }}
                    type="text"
                    name="name"
                    // value={employee.name}
                    validators={["required", "matchRegexp:^[a-zA-ZÀ-ỹ\\s]+$"]}
                    errorMessages={[("Invalid a name"), "No number"]}
                    variant="outlined"
                    size="small"


                  ></TextValidator>
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </DialogContent>

      </ValidatorForm>
      {/* </Dialog> */}
    </div>
  )
}
