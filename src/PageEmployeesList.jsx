import React from 'react'
import Employee from './Employee'


const PageEmployeesList = (props) =>{
    const employeesList = props.employees.map(Data =>
        <Employee key={Data.id} data={Data}/>)
    return(
        <div>
            {employeesList}
        </div>
    )
}
export default PageEmployeesList