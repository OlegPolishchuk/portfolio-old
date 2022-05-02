import React from 'react';
import s from './Contacts.module.css'
import sContainer from '../../common/styles/Container.module.css'
import Form from "../Form/Form";

const Contacts = () => {
    return (
        <section className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contacts}`}>
                <h2 className={s.title}>Contacts</h2>
                <Form/>
                <a href={''} className={s.btnForm}>Send</a>
            </div>
        </section>
    );
};

export default Contacts;