import React from 'react'
import PageEmployee from './PageEmployee'
import PageEmployeesList from './PageEmployeesList';
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
    this.delete=this.delete.bind(this);
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
delete()
{
this.setState({deleteFlag:true});
    fetch('http://localhost:3004/employees/'+this.state.employees[this.state.employees.length-1].id, {
  method: 'DELETE',
  headers: {'content-type': 'application/json'},
  body: JSON.stringify({id:this.state.id})
})
.then(()=>this.setState({deleteFlag:false}))
.then(this.componentDidMount)
}

render()
{

   return(
    <div>
        <label>{this.state.flag?"Loading...":""}</label>
        <label>{this.state.deleteFlag?"Deleting...":""}</label>
        {!this.state.deleteFlag&!this.state.flag&&!this.state.addFlag? <button onClick={this.AddButtonClick}>Add employee</button>: null}
        {!this.state.deleteFlag&!this.state.flag&&this.state.addFlag? <PageEmployee Handler={this.componentDidMount} CancelProps={this.ComponentCancelProps} /> : null}
        {!this.state.deleteFlag&!this.state.flag?<PageEmployeesList employees={this.state.employees}/>:""}
        {!this.state.deleteFlag&!this.state.flag?  <button onClick={this.delete}>Delete last employee</button>:""}
    </div>
    )

}
}

export default Component