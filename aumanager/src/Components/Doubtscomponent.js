import React,{useEffect,useState} from 'react'
import './doubtscomponent.css'

export default function Doubtscomponent() {
        const[doubts,setdoubts]=useState([]);
        const[to,setto]=useState("");
        const[doubtTitle,setdoubtTitle]=useState("");
        const[doubtContent,setDoubtcontent]=useState("");
        useEffect(() => {
                const getDoubtsandFac=async ()=>{
                        try{
                            let fetcher= await fetch('http://localhost:4000/studentdoubts',{
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
                              setdoubts(fetcherData);
                        }
                        catch(err){
                              console.log(err);
                        }
                    }
                    getDoubtsandFac();
        }, []);

 //FUNCTION FOR SENDING POST REQUEST TO THE SERVER FOR THE DATA.
        const sendDoubt=async(value)=>{
               let data={
                       "to":value,
                       "doubtTitle":doubtTitle,
                       "detailedDoubt":doubtContent,
                       "status":"Pending"
               }
               try{
                let fetcher= await fetch('http://localhost:4000/studentdoubts',{
                    method: 'POST',
                    mode: 'cors', 
                    cache: 'no-cache',
                    credentials: 'same-origin',
                    headers: {
                        'token':localStorage.getItem('token'),
                      'Content-Type': 'application/json'
                    },
                    redirect: 'follow', 
                    body:JSON.stringify(data),
                    referrerPolicy: 'no-referrer'
                  });
                  let fetcherData=await fetcher.json();
                  console.log(fetcherData);
            }
            catch(err){
                  console.log(err);
            }
            alert("Doubt Has been sent!")
        }

        console.log(to);

    return (
        <div>
            <h1>Doubts thread</h1>
            <div className="doubtsList">
               <div className="row heading">
                  <div className="col-3">
                          <h1>To</h1>
                  </div>
                  <div className="col-3">
                          <h1>Title</h1>
                  </div>
                  <div className="col-3">
                          <h1>Doubt</h1>
                  </div>
                  <div className="col-3">
                          <h1>Status</h1>
                  </div>
               </div>
               {
                  doubts.map((element)=>{
                          console.log(element);
                          return(
                                element.studentDoubts.map((studentdbts)=>{
                                        return(
                                              <div className="row doubtItems">
                                              <div className="col-3">
                                        <p className="content_size">{studentdbts.to}</p>
                                              </div>
                                              <div className="col-3">
                                                      <p className="content_size">{studentdbts.doubtTitle}</p>
                                              </div>
                                              <div className="col-3">
                                                      <p className="content_size">{studentdbts.detailedDoubt}</p>
                                              </div>
                                              <div className="col-3">
                                                      <p className="content_size">{studentdbts.status}</p>
                                              </div>
                                           </div>
                                        )
                                })

                          )
                  })
               }
               
            </div>
            <div className="sendForm">
                 <form onSubmit={sendDoubt}>
                     <label for="sendTo">To: &nbsp; </label>
                     <select name="sendTo" value={to} onChange={(e)=>{setto(e.target.value)}}>                                     
                     {/* How to Control state of Dropdown component? The dropdown is not getting controlles */}
                     <option selected disabled>Select a Choice</option>
                             {doubts.map(element=>{
                                     return(
                                        element.facultyEmails.map((facEmail,index)=>{
                                                //setoptionValue(facEmail);
                                                return(
                                                <option key={index} value={`${facEmail}`}>{facEmail}</option>
                                                )
                                           }));
                             })}
                     </select>
                     <br/>
                     <label for="doubtTitle">Title: &nbsp;</label>
                     <input type="textarea" placeholder="Doubt Title" onChange={(e)=>{setdoubtTitle(e.target.value)}}/>
                      <br/>
                     <label for="doubtContent">Doubt: &nbsp;</label>
                     <input type="textarea" placeholder="Detailed Doubt" onChange={(e)=>{setDoubtcontent(e.target.value)}}/>
                     <button className="btn btn-primary" onClick={(e)=>{e.preventDefault();sendDoubt(to)}}>Submit Doubt</button>
                 </form>
            </div>
        </div>
    );
}
