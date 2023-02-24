import React, { useState } from 'react'
import { Dialog, Tabs, Tab, Menu, MenuItem } from '@material-ui/core'
// import { TabPanel } from '@material-ui/lab'

// import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
// import EndEmployee from '../EndEmployee/EndEmployee'
import ProfileEmployee from './ProfileEmployee'
import FamilyRelationship from './FamilyRelationship'
import DiplomaInformation from './DiplomaInformation'

export default function AddEmployeeDialog(props) {
    const { open, handleClose, t } = props

    const [value, setValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleMenuClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (event, index) => {
        setValue(index);
        handleMenuClose();
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xl">
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={(event) => handleMenuItemClick(event, 0)}>Thông tin nhân viên</MenuItem>
                    <MenuItem onClick={(event) => handleMenuItemClick(event, 1)}>Quan hệ gia đình</MenuItem>
                    <MenuItem onClick={(event) => handleMenuItemClick(event, 2)}>Thông tin văn bằng</MenuItem>
                </Menu>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Thông tin nhân viên" />
                    <Tab label="Quan hệ gia đình" />
                    <Tab label="Thông tin văn bằng" />
                </Tabs>
                {value === 0 && <ProfileEmployee />}
                {value === 1 && <FamilyRelationship />}
                {value === 2 && <DiplomaInformation />}

            </Dialog >
        </div >
    )
}
