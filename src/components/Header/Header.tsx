import React from "react";
import s from './Header.module.scss'
import sContainer from '../../common/styles/Container.module.css'
import {Nav} from "../Nav/Nav";
import {Main} from "../Main/Main";
import Photo from "../Photo/Photo";

export const Header = () => {

  return (
    <header className={s.header}>
      <aside className={s.aside}>
        <Photo/>
        <Nav/>
      </aside>
      <Main/>
    </header>
  )
}