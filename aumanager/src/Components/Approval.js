import { Link } from '@material-ui/core';
import React,{useEffect,useState} from 'react'

export default function Approval() {
    const[applicants,setapplicants]=useState([]);
    useEffect(() => {
        const getAllApplicants=async ()=>{
            try{
                let fetcher= await fetch('http://localhost:4000/applicants',{
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
                  setapplicants(fetcherData);
            }
            catch(err){
                  console.log(err);
            }
        }
        getAllApplicants();
    }, []);

    const approvalStatus=async (email,status)=>{
        let button1=document.getElementById('but1')
        let button2=document.getElementById('but2')
        button1.setAttribute('disabled',true);
        button2.setAttribute('disabled',true);
        let data={
            "email":email,
            "status":status
        }
        try{
            let fetcher= await fetch('http://localhost:4000/applicants',{
                method: 'PUT',
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'token':localStorage.getItem('token'),
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
                redirect: 'follow', 
                referrerPolicy: 'no-referrer'
              });
        }
        catch(err){
              console.log(err);
        }
    }
    return (
        <div>
            <h1>Pending Approvals</h1>
            {applicants.length==0?<h3>--No more applicants--</h3>:applicants.map((element,index)=>{
                return(
                    <div class="card">
                    <h5 class="card-header">{element.role.toUpperCase()}</h5>
                    <div class="card-body">
                    <h5 class="card-title">{element.fname+" "+element.lname}</h5>
                    <p class="card-text">{element.email}<br></br>{element.college}<br></br></p>
                    <button className="btn btn-primary" id="but1" onClick={()=>approvalStatus(element.email,"approved")}>Approve</button>
                    <button className="btn btn-danger" id="but2" onClick={()=>approvalStatus(element.email,"rejected")}>Reject</button>
                    </div>
                    </div>
                )
            })}
        </div>
    )
}
