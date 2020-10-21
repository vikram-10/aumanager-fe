import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';

const Signupform = (props) => {
  // Write all your JS logic over here
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [college, setcollege] = useState("");
  const [rno, setrno] = useState("");
  const[ccode,setccode]=useState("");
  const [role, setrole] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [repass, setrepass] = useState("");

  let data={
    "fname": fname,
    "lname":lname,
    "country":country,
    "state":state,
    "city":city,
    "college":college,
    "rno":rno,
    "ccode":ccode,
    "role":role,
    "email":email,
    "pass":pass,
    "status":"unapproved"
  }

  //Write code to send a post request with data to backend (Also check if passwords match)

  const submitForm=async (e)=>{
    e.preventDefault();
    if(pass===repass){
      let fetcher= await fetch('http://localhost:4000/signup',{
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
        alert("Form Has Been Submitted for review!");
      }
    }
    else{
      alert("Passwords do not match");
    }
  }



  return (
    <Form className="page__form" onSubmit={submitForm}>
        <h1 id="form__heading">Sign Up Form</h1>
        <p id="form__line">Please note that your form will be sent for review and you can Login only once it has been approved by the admin</p>
        <div className="row">
            <div className="col-6">
            <FormGroup>
        <Label for="fname">First Name</Label>
        <Input type="text" name="fname" id="exampleEmail" placeholder="Jon" onChange={(e)=>setfname(e.target.value)} />
      </FormGroup>
            </div>
            <div className="col-6">
            <FormGroup>
        <Label for="lname">Last Name</Label>
        <Input type="name" name="lname" id="exampleEmail" placeholder="Doe"  onChange={(e)=>setlname(e.target.value)} />
      </FormGroup>
            </div>
        </div>
        <FormGroup>
        <Label for="lname">Country</Label>
        <Input type="name" name="lname" id="exampleEmail" placeholder="Country" onChange={(e)=>setcountry(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="lname">State</Label>
        <Input type="name" name="lname" id="exampleEmail" placeholder="State" onChange={(e)=>setstate(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="lname">City</Label>
        <Input type="name" name="lname" id="exampleEmail" placeholder="City" onChange={(e)=>setcity(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="lname">College</Label>
        <Input type="name" name="lname" id="exampleEmail" placeholder="College" onChange={(e)=>setcollege(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="lname">College Roll Number</Label>
        <Input type="text" name="lname" id="exampleEmail" placeholder="Roll No." onChange={(e)=>setrno(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="lname">College Code</Label>
        <Input type="text" name="collegecode" id="exampleEmail" placeholder="College Code No." onChange={(e)=>setccode(e.target.value)} />
      </FormGroup>
      <FormGroup tag="fieldset" row onChange={(e)=>setrole(e.target.value)}>
        <legend className="col-form-label col-sm-2">Role</legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" value="student"/>{' '}
              Student
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" value="faculty"/>{' '}
              Faculty
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio2" value="admin"/>{' '}
              Admin
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="jogndoe@example.com" onChange={(e)=>setemail(e.target.value)} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password (Keep it a secret!) " onChange={(e)=>setpass(e.target.value)}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Re-Enter password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Re-enter password" onChange={(e)=>setrepass(e.target.value)}/>
      </FormGroup>
      <FormGroup check>
      </FormGroup>
      <Button className="form__button">Submit</Button>
    </Form>
  );
}

export default Signupform;