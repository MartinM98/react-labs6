import React from 'react'
import AddComponent from './AddComponent'
import EmployeesList from './EmployeesList';
class Component extends React.Component
{    
constructor(props)
{
super(props);
this.state={
    employees:[],
    flag:true,
    addFlag:false,
    deleteFlag:false
}
    this.AddButtonClick=this.AddButtonClick.bind(this);
    this.ComponentCancelProps=this.ComponentCancelProps.bind(this);
    this.componentDidMount=this.componentDidMount.bind(this);
}
componentDidMount()
{
this.setState({flag:true});
fetch('http://localhost:3004/employees')
.then(results=>results.json())
.then(data=>this.setState({employees:data}))
.then(()=>this.setState({flag:false}));

}

AddButtonClick()
{
    this.setState({addFlag:true});
}

ComponentCancelProps()
{
    this.setState({addFlag:false});
}


render()
{

   return(
    <div>
        <label>{this.state.flag?"Loading...":""}</label>
        {!this.state.flag&&!this.state.addFlag? <button onClick={this.AddButtonClick}>Add employee</button>: null}
        {!this.state.flag&&this.state.addFlag? <AddComponent Handler={this.componentDidMount} CancelProps={this.ComponentCancelProps} /> : null}
        <EmployeesList delete={this.state.deleteFlag} employees={this.state.employees}/>
    </div>
    )

}
}

export default Component