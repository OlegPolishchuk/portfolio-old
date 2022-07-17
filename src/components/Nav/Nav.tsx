import React from "react";
import s from './Nav.module.scss'

type PropsType = {
  style: React.CSSProperties
}

export const Nav = ({style}: PropsType) => {

    return (
        <nav className={s.nav} style={style}>
            <a href="#">Main</a>
            <a href="#">Skills</a>
            <a href="#">Projects</a>
            <a href="#">Contacts</a>
        </nav>
    )
}