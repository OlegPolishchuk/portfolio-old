import React, { ReactElement } from 'react';

import s from './Title.module.scss';

type PropsType = {
    title: string;
};

const Title: React.FC<PropsType> = ({ title }): ReactElement => {
    return (
        <div className={s.title}>
            <h2>{title}</h2>
        </div>
    );
};

export default Title;
