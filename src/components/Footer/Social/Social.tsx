import React from 'react';
import s from './Social.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons'



import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

type PropsType = {
  icon: IconDefinition
  className?: string
}

const Social = ({icon, className}: PropsType) => {

  const totalClassName = className ? className : '';
    return (
        <div className={s.social}>
          <a href={'#'} className={`${totalClassName}`}><FontAwesomeIcon icon={icon}/></a>
        </div>
    );
};

export default Social;