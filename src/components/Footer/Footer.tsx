import React from 'react';
import s from './Footer.module.scss';
import Social from "./Social/Social";
import {faGithub, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";


const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.socialsBlock}>
                    <Social icon={faGithub} className={'faGithub'}/>
                    <Social icon={faLinkedinIn} className={'faLinkedinIn'}/>
                    <Social icon={faEnvelope} className={'faEnvelope'}/>

                </div>
                <span className={s.copyright}>Copyright © 2022. All Rights Reserved.</span>
            </div>

        </footer>
    );
};

export default Footer;