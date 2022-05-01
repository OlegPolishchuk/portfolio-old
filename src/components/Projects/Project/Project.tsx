import React from 'react';
import s from './Project.module.css'

const Project = () => {
    return (
        <div className={s.projectContainer}>
            <div className={s.imgContainer}>
                <a href={''} className={s.projectLink}>Project</a>
            </div>
            <div className={s.projectDescription}>
                <h3 className={s.title}>Project name</h3>
                <span className={s.description}>description</span>
            </div>
        </div>
    );
};

export default Project;