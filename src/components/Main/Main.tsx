import React from "react";
import s from './Main.module.scss'
import sContainer from '../../common/styles/Container.module.css'

export const Main = () => {
    return (
        <section className={s.mainBlock}>
           <div className={`${sContainer.container} ${s.mainContainer}`}>
               <div className={s.title}>
                   <span>Hi there</span>
                   <h1>I am Jeffrey Aaron</h1>
                   <p>Frontend Developer</p>
               </div>
           </div>
        </section>
    )
}