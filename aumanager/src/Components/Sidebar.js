import React,{useEffect,useState} from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";
  import './Sidebar.css';

export default function Sidebar(props) {
    useEffect(()=>{
        setrole(props.items);
        setroutes(props.routes)
    },[]);
    const [role,setrole]=useState([]);
    const [routes,setroutes]=useState({});
    let {path,url}=useRouteMatch();
    return(
        <div className="sidebar__frame">
         {role.map((element,index)=>{
             return(
                <Link to={`${url}/${routes[element]}`}>
                 <Breadcrumb key={index} className="sidebar__item">
                     <span className="active breadcrumb-item">{element}</span>
                 </Breadcrumb>
                 </Link>
             )
         })}
        {/* <Breadcrumb className="sidebar__item">
        <Link to={`${url}`}>Home</Link>
      </Breadcrumb>
      <Breadcrumb className="sidebar__item">
       <Link to={`${url}/enrollment`}>Enrollment</Link>
      </Breadcrumb>
            <Breadcrumb className="sidebar__item">
        <Link to={`${url}/todo`}>To Do List</Link>
      </Breadcrumb>
      <Breadcrumb className="sidebar__item">
        <Link to={`${url}/doubts`}>Doubts</Link>
      </Breadcrumb>
      <Breadcrumb className="sidebar__item">
        <Link to={`${url}/forum`}>Forum</Link>
      </Breadcrumb> */}
        </div>
    );
}
