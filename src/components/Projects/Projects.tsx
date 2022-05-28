import React from 'react';
import sContainer from '../../common/styles/Container.module.css'
import s from './Projects.module.css'
import Project from "./Project/Project";

const Projects = () => {
    return (
        <section className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projects}`}>
                <div>
                    <h2 className={s.title}>Projects</h2>
                </div>
                <div className={s.projectsContainer}>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </section>
    );
};

export default Projects;