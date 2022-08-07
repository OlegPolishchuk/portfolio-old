import React, { ReactElement } from 'react';

import s from './Skill.module.scss';

type SkillPropsType = {
    title: string;
    // description: string
    progress: number;
};

const MAX_PROGRESS = 100;

export const Skill: React.FC<SkillPropsType> = ({ title, progress }): ReactElement => {
    const progressStyle = {
        width: `${progress}%`,
        borderRadius: progress === MAX_PROGRESS ? '5px' : '5px 0 0 5px',
    };

    return (
        <div className={s.skillWrapper}>
            <div className={s.skillTitle}>
                <p>{title}</p>
                <span>{`${progress}%`}</span>
            </div>
            <div className={s.progressBlock}>
                <div className={s.progress} style={progressStyle} />
            </div>
        </div>
    );
};
