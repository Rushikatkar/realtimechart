import React from 'react'
import {Link} from 'react-router-dom';
export default function Navbar(){
   return( 
   <>
   <header>
        <nav>
            <div class="left">
                <h2>LiveCharts</h2>
            </div>
            <div class="right">
                <ul>
                    <li><Link to="#">Home</Link></li>
                    <li><Link to="#">About</Link></li>
                    <li><Link  to="/Login">Login</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </header>
    </>
   )
}