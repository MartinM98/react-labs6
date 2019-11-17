import React from 'react'

function Employee(props){
    return(
        <div>
             <p>IsActive: {props.data.isActive.toString()}</p>
             <p>Age: {props.data.age}</p>
            <p>Name: {props.data.name}</p>
            <p>Company: {props.data.company}</p>
            <p>Email: {props.data.email}</p>
            <br/>
            <br/>
            <br/>
            
        </div>
    )
}
export default Employee