import React from 'react'
import"./About.css"
const About = () => {
    return (
        <div>
            <section className="about-section " id="about">
                <div class="grid">
                    <div class="left">
                        <img src="team-work.jpg" alt=""/>
                    </div>
                    <div class="right">
                        <h2>About us</h2>
                        <p className="about__text">We have developped this application
                        for you, if you are searching for a place where you can search for books, save them for later read, post something
                        and interact with other's and even take notes ! this is the right place for you ! we provide you a high scalable platform
                        enjoy your surf !</p>           
                        <a href="/contact" className="btn">Contact Us</a>
                    </div>                                   
                </div>
            </section>
        </div>
    )
}

export default About
