import React, { ReactElement } from 'react';

import './App.scss';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import Projects from './components/Projects/Projects';
import { Skills } from './components/Skills/Skills';

const App = (): ReactElement => {
    return (
        <div className="App">
            <Header />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    );
};

export default App;
