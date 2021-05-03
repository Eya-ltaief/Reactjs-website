import React from 'react';
import emailjs from "emailjs-com";
import "./contact.css"
import Footer from '../Footer/Footer';

function Contact() {

  function sendEmail(e) {
    e.preventDefault();
  emailjs.sendForm('service_gmail', 'blog_template', e.target, 'user_Z2h1jhuTrkUvL2LnK26fv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
      <>
        <div className="contact">
          <form onSubmit={sendEmail}>
            <div className="contact-box">
              <div className="leftSide" >
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3193.283473767022!2d10.236576914641777!3d36.83568647340232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd3541c4f22e55%3A0x5b7225d7fdbb3801!2sGOMYCODE!5e0!3m2!1sfr!2stn!4v1620043747956!5m2!1sfr!2stn" width={480} height={430} style={{border: 0}} allowFullScreen  />
              </div>
                <div className="rightSide">
                  <h2>Contact Us</h2>
                    <input type="text" className="field" placeholder="Name" name="name"/>
                    <input type="email" className="field" placeholder="Email Address" name="email"/>
                    <input type="text" className="field" placeholder="Subject" name="subject"/>
                    <textarea className="field" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                    <button type="submit" className="btn" value="Send Message">Send message</button>
                </div>
              </div>
          </form>
        </div>
        <Footer/>
      </>
  );
}

export default Contact;