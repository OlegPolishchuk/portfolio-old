import React from 'react';
import sContainer from '../../common/styles/Container.module.css'
import s from './Projects.module.css'
import Project from "./Project/Project";
import Title from "../../common/components/title/Title";

const Projects = () => {
    return (
        <section className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projects}`}>
                {/*<div className={s.title}>*/}
                {/*    <h2>Projects</h2>*/}
                {/*</div>*/}
                <Title title={'Projects'}/>
                <div className={s.projectsContainer}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </section>
    );
};

export default Projects;