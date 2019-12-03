import React from 'react'
import { withRouter} from "react-router-dom";

class PageEmployee extends React.Component
{    
constructor(props)
{
super(props);
this.state={
    isActive:false,
    age:null,
    name:null,
    company:null,
    email:null,

}
this.isActiveHandler=this.isActiveHandler.bind(this);
this.ageHandler=this.ageHandler.bind(this);
this.nameHandler=this.nameHandler.bind(this);
this.companyHandler=this.companyHandler.bind(this);
this.emailHandler=this.emailHandler.bind(this);
this.idHandler=this.idHandler.bind(this);
this.SubmitClick=this.SubmitClick.bind(this);
}

isActiveHandler(ev)
{
    if(this.state.isActive)
    {
        this.setState({isActive:false})
    }
    else
    {
        this.setState({isActive:true})
    }
}

ageHandler(ev)
{
    this.setState({age:ev.target.value})
}
nameHandler(ev)
{
    this.setState({name:ev.target.value})
}
companyHandler(ev)
{
    this.setState({company:ev.target.value})
}
emailHandler(ev)
{
    this.setState({email:ev.target.value})
}

idHandler(ev)
{
    this.setState({id:ev.target.value})
}

SubmitClick()
{
 
}


render()
{

   return(
       <div>
        <br/>
        <label>isActive: </label><input value="coding" type="checkbox" onChange={this.isActiveHandler}/>
        <br/>
        <br/>
        <label>age: </label><input type="number" min="0" onChange={this.ageHandler}/>
        <br/>
        <br/>
        <label>name: </label><input onChange={this.nameHandler}/>
        <br/>
        <br/>
        <label>company: </label><input onChange={this.companyHandler}/>
        <br/>
        <br/>
        <label>email: </label><input onChange={this.emailHandler}/>
        <br/>
        <br/>
        <button onClick={this.SubmitClick}>Submit</button>
        <br/>
        <br/>

    </div>
    )

}
}

export default withRouter(PageEmployee)