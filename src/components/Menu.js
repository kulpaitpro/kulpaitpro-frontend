import React, { useState, memo, useEffect } from 'react';
import axios from 'axios';
import { serverAddress } from '../config';

const Menu = () => {
  //  TPDO: add slugs to menu
  const [apiData, setApiData] = useState([]);
  const [activeLink, setActiveLink] = useState(0);;

  const handleActiveLink = (i) => {
    setActiveLink(i);
  }

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
              return <React.Fragment key={i}>
                <li 
                className={activeLink === i ? 'menu-active' : undefined}
                onClick={() => handleActiveLink(i)}
                >
                  <a href="#body">{el.name}
                  </a>
                </li>
              </React.Fragment>
            })}
          </ul>
        </nav>
      </div>
    </header>

  )
}

export default memo(Menu);
