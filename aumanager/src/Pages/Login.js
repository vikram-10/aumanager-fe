import React from 'react'
import { Route } from 'react-router'
import Loginform from '../Components/Loginform'
import Navbarcomp from '../Components/Navbarcomp'
import Footer from '../Components/Footer';

export default function Login() {

    return (
        <div>
            <Navbarcomp/>
            <Loginform/>
            <Footer/>
        </div>
    )
}
