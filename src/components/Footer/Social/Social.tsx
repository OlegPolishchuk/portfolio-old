import React, { ReactElement } from 'react';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import s from './Social.module.scss';

type PropsType = {
    icon: IconDefinition;
    className?: string;
    href: string;
};

const Social = ({ icon, className, href }: PropsType): ReactElement => {
    const totalClassName = className || '';

    return (
        <div className={s.social}>
            <a href={href} className={`${totalClassName}`}>
                <FontAwesomeIcon icon={icon} />
            </a>
        </div>
    );
};

export default Social;
