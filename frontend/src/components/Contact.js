import React from 'react';

export default function Contact(){
    return(
        <>
        <div id="contact">

       
        <section className="fifthsection" >
            <div className="heading-sec2">
                <div id="element">CONTACT</div>
                <span>Feel Free To Reach Out To Me Anytime.</span>
            </div>
            <div className="contform">
                <div className="form">
                    <form method="post">
                          <input type="text"placeholder="Name" id="name"autocomplete="off" name="name"/>
                          <input type="email"placeholder="Email" id="email"autocomplete="off" name="email"/>
                          <textarea id="message"placeholder="Message" cols="30"rows="10" name="massage"></textarea>
                          <button className="btn">Send</button>
                    </form>
                </div>
            </div>
        </section>
        </div>
        </>
    )
}