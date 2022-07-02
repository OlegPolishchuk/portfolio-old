import React from 'react';
import s from './Photo.module.scss';
import photo from '../../assets/image/log.jpg'

const Photo = () => {

  const photoStyle = {
    backgroundImage: `url(${photo})`
  }

  return (
    <div className={s.photoContainer}>
      <a href={'#'}>
        <div className={s.photo} style={photoStyle}/>
        <h2 className={s.title}>Polishchuk Oleg</h2>
      </a>
    </div>
  );
};

export default Photo;