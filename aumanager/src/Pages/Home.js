import React from 'react'
import Homepageinfo from '../Components/Homepageinfo';
import Imageslider from '../Components/Imageslider';
import Navbarcomp from '../Components/Navbarcomp';
import Footer from '../Components/Footer';

export default function Home() {
    return (
        <div>
            <Navbarcomp/>
            <Imageslider/>
            <Homepageinfo/>
            <Footer/>
        </div>
    )
}
