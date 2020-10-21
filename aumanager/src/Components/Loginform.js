import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Link,BrowserRouter,useHistory,useLocation} from 'react-router-dom';
import './loginform.css';

const Loginform = (props) => {

    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");

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
             history.pushState('/dashboard');
          }
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
    </Form>
          </div>
      </div>
    
  );
}

export default Loginform;