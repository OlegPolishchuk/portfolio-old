import React from 'react';
import s from './Contacts.module.scss';
import sContainer from '../../common/styles/Container.module.css';
import Form from "../Form/Form";
import Title from "../../common/components/title/Title";

const Contacts = () => {

  const formMarginTop = {'marginTop': '30px'}

  return (
    <section className={s.contactsBlock}>
      <div className={`${sContainer.container} ${s.contacts}`}>
        <Title title={'Contacts'}/>
        <Form style={formMarginTop}/>
        <a href={''} className={s.btnForm}>Send</a>
      </div>
    </section>
  );
};

export default Contacts;