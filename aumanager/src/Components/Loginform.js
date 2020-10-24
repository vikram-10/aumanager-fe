import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link,BrowserRouter,useHistory,useLocation, Redirect} from 'react-router-dom';
import './loginform.css';

const Loginform = (props) => {

  let history=useHistory();
    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");
    const [changepage,setchangepage]=useState("");

    let data={
        "email":email,
        "pass":pass
    }

    const loginSubmit=async(e)=>{
        e.preventDefault();
        let fetcher= await fetch('http://localhost:4000/login',{
            method: 'POST',
            mode: 'cors', 
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json'
            },
            redirect: 'follow', 
            referrerPolicy: 'no-referrer', 
            body: JSON.stringify(data) 
          });
          let fetcherData=await fetcher.json();
          if(fetcherData.status==1){
            localStorage.setItem('token',fetcherData.token)
             setchangepage(1);         //doubtful  //use useState to set status to 1 and check from state and redirect to a protected component use a ternary operator to render the component
          }
          else{
            alert("You have not been approved yet, You will be notified by Mail");
          }
    }

if(changepage==1){
  history.push('/dashboard');
}

  return (
      <div className="container">
          <div className="container">
    <Form onSubmit={loginSubmit} className="page__login">
        <h1>Login Form</h1>
        <br></br>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input className="login__input" type="email" name="email" id="exampleEmail" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input className="login__input" type="password" name="password" id="examplePassword" placeholder="Password" onChange={(e)=>{setpass(e.target.value)}} />
      </FormGroup>
      <Button>Submit</Button>
      <span><Link><p>Forgot Password?</p></Link><Link><p>Sign Up</p></Link></span>
    </Form>
          </div>
      </div>
    
  );
}

export default Loginform;