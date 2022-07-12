import React, {CSSProperties} from 'react';
import s from './Form.module.scss'

type PropsType = {
  style?: CSSProperties
}

const Form = ({style}: PropsType) => {
  const formStyle = style;

    return (
        <form className={s.form} style={formStyle}>
            <input className={s.input}/>
            <input className={s.input}/>
            <textarea className={s.textarea}/>
        </form>
    );
};

export default Form;