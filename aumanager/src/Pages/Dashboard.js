import React from 'react'
import Dashboardnavbar from '../Components/Dashboardnavbar';
import Footer from '../Components/Footer';
import Dashboardcontent from '../Components/Dashboardcontent'
import '../Components/dashboardnavbar.css';

export default function Dashboard() {

    return (
        <div>
        <Dashboardnavbar/>
        <div>
            <Dashboardcontent/>
        </div>
        <Footer/>
        </div>
    )
}
