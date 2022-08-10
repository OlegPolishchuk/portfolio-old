import React, { ReactElement } from 'react';

import Tilt from 'react-parallax-tilt';

import photo from '../../assets/image/log.jpg';

import s from './Photo.module.scss';

const Photo = (): ReactElement => {
    const photoStyle = {
        backgroundImage: `url(${photo})`,
    };

    return (
        <div className={s.photoContainer}>
            <Tilt tiltAxis="y">
                <div className={s.photo} style={photoStyle} />
            </Tilt>

            <h3 className={s.title}>Polishchuk Oleg</h3>
        </div>
    );
};

export default Photo;
