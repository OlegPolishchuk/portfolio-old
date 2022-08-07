import React, { ReactElement } from 'react';

import Title from '../../common/components/title/Title';
import Form from '../Form/Form';

import s from './Contacts.module.scss';

const Contacts = (): ReactElement => {
    const formMarginTop = { marginTop: '30px' };

    return (
        <section className={s.contactsBlock} id="contacts">
            <div className={s.contacts}>
                <Title title="Contacts" />
                <Form style={formMarginTop} />
                <button type="button" className={s.btnForm}>
                    Send
                </button>
            </div>
        </section>
    );
};

export default Contacts;
