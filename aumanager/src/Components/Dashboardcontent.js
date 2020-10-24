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
import './dashboardcontent.css';
import { common } from '@material-ui/core/colors';
import Sidebar from './Sidebar';
import Enrollment from './Enrollment';
import Todolist from './Todolist';
import Doubtscomponent from './Doubtscomponent';

export default function Dashboardcontent() {
    const [user, setuser] = useState({});

    useEffect(() => {
        const getuserType=async ()=>{
            try{
                let fetcher= await fetch('http://localhost:4000/dashboard',{
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
                  setuser(fetcherData);
            }
            catch(err){
                  console.log(err);
            }
        }
        getuserType();
      }, []);

      //console.log(user);

    let {path,url}=useRouteMatch();

    
    // Default page will have student Details along with Points
    let studentSidebar=["Home","Enrollment","To-Do-List","Doubts","Forum"];
    let studentRoutes={
        "Home":null,
        "Enrollment":'enrollment',
        "To-Do-List":'todo',
        "Doubts":'doubts',
        "Forum":'forum'
    }
    let adminSidebar=["Home","Approval"];
    let adminRoutes={
        "Home":null,
        "Approval":'admin/approval'
    }
    let facultySidebar=["Home","Assign-Tasks","Forum","Doubts"];
    let facultyRoutes={
        "Home":null,
        "Assign-Tasks":"taskassn",
        "Forum":"forum",
        "Doubts":'doubts'
    }

    // const Sidebar=(props)=>{
    //        setrole(props.items);
    //     return(
    //         <div>
    //          {role.map((element,index)=>{
    //              return(
    //                  <Breadcrumb key={index} className="sidebar__item">
    //                      <Link to={`${url}/${studentRoutes[element]}`}>{element}</Link>
    //                  </Breadcrumb>
    //              )
    //          })}
    //         {/* <Breadcrumb className="sidebar__item">
    //         <Link to={`${url}`}>Home</Link>
    //       </Breadcrumb>
    //       <Breadcrumb className="sidebar__item">
    //        <Link to={`${url}/enrollment`}>Enrollment</Link>
    //       </Breadcrumb>
    //             <Breadcrumb className="sidebar__item">
    //         <Link to={`${url}/todo`}>To Do List</Link>
    //       </Breadcrumb>
    //       <Breadcrumb className="sidebar__item">
    //         <Link to={`${url}/doubts`}>Doubts</Link>
    //       </Breadcrumb>
    //       <Breadcrumb className="sidebar__item">
    //         <Link to={`${url}/forum`}>Forum</Link>
    //       </Breadcrumb> */}
    //         </div>
    //     );
    // }


    return (
        <div className="dashboard__items">
            <div className="sidebar">
                {user.role=="student"?<Sidebar items={studentSidebar} routes={studentRoutes}/>:null}
                {user.role=="faculty"?<Sidebar items={facultySidebar} routes={facultyRoutes}/>:null}
                {user.role=="admin"?<Sidebar items={adminSidebar} routes={adminRoutes}/>:null}
            </div>
            <div className="dashboardContent">
            <Switch>
                <Route path={`${path}/admin/approval`}>
                <h1>Approval</h1>
                </Route>
                <Route path={`${path}/taskassn`}>
                 <h1>Assign Tasks</h1>
                </Route>
                <Route path={`${path}/todo`}>
                 <Todolist/>
                </Route>
                <Route path={`${path}/enrollment`}>
                 <Enrollment user={user}/>
                </Route>
                <Route path={`${path}/doubts`}>
                 <Doubtscomponent/>
                </Route>
                <Route path={`${path}/forum`}>
                 <h1>Forum</h1>
                </Route>
                <Route path={path}>
                   <h1>Default page</h1>
                </Route>
            </Switch>
            </div>
        </div>
    )
}
