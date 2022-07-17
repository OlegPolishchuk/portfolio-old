import React from 'react';
import s from './Social.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from '@fortawesome/free-brands-svg-icons'



import {IconDefinition} from "@fortawesome/fontawesome-svg-core";

type PropsType = {
  icon: IconDefinition
}

const Social = ({icon}: PropsType) => {
    return (
        <div className={s.social}>
          <a href={'#'} ><FontAwesomeIcon icon={icon}/></a>
        </div>
    );
};

export default Social;