import React from 'react'
import Navbarcomp from '../Components/Navbarcomp';
import Signupform from '../Components/Signupform';
import './signup.css';
import Footer from '../Components/Footer';

export default function Signup() {
    return (
        <div>
            <Navbarcomp/>
            <div className="container">
                <div className="container">
                <Signupform/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
