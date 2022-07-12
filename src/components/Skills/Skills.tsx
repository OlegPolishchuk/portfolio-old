import React from "react";
import s from './Skills.module.scss'
import sContainer from '../../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import Title from "../../common/components/title/Title";

export const Skills = () => {
    const descr = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, remaining ' +
        'essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets ' +
        'containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus ' +
        'PageMaker including versions of Lorem Ipsum.'

    return (
        <section className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                {/*<h2 className={s.title}>Skills</h2>*/}
                <Title title={'Skills'} />
                <div className={s.skills}>
                    <Skill title={'JS'} description={'descr qwefqwef'}/>
                    <Skill title={'react'} description={descr}/>
                    <Skill title={'redux'} description={descr}/>
                    <Skill title={'html'} description={descr}/>
                    <Skill title={'css'} description={'descr'}/>
                </div>
            </div>
        </section>
    )
}