import React from 'react'
class Component extends React.Component
{    
constructor(props)
{
super(props);
this.state={
    employees:null,
    flag:true
}
    
}
componentDidMount()
{

fetch('http://localhost:3004/employees')
.then(results=>results.json())
.then(data=>this.setState({employees:data}))
.then(()=>this.setState({flag:false}));

}
render()
{

   return(
    <div>
        <label>{this.state.flag?"Loading...":""}</label>
    </div>
    )

}
}

export default Component