import React from 'react';
import s from './Photo.module.scss';
import photo from '../../assets/image/log.jpg';
import Tilt from 'react-parallax-tilt';

const Photo = () => {

    const photoStyle = {
        backgroundImage: `url(${photo})`
    }

    return (
        <div className={s.photoContainer}>
            <a href={'#'}>
                <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.8}
                    glareColor="#ffffff"
                    glarePosition="bottom"
                    glareBorderRadius="20px"
                    tiltAxis='y'
                >
                    <div className={s.photo} style={photoStyle}/>
                </Tilt>
                <h2 className={s.title}>Polishchuk Oleg</h2>
            </a>
        </div>
    );
};

export default Photo;