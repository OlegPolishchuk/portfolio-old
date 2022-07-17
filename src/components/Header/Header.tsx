import React from "react";
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import {Main} from "../Main/Main";
import Photo from "../Photo/Photo";
import {ToggleBtn} from "../../common/components/ToggleBtn/ToggleBtn";

export const Header = () => {

  const handleToggle = () => {
    console.log('toggle')
  }

  return (
    <header className={s.header}>
      <aside className={s.aside}>
        <Photo/>
        <ToggleBtn toggle={handleToggle} />
        <Nav/>
      </aside>
      <Main/>
    </header>
  )
}