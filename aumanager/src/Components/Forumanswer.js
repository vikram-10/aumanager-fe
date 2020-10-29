import React, { useEffect,useState } from 'react'
import './forumanswer.css';
import {useParams,Link} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function Forumanswer() {
    const[item,setitem]=useState([]);
    const[ans,setans]=useState([]);
    let {id}=useParams();
    useEffect(() => {
        const getCardContent=async()=>{
            try{
             let fetcher= await fetch('http://localhost:4000/forumcard',{
                 method: 'GET',
                 mode: 'cors', 
                 cache: 'no-cache',
                 credentials: 'same-origin',
                 headers: {
                     'id':id,
                     'token':localStorage.getItem('token'),
                   'Content-Type': 'application/json'
                 },
                 redirect: 'follow', 
                 referrerPolicy: 'no-referrer'
               });
               let fetcherData=await fetcher.json();
               setitem(fetcherData);
            }
            catch(err){
                console.log(err);
            }
         }
         getCardContent();
    }, []);

    const submitAns=async()=>{
        let data={
            "content":ans
        }
        try{
            let fetcher= await fetch('http://localhost:4000/forumcard',{
                method: 'PUT',
                mode: 'cors', 
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'id':id,
                    'token':localStorage.getItem('token'),
                  'Content-Type': 'application/json'
                },
                body:JSON.stringify(data),
                redirect: 'follow', 
                referrerPolicy: 'no-referrer'
              });
              let fetcherData=await fetcher.json();
              setitem(fetcherData);
              console.log(fetcherData);
           }
           catch(err){
               console.log(err);
           }
    }
    return (
        <div>
            <div className="forumBody">
                {item.map((element,index)=>{
                    return(
<div class="card cardBody">
  <div class="card-body">
                    <h5 class="card-title">{element.name}</h5>
                    <p class="card-text">{element.email}</p>
  </div>
  <ul class="list-group list-group-flush">
      {element.answers==undefined?<p>No answers yet! (Be the first 😉)</p>:element.answers.map((answer,ind)=>{
          return(
<li class="list-group-item"><b>{answer.name} &nbsp;</b>({answer.email}):&nbsp; "<span>{answer.anscontent}</span>" <FavoriteIcon className="likeIcon"/></li>
          )
      })}
  </ul>
  <div class="card-body">
      <form>
  <input type="text" className="forumInput" placeholder="Type Your Answer Here..." onChange={(e)=>setans(e.target.value)} />
<img onClick={submitAns} className="postButton" src="https://cdn2.iconfinder.com/data/icons/button-v1/30/14-512.png"></img>
</form>
    <Link to='/dashboard/forum'>Back</Link>
  </div>
</div>
                    )
                })}
            </div>
        </div>
    )
}
