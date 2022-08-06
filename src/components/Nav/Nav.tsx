import React from "react";
import s from './Nav.module.scss'
import { Link } from 'react-scroll';

type PropsType = {
  style: React.CSSProperties
}

const MEDIUM_SCREEN = 752;

export const Nav = ({style}: PropsType) => {

    const height = window.innerHeight;
    const offset = height > MEDIUM_SCREEN ? 0 : -20;


    const linkProps = {
        className: s.link,
        spy: true,
        activeClass: s.activeLink,
        offset,
    }

    return (
        <nav className={s.nav} style={style}>
            <Link to='main' {...linkProps}>Main</Link>
            <Link to='skills' {...linkProps}>Skills</Link>
            <Link to='projects' {...linkProps}>Projects</Link>
            <Link to='contacts' {...linkProps}>Contacts</Link>
        </nav>
    )
}