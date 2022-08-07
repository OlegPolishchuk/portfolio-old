import React, { ReactElement } from 'react';

import s from './Project.module.scss';

type PropsType = {
    title: string;
    description: string;
    style?: React.CSSProperties;
};

const Project: React.FC<PropsType> = ({ title, description, style }): ReactElement => {
    const finalStyle = style || {};

    return (
        <div className={s.projectContainer}>
            <div className={s.imgContainer} style={finalStyle}>
                <button type="button" className={s.projectLink}>
                    Project
                </button>
            </div>
            <div className={s.projectDescription}>
                <h3 className={s.title}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    );
};

export default Project;
