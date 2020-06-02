import React, {useState, memo, useEffect} from 'react';
import axios from 'axios';
import {serverAddress} from '../config';

const Header = () => {

  const[apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`${serverAddress}header`)
    .then(response => setApiData(response.data));
  }, [])
    
  return (
    <section id="topbar" className="d-none d-lg-block">
      <div className="container clearfix">
        <div className="contact-info float-left">
          {apiData && apiData.map((el, i) => {
            return <span key={i}>
            {el.name === 'contact' ? 
            <>
              <i className="fa fa-envelope-o" />
              <a href="mailto:contact@example.com">{el.src}</a>
            </> : 
            <><i className="fa fa-phone"></i>{el.src}</>}
            </span>
          })}
    </div>
        <div className="social-links float-right">
          <a href="#" className="twitter"><i className="fa fa-twitter" /></a>
          <a href="#" className="facebook"><i className="fa fa-facebook" /></a>
          <a href="#" className="instagram"><i className="fa fa-instagram" /></a>
          <a href="#" className="google-plus"><i className="fa fa-google-plus" /></a>
          <a href="#" className="linkedin"><i className="fa fa-linkedin" /></a>
        </div>
      </div>
    </section>

  )
}

export default memo(Header)
