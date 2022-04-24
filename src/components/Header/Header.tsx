import React from "react";
import s from './Header.module.css'
import sContainer from '../../common/styles/Container.module.css'
import {Nav} from "../Nav/Nav";

export const Header = () => {

    return (
        <header className={s.header}>
            <div className={`${sContainer.container} ${s.container}`}>
                <Nav/>
            </div>
        </header>
    )
}