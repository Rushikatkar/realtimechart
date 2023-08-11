import React from 'react';
import Navbar from './Navbar'
import Maincomponent from './Maincomponent';
import Contact from './Contact';
import Footer from './Footer';
import Charts from './Charts';
import Inputchart from './Inputchart';
import Sendrealchart from './Sendrealchart'
// import Constants from './Constants';
// import Try from './Try'

export default function Main(){
    return(
        <>
        <Navbar/>
        <Maincomponent/> 
        <Inputchart/>
        {/* <Constants/> */}
        <Sendrealchart/>
        <Charts/>
        <Contact/>
        <Footer/>
        {/* <Try/> */}
        </>
    );
}