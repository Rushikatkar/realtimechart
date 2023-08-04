import React from 'react'
import Navbar from './Navbar'

export default function Register(){
    return(
        <>
        
     <Navbar/>   
    <div className="login-form">
        <form action="/signup" method="post">
            <h2 class="header">Sign-up</h2>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" placeholder="Name" required/>
           
            <br/>

            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" required/>
            
            <br/>
            
            <label for="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Password" required/>
            
            <br/>
            <input type="submit" value="Confirm"/>

        </form>
    </div>
        </>
    )
}