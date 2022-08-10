import React, { ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';
import ReactTypingEffect from 'react-typing-effect';

import s from './Main.module.scss';

const TYPING_TEXT = ['Frontend Developer', 'JavaScript Developer'];

export const Main = (): ReactElement => {
    return (
        <div className={s.mainBlock} id="main">
            <div className={s.mainContainer}>
                <Fade duration={1500}>
                    <div className={s.title}>
                        <span>Welcome</span>
                        <h1>I am Polishchuk Oleg</h1>
                        <ReactTypingEffect text={TYPING_TEXT} />
                    </div>
                </Fade>
            </div>
        </div>
    );
};
