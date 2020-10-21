import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './loginform.css';

const Loginform = (props) => {

    const [email,setemail]=useState("");
    const [pass,setpass]=useState("");



  return (
      <div className="container">
          <div className="container">
    <Form className="page__login">
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