import React,{useState, memo, useEffect} from 'react';
import axios from 'axios';
import {serverAddress} from '../config';

export const Menu = () => {

  const[apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`${serverAddress}menu`)
    .then(response => setApiData(response.data));
  }, []);

  return (
    <header id="header">
      <div className="container">
        <div id="logo" className="pull-left">
          <h1><a href="#body" className="scrollto">Kulpa<span>ItPro</span></a></h1>
          {/* <a href="#body"><img src={process.env.PUBLIC_URL + "img/logo.png"} alt="logo"/></a> */}
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
          {apiData && apiData.map((el, i) => {
            return <><li className="menu-active"><a href="#body">{el.name}</a></li></>
          })}
          </ul>
        </nav>
      </div>
    </header>

  )
}
