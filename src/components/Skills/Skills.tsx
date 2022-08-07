import React, { ReactElement } from 'react';

import Title from '../../common/components/title/Title';
import { skills } from '../../data/data';

import { Skill } from './Skill/Skill';
import s from './Skills.module.scss';

export const Skills = (): ReactElement => {
    return (
        <section className={s.skillsBlock} id="skills">
            <div className={s.skillsContainer}>
                <Title title="Skills" />
                <div className={s.skills}>
                    {skills.map(({ title, progress, id }) => (
                        <Skill title={title} progress={progress} key={id} />
                    ))}
                </div>
            </div>
        </section>
    );
};
