import React, { CSSProperties, ReactElement, useState } from 'react';

import s from './Form.module.scss';

type PropsType = {
    style?: CSSProperties;
};

const Form = ({ style }: PropsType): ReactElement => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    const handleBtn = (): void => {
        const data = {
            name,
            email,
            text,
        };

        localStorage.setItem('formData', JSON.stringify(data));
        setName('');
        setEmail('');
        setText('');
    };

    const formStyle = style;

    return (
        <form className={s.form} style={formStyle}>
            <input
                className={s.input}
                placeholder="Name"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
            />
            <input
                className={s.input}
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
            />
            <textarea
                className={s.textarea}
                placeholder="How can I help you?"
                value={text}
                onChange={e => setText(e.currentTarget.value)}
            />
            <button type="button" className={s.btnForm} onClick={handleBtn}>
                Send
            </button>
        </form>
    );
};

export default Form;
