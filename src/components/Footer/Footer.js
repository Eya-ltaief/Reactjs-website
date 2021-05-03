import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/about'>who are we?</Link>
                    <Link to='/services'>what we offer?</Link>
                    
                </div>
                <div class='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/'>Support</Link>
                  
                </div>
            </div>
            <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
                <h2>Get started</h2>
                <Link to='/signup'>Sign up</Link>
                <Link to='/signin'>Sign In</Link>
               
            </div>
            <div class='footer-link-items'>
                <h2>Social Media</h2>
                <Link to='/'>Likedin</Link>
                <Link to='/'>Twitter</Link>
            </div>
            </div>
        </div>
        <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              PostIT
              <img src="logo1.png" alt="logo"/>
            </Link>
          </div>
         
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
          </div>
          </section>
          </section>
        </div>
    )
}

export default Footer
