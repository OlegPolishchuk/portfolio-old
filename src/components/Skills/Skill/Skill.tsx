import React from "react";
import s from './Skill.module.scss'

type SkillPropsType = {
    title: string
    // description: string
    progress: number
}

export const Skill: React.FC<SkillPropsType> = ({title, progress}) => {
    // return (
    //     <div className={s.skillBlock}>
    //         <div className={s.icon}>
    //         </div>
    //         <h3 className={s.skillTitle}>{props.title}</h3>
    //         <span className={s.description}>{props.description}</span>
    //     </div>
    // )

  const progressStyle = {
    width: `${progress}%`,
    borderRadius: progress === 100 ? '5px' : '5px 0 0 5px',
  }
  return (
    <div className={s.skillWrapper}>
      <div className={s.skillTitle}>
        <p>{title}</p>
        <span>{`${progress}%`}</span>
      </div>
      <div className={s.progressBlock}>
        <div className={s.progress} style={progressStyle}></div>
      </div>
    </div>
  )
}