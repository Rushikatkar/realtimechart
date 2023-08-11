import React from 'react';
import img from '../images/chart.png';
import { useTypewriter, Cursor } from "react-simple-typewriter";



export default function Maincomponent(){

    const [text]= useTypewriter({
        words:['beautiful.','engaging.', 'interactive.','stand out.','collaborative.'],
        loop: {},
    });
    


    return(
        <>
        <div className="main">
            <div className="leftmain">
             <span className="purple">Create anything.</span>
             <br />
             <span className="purple">Make it <span >{text}</span><Cursor/> </span>
             <br />
             <span>
                <button>
                   Lets Create!
                </button>
             </span>
                
            </div>
            <div className="rightmain">
                <img src={img} alt="" />
            </div>
        </div>
        </>
    );
};