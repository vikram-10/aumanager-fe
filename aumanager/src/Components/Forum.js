import React, { useEffect,useState } from 'react';
import './forum.css';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import { SettingsInputAntenna } from '@material-ui/icons';
import {Link} from 'react-router-dom';
import { useRouteMatch } from 'react-router';

export default function Forum() {
    let {path,url}=useRouteMatch();
    const[user,setuser]=useState({});
    const[input,setinput]=useState("");
    const[items,setitems]=useState([]);
    useEffect(() => {
        const getForumItems=async()=>{
           try{
            let fetcher= await fetch('http://localhost:4000/forum',{
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
              setitems(fetcherData);
           }
           catch(err){
               console.log(err);
           }
        }
        getForumItems();
    }, [])

    const submitForum=async()=>{
        let data={
            "content":input
        }
        try{
            let fetcher= await fetch('http://localhost:4000/forum',{
                method: 'POST',
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
              setitems(fetcherData);
              console.log(fetcherData);
           }
           catch(err){
               console.log(err);
           }
    }
    return (
        <div>
            <h1>Forum</h1>
            <div className="forumBody">
                {items==undefined?<h1 id="emptyForum">NO ITEMS IN FORUM</h1>:items.map((element)=>{
                    return(
                        <div class="card cardWidth">
  <div class="card-body">
                    <h5 class="card-title">{element.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{element.email}</h6>
                    <p class="card-text">{element.content}</p>
                    <Link to={`${url}/${element._id}`}>Answer</Link>
  </div>
</div>
                    )
                })}
            
<form>
<input type="text" className="forumInput" placeholder="Type Your Doubt Here..." onChange={(e)=>setinput(e.target.value)} />
<img onClick={submitForum} className="postButton" src="https://cdn2.iconfinder.com/data/icons/button-v1/30/14-512.png"></img>
</form>
            </div>
        </div>
    )
}
