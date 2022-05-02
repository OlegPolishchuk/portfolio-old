import React from 'react';
import s from './Form.module.css'

const Form = () => {
    return (
        <form className={s.form}>
            <input className={s.input}/>
            <input className={s.input}/>
            <textarea className={s.textarea}/>
        </form>
    );
};

export default Form;