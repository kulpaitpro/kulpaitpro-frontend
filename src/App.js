import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Menu} from './components/Menu';
import {Banner} from './components/Banner';
import {Cms} from './components/Cms';
import {Contact} from './components/Contact';


function App() {
  return (
    <>
    <Header />
    <Menu />
    <Banner />
    <Cms />
    <Contact />   
    </>
  );
}

export default App;
