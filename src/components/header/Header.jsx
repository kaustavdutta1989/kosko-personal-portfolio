import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/Kosko_Photo.jpg';
import Header_Socials from './Header_Socials';

const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello i'm</h5>
                <h1>Kaustav Dutta</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                <Header_Socials />
                <a className="scroll__down" href="#contact">Scroll Down</a>                

                <div className="me">
                    <img src={ME} alt="ME: Kaustav Dutta" className="me__image"/>
                </div>


                
            </div>
        </header>
    )
}

export default Header
