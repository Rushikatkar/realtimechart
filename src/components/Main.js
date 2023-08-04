import React from 'react';
import Navbar from './Navbar'
import Maincomponent from './Maincomponent';
import Contact from './Contact';
import Footer from './Footer';
import Charts from './Charts';

export default function Main(){
    return(
        <>
        <Navbar/>
        <Maincomponent/>
        <Charts/>
        <Contact/>
        <Footer/>
        </>
    );
}