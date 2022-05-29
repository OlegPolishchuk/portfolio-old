import React from 'react';
import s from './Title.module.css'


type PropsType = {
    title: string
}

const Title: React.FC<PropsType> = ({title}) => {
    return (
        <div className={s.title}>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;