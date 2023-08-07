import React from 'react';
import { Link } from 'react-router-dom';

export default function Contact(){
    return(
        <>
        <footer>
            <div className="foot">
                <h1>LiveCharts</h1>
            </div>
            <div className="footlog">
                <div className="disp-grid">
                    <div className="firstgrid">
                        <div className="txtin"><img src="https://cdn-icons-png.flaticon.com/128/6373/6373279.png" alt=""/></div>
                        <div className="txtout">
                            <h3>LOCATION</h3>
                            <h4>Pune,India</h4>
                        </div>
    
                    </div>
                    <div className="firstgrid">
                        <div className="txtin"><img src="https://cdn-icons-png.flaticon.com/128/6766/6766326.png" alt=""/></div>
                        <div className="txtout">
                            <h3>CONTACT</h3>
                            <h4>+91-9146979348</h4>
                        </div>
                    </div>
                    <div className="firstgrid">
                        <div className="txtin"><img src="https://cdn-icons-png.flaticon.com/128/6324/6324437.png" alt=""/></div>
                        <div className="txtout">
                            <h3>Email</h3>
                            <h4>katkarrushikesh2002@gmail.com</h4>
                        </div>
                    </div>
                </div>
                <Link to="#" target="_blank"><img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt=""/></Link>
                <Link to="#"><img src="https://cdn-icons-png.flaticon.com/512/3670/3670211.png" alt=""/></Link>
            </div>
        </footer>
        </>
    )
}