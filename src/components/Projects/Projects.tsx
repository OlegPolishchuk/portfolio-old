import React from 'react';
import sContainer from '../../common/styles/Container.module.css';
import s from './Projects.module.css';
import Project from './Project/Project';
import Title from '../../common/components/title/Title';
import social from './../../assets/image/social-network-background-with-icons_23-2147497535.jpg'
import todo from './../../assets/image/todolist.jpg'


const Projects = () => {

    const socialNW = {
        backgroundImage: `url(${social})`,
    }

    const todoList = {
        backgroundImage: `url(${todo})`
    }

    return (
        <section className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projects}`}>
                {/*<div className={s.title}>*/}
                {/*    <h2>Projects</h2>*/}
                {/*</div>*/}
                <Title title={'Projects'}/>
                <div className={s.projectsContainer}>
                    <Project title={'Social Network'} description={'some description'} style={socialNW}/>
                    <Project title={'Todo list'} description={'some description'} style={todoList}/>
                </div>
            </div>
        </section>
    );
};

export default Projects;