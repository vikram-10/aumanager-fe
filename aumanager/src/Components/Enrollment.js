import React,{useState,useEffect} from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
export default function Enrollment(props) {
    const [faculties, setfaculties] = useState([]);
    useEffect(() => {
        const getFaculties=async()=>{
            try{
                let fetcher= await fetch('http://localhost:4000/allfaculties',{
                    method: 'GET',
                    mode: 'cors', 
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'token':localStorage.getItem('token'),
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow', 
                    referrerPolicy: 'no-referrer'
                  });
                  let fetcherData=await fetcher.json();
                  console.log(fetcherData)
                  setfaculties(fetcherData);
            }
            catch(err){
                  console.log(err);
            }
        }

        getFaculties();
    }, [])

    const facultyEnroll=async(student,faculty)=>{
        let button=document.getElementById('button');
        button.setAttribute('disabled','true');
        button.innerText="Enrolled!";
        let studentId=student._id;
        let facultyId=faculty._id;
        let data={
            "studentId":studentId,
            "facultyId":facultyId
        }
        try{
            let fetcher= await fetch('http://localhost:4000/assign',{
                method: 'PUT',
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'token':localStorage.getItem('token'),
                  'Content-Type': 'application/json'
                },
                redirect: 'follow', 
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data)
              });
              let fetcherData=await fetcher.json();
              console.log(fetcherData)
        }
        catch(err){
              console.log(err);
        }
    }


    // const [enrollmentstate,setenrollmentstate]=useState("Enroll!");
    return (
        <div>
            {faculties.map((faculty,index)=>{
                let flag=false;
                let a=(props.user._id);
                let b=(faculty.students);
                if(b!=undefined){
                    b.forEach(stud => {
                        if(a==stud){
                            flag=true;
                            // setenrollmentstate("Enrolled!");
                        }
                    });
                }
                return(
                    <Row>
                   <Col>
                    <Card body>
                <CardTitle>{faculty.fname+" "+faculty.lname}</CardTitle>
                      <CardText>{faculty.email}</CardText>
                      {flag?<Button color="secondary" disabled={true}>Enrolled!</Button>:<Button id="button" onClick={()=>facultyEnroll(props.user,faculty)}>Enroll</Button>}
                    </Card>
                  </Col>
                    </Row>
                )
            })}
        </div>
    )
}
