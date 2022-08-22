import React, { ReactElement } from 'react';

import { Link } from 'react-scroll';

import s from './Nav.module.scss';

type PropsType = {
    style: React.CSSProperties;
    callback: () => void;
};

const MEDIUM_SCREEN = 752;
const OFFSET_FOR_MEDIUM_SCREEN = -20;

export const Nav = ({ style, callback }: PropsType): ReactElement => {
    const width = window.outerWidth;
    const offset = width > MEDIUM_SCREEN ? 0 : OFFSET_FOR_MEDIUM_SCREEN;

    const linkProps = {
        className: s.link,
        spy: true,
        activeClass: s.activeLink,
        offset,
    };

    return (
        <nav className={s.nav} style={style}>
            <Link to="main" {...linkProps} onClick={callback}>
                Main
            </Link>
            <Link to="skills" {...linkProps} onClick={callback}>
                Skills
            </Link>
            <Link to="projects" {...linkProps} onClick={callback}>
                Projects
            </Link>
            <Link to="contacts" {...linkProps} onClick={callback}>
                Contacts
            </Link>
        </nav>
    );
};
