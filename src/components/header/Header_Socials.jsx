import React from 'react';
import {TiSocialLinkedinCircular} from 'react-icons/ti';
import {VscGithub} from 'react-icons/vsc';

const Header_Socials = () => {
    return (
        <div>
            <div className="header__socials">
                <a href="https://www.linkedin.com/" target="_blank"><TiSocialLinkedinCircular/></a>
                <a href="https://www.github.com/" target="_blank"><VscGithub/></a>
            </div>
        </div>
    )
}

export default Header_Socials
