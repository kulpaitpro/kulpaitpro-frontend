import React, { useMemo, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Banner from './components/Banner';
import Cms from './components/Cms';
import { Contact } from './components/Contact';
import { useSelector } from 'react-redux';

function App() {

  const loaders = useSelector(({ showLoaderReducer }) => showLoaderReducer.loaders);
  const loading = useMemo(() => loaders && Object.values(loaders).includes(true), [loaders]);

  return (
    <>
      {loading && <div className="loader">
        <p className="loading-content">
        <img src="/img/preloader.gif" />
        </p>
      </div>}
        <>
          <Header />
          <Menu />
          <Banner />
          <Cms />
          <Contact />
          <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
        </>
      
    </>
  );
}

export default App;
