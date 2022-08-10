import React, { ReactElement } from 'react';

import { Fade } from 'react-awesome-reveal';

import Title from '../../common/components/title/Title';
import Form from '../Form/Form';

import s from './Contacts.module.scss';

const Contacts = (): ReactElement => {
    const formMarginTop = { marginTop: '30px' };

    return (
        <section className={s.contactsBlock} id="contacts">
            <div className={s.contacts}>
                <Title title="Contacts" />
                <Fade direction="up" duration={800} triggerOnce className={s.container}>
                    <Form style={formMarginTop} />
                </Fade>
            </div>
        </section>
    );
};

export default Contacts;
