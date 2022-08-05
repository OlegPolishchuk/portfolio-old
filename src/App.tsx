import React from 'react';
import './App.scss';
import {Header} from "./components/Header/Header";
import {Skills} from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
        <Header />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
