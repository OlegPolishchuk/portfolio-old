import React, { ReactElement } from 'react';

import social from '../../assets/image/social-network-background-with-icons_23-2147497535.jpg';
import todo from '../../assets/image/todolist.jpg';
import Title from '../../common/components/title/Title';

import Project from './Project/Project';
import s from './Projects.module.scss';

const Projects = (): ReactElement => {
    const socialNW = {
        backgroundImage: `url(${social})`,
    };

    const todoList = {
        backgroundImage: `url(${todo})`,
    };

    return (
        <section className={s.projectsBlock} id="projects">
            <div className={s.projects}>
                <Title title="Projects" />
                <div className={s.projectsContainer}>
                    <Project
                        title="Social Network"
                        description="some description"
                        style={socialNW}
                    />
                    <Project
                        title="Todo list"
                        description="some description"
                        style={todoList}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
