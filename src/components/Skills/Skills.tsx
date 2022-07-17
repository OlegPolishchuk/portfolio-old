import React from "react";
import s from './Skills.module.scss'
import sContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import Title from "../../common/components/title/Title";

export const Skills = () => {
    const descr = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s'

    return (
        <section className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title title={'Skills'} />
                <div className={s.skills}>
                    <Skill title={'JS'} progress={90}/>
                    <Skill title={'react'} progress={80}/>
                    <Skill title={'redux'} progress={70}/>
                    <Skill title={'html'} progress={90}/>
                    <Skill title={'css'} progress={100}/>
                </div>
            </div>
        </section>
    )
}