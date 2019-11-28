import React from 'react'
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
    submitFlag:false,
    id:null
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
    this.setState({submitFlag:true})
    fetch('http://localhost:3004/employees', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    isActive: this.state.isActive,
    age: this.state.age,
    name: this.state.name,
    company: this.state.company,
    email: this.state.email,
  }),
}).then(()=>this.setState({submitFlag:false}))
.then(()=>this.props.Handler());
}


render()
{

   return(
       <div>
    <div hidden={this.state.submitFlag}>
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
        <button onClick={this.props.CancelProps}>Cancel</button>
        <br/>
        <br/>

    </div>
    <label hidden={!this.state.submitFlag}>Saving...</label>
    </div>
    )

}
}

export default PageEmployee