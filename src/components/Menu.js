import React, { memo } from 'react';
import Nav from './Nav';

const Menu = () => {
  
  return (
    <header id="header">
      <div className="container">
        <div id="logo" className="pull-left">
          <h1><a href="#body" className="scrollto">Kulpa<span>ItPro</span></a></h1>
          {/* <a href="#body"><img src={process.env.PUBLIC_URL + "img/logo.png"} alt="logo"/></a> */}
        </div>
        <Nav />
      </div>
    </header>
  )
}

export default memo(Menu);
