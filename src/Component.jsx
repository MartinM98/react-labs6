import React from 'react'
import PageEmployeesList from './PageEmployeesList';
import { withRouter} from "react-router-dom";
class Component extends React.Component
{    
constructor(props)
{
super(props);
this.state={
    employees:[],

}
    this.componentDidMount=this.componentDidMount.bind(this);

}
componentDidMount()
{

fetch('http://localhost:3004/employees')
.then(results=>results.json())
.then(data=>this.setState({employees:data}))

}


render()
{

   return(
    <div>
        <PageEmployeesList employees={this.state.employees}/>
    </div>
    )

}
}

export default withRouter(Component)