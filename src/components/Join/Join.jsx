import React from "react";
import "./Join.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser'

const Join = () => {
    const form =useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_zoj6ff6', 'template_u4mn9x4', form.current, 'czUz3nZGWClgv9AZ2')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your Email"/>
            <button className="btn" style={{background:"var(--orange)",color:"white",borderRadius:"100%",padding:"0.8rem",cursor:"pointer"}}>Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
