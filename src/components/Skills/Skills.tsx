import React, { ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import Title from '../../common/components/title/Title';
import { skills } from '../../data/data';

import { Skill } from './Skill/Skill';
import s from './Skills.module.scss';

export const Skills = (): ReactElement => {
    return (
        <section className={s.skillsBlock} id="skills">
            <Fade direction="up" duration={700} triggerOnce>
                <div className={s.skillsContainer}>
                    <Title title="Skills" />
                    <div className={s.skills}>
                        {skills.map(({ title, progress, id }) => (
                            <Skill title={title} progress={progress} key={id} />
                        ))}
                    </div>
                </div>
            </Fade>
        </section>
    );
};
