import React from 'react';
import sContainer from '../../common/styles/Container.module.css';
import s from './Footer.module.scss';
import Social from "./Social/Social";

const Footer = () => {
    return (
        <footer className={s.footer}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={s.title}>Oleg Polishchuk</h2>
                <div className={s.socialsBlock}>
                    <Social/>
                    <Social/>
                    <Social/>
                    <Social/>
                </div>
                <span className={s.copyright}>2022</span>
            </div>

        </footer>
    );
};

export default Footer;