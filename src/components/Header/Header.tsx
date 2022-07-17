import React, {useState} from "react";
import s from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import {Main} from "../Main/Main";
import Photo from "../Photo/Photo";
import {ToggleBtn} from "../../common/components/ToggleBtn/ToggleBtn";

export const Header = () => {

  const [visible, setVisible] = useState(false)

  const handleToggle = () => {
    setVisible(!visible)
    console.log('toggle')
  }

  const topValue = visible ? '70px' : '-200px';

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