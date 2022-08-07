import React, { ReactElement } from 'react';

import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

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
                        icon={faEnvelope}
                        className="faEnvelope"
                        href={socials.mail}
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
