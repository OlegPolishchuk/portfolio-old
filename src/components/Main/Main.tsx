import React from "react";
import s from './Main.module.scss'
import ReactTypingEffect from "react-typing-effect";

const TYPING_TEXT = ['Frontend Developer', 'JavaScript Developer']

export const Main = () => {
    return (
        <div className={s.mainBlock} id='main'>
           <div className={s.mainContainer}>
               <div className={s.title}>
                   <span>Welcome</span>
                   <h1>I am Polishchuk Oleg</h1>
                   <ReactTypingEffect text={TYPING_TEXT} />
               </div>
           </div>
        </div>
    )
}