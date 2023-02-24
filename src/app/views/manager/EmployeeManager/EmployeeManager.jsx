import React from 'react'
import { Breadcrumb } from 'egret'
export default function EmployeeManager(props) {
    const { t, i18n } = props
    return (
      <div>
        <div className='mt-20 ml-20'>
            <Breadcrumb routeSegments={[
            { name: t("Dashboard.manage"), path: "/directory/apartment" },
                    { name: t("staff.employeeManager") }
        ]}
        />
        </div>
      </div>
  )
}
