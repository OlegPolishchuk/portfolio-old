import React, { ReactElement, useState } from 'react';

import s from './ToggleBtn.module.scss';

type ToggleBtnPropsType = {
    toggle: () => void;
};

export const ToggleBtn: React.FC<ToggleBtnPropsType> = ({ toggle }): ReactElement => {
    const [wrapped, setWrapped] = useState<boolean>(false);

    const onClickHandler = (): void => {
        setWrapped(wrapped => !wrapped);
        toggle();
    };

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className={s.menu_bar} onClick={onClickHandler}>
            <div className={`${s.bar} ${s.bar1} ${wrapped ? s.change : ''}`}> </div>
            <div className={`${s.bar} ${s.bar2} ${wrapped ? s.change : ''}`}> </div>
            <div className={`${s.bar} ${s.bar3} ${wrapped ? s.change : ''}`}> </div>
        </div>
    );
};
