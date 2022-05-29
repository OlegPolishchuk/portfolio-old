import React from 'react';
import s from './Project.module.css'

type PropsType = {
    title: string,
    description: string,
    style?: React.CSSProperties
}

const Project: React.FC<PropsType> = ({title, description, style}) => {

    const finalStyle =  style ? style : {}

    return (
        <div className={s.projectContainer}>
            <div className={s.imgContainer} style={finalStyle}>
                <a href={''} className={s.projectLink}>Project</a>
            </div>
            <div className={s.projectDescription}>
                <h3 className={s.title}>{title}</h3>
                <span className={s.description}>{description}</span>
            </div>
        </div>
    );
};

export default Project;