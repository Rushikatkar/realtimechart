import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

export default function Login(){
return(
    <>
    <Navbar/>
    <div className="login-form">
    <form method="post">
        <div>
            
        <h2 className="heading">Sign-in</h2>
        <p className="heading">If you don't have an account please</p>
        <Link to="/Register" className="heading_link">Register</Link>
        <a href="/sap" className="heading_link">Home</a>
        <hr/>
         <label for="email" className="email"> <b>Email:</b> </label>
         <input type="text" placeholder="Enter email" name="email" required/>
         <label for="password" placeholder="........"> <b>password:</b> </label>
         <input type="password" name="password" id="password" required/>
        <input type="submit" value="Sign-in"/>
        
    </div>
    
    </form>
    </div>
    </>
);
};
