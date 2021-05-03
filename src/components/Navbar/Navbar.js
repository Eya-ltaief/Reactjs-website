import React,{useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import Button  from '../Button/Button';
import "./Navbar.css"
const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true);
    const handleClick = () =>setClick(!click)
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };
    
      useEffect(() => {
        showButton();
      }, []);
    
      window.addEventListener('resize', showButton);
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        PostIT
                        <img src="logo1.png" alt="logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                                Contact us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-in' className='nav-links' onClick={closeMobileMenu}>
                                Sign In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
