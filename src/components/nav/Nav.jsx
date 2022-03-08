import React from 'react';
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {AiOutlineTool} from 'react-icons/ai';
import {AiOutlineTeam} from 'react-icons/ai';
import {AiOutlineBook} from 'react-icons/ai';
import {AiOutlineContacts} from 'react-icons/ai';
import {useState} from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');
    return (
        <nav>
            <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#')} >
                <AiOutlineHome className="nav__icon"/></a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
            <a href="#expertise" onClick={() => setActiveNav('#expertise')} className={activeNav === '#expertise' ? 'active' : ''}><AiOutlineTool/></a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><AiOutlineTeam/></a>
            <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === '#education' ? 'active' : ''}><AiOutlineBook/></a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineContacts/></a>
        </nav>
    )
}

export default Nav
