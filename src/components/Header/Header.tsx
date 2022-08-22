import React, { ReactElement, useState } from 'react';

import backgroundURl from '../../assets/image/header-backgroumd.jpg';
import { ToggleBtn } from '../../common/components/ToggleBtn/ToggleBtn';
import { Main } from '../Main/Main';
import { Nav } from '../Nav/Nav';
import Photo from '../Photo/Photo';

import s from './Header.module.scss';

const SHOW_NAV_VALUE = '55px';
const HIDE_NAV_VALUE = '-250px';

export const Header = (): ReactElement => {
    const [visible, setVisible] = useState(false);

    const backgroundStyle = {
        backgroundImage: `url(${backgroundURl})`,
    };

    const handleToggle = (): void => {
        setVisible(!visible);
    };

    const topValue = visible ? SHOW_NAV_VALUE : HIDE_NAV_VALUE;

    const style = {
        top: `${topValue}`,
    };

    return (
        <header className={s.header} style={backgroundStyle}>
            <aside className={s.aside}>
                <Photo />
                <ToggleBtn toggle={handleToggle} />
                <Nav style={style} callback={handleToggle} />
            </aside>
            <Main />
        </header>
    );
};
