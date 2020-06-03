import React, { useState, memo, useEffect } from 'react'
import axios from 'axios';
import { serverAddress } from '../config';
import { useDispatch } from 'react-redux';

const Nav = (props) => {

  const { area = '' } = props;
  const [apiData, setApiData] = useState([]);
  const [activeLink, setActiveLink] = useState(0);
  const dispatch = useDispatch();

  const handleActiveLink = (i) => {
    setActiveLink(i);
  }

  useEffect(() => {
    dispatch({type: 'UPDATE_LOADER', payload: {header: false}});
    axios.get(`${serverAddress}menu`)
      .then(response => {
        setApiData(response.data);
        dispatch({type: 'UPDATE_LOADER', payload: {header: false}});
      });
  }, [dispatch]);

  return (
    <nav id={area === 'mobile' ? "mobile-nav" : "nav-menu-container"}>
          <ul className={area === 'mobile' ? "" : "nav-menu"}>
            {apiData && apiData.map((el, i) => {
              return <React.Fragment key={i}>
                <li 
                className={activeLink === i ? 'menu-active' : undefined}
                onClick={() => handleActiveLink(i)}
                >
                  <a href={`#${el.slug}`}>{el.name}
                  </a>
                </li>
              </React.Fragment>
            })}
          </ul>
        </nav>
  )
}

export default Nav;
