import React from 'react'
import About from '../../components/About/About'
import Cards from '../../components/Services/Cards'
import Contact from '../../components/Contact/Contact'
import HeroSection from '../../components/Header/Hero'

const LandingPage = () => {
    return (
        <div>
            <HeroSection/>
            <About/>
            <Cards/>
            <Contact/>
        </div>
    )
}

export default LandingPage
