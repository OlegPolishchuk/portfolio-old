import React, {useState} from "react";
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import {Main} from "../Main/Main";
import Photo from "../Photo/Photo";
import {ToggleBtn} from "../../common/components/ToggleBtn/ToggleBtn";

const SHOW_NAV_VALUE = '55px';
const HIDE_NAV_VALUE = '-250px';

export const Header = () => {

  const [visible, setVisible] = useState(false)

  const handleToggle = () => {
    setVisible(!visible)
    console.log('toggle')
  }

  const topValue = visible ? SHOW_NAV_VALUE : HIDE_NAV_VALUE;

  const style = {
    top: `${topValue}`
  }

  return (
    <header className={s.header}>
      <aside className={s.aside}>
        <Photo/>
        <ToggleBtn toggle={handleToggle} />
        <Nav style={style}/>
      </aside>
      <Main/>
    </header>
  )
}