import React from "react";
import s from './Main.module.scss'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
           <div className={s.mainContainer}>
               <div className={s.title}>
                   <span>Hi there</span>
                   <h1>I am Jeffrey Aaron</h1>
                   <p>Frontend Developer</p>
               </div>
           </div>
        </div>
    )
}