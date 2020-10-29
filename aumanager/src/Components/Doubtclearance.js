import React, { useEffect,useState,Fragment } from 'react'

export default function Doubtclearance() {
    const[fields,setfields]=useState([]);
    useEffect(() => {
        const getuserType=async ()=>{
            try{
                let fetcher= await fetch('http://localhost:4000/facultyclearance',{
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
                  setfields(fetcherData);
            }
            catch(err){
                  console.log(err);
            }
        }
        getuserType();
      }, []);

const clearDoubt=async(index,id)=>{
    let button=document.getElementById(`${index}btn`);
    button.setAttribute('disabled','true');
    let data={
        "id":id
    }
    try{
        let fetcher= await fetch('http://localhost:4000/facultyclearance',{
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
          let fetcherData=await fetcher.json();
          setfields(fetcherData);
    }
    catch(err){
          console.log(err);
    }
}

    return (
        <div>
            <h1>Doubt Clearance</h1>
            <ul class="list-group">
                {fields.map((element,index)=>{
                    
                    return(
                        <Fragment>
                        {element.status=="Pending"?<li key={index} class="list-group-item">{element.from}<br></br>{element.doubtTitle}<br></br>{element.detailedDoubt}<br></br><button className="btn btn-primary" id={`${index}btn`} onClick={()=>clearDoubt(index,`${element._id}`)}>Cleared</button></li>:null}
                        </Fragment>
                    )
                    //<li key={index} class="list-group-item">{element.from}<br></br>{element.doubtTitle}<br></br>{element.detailedDoubt}<br></br><button className="btn btn-primary" id={`${index}btn`} onClick={()=>clearDoubt(index)}>Cleared</button></li>
                })}
</ul>
        </div>
    )
}
