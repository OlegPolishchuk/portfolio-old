import React, { ReactElement } from 'react';

import {
    faGithub,
    faLinkedinIn,
    faTelegramPlane,
} from '@fortawesome/free-brands-svg-icons';

import { socials } from '../../data/data';

import s from './Footer.module.scss';
import Social from './Social/Social';

const Footer = (): ReactElement => {
    return (
        <footer className={s.footer}>
            <div className={s.container}>
                <div className={s.socialsBlock}>
                    <Social
                        icon={faGithub}
                        className="faGithub"
                        href={socials.faGithub}
                    />
                    <Social
                        icon={faLinkedinIn}
                        className="faLinkedinIn"
                        href={socials.faLinkedinIn}
                    />
                    <Social
                        icon={faTelegramPlane}
                        className="faTelegramPlane"
                        href={socials.telegram}
                    />
                </div>
                <span className={s.copyright}>
                    Copyright © 2022. All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
