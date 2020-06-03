import React, { useState, memo, useEffect } from 'react';
import axios from 'axios';
import { serverAddress } from '../config';
import { useDispatch } from 'react-redux';

const Banner = () => {

  const [apiData, setApiData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: 'UPDATE_LOADER', payload: {banner: true}});
    axios.get(`${serverAddress}baner`)
      .then(response => {
        setApiData(response.data);
        dispatch({type: 'UPDATE_LOADER', payload: {banner: false}});
      });
  }, [dispatch]);

  return (
    <section id="intro">
      <div className="intro-content">
      <div className="content" dangerouslySetInnerHTML={{__html: apiData && apiData[0] && apiData[0].content}}></div>
        <div>
          <a href="#about" className="btn-get-started scrollto">Zacznij z Nami</a>
          <a href="#portfolio" className="btn-projects scrollto">Nasze projekty</a>
        </div>
      </div>
      <div id="intro-carousel" className="owl-carousel">
        <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/1.jpg")' }} />
        <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/2.jpg")' }} />
        <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/3.jpg")' }} />
        <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/4.jpg")' }} />
        <div className="item" style={{ backgroundImage: 'url("img/intro-carousel/5.jpg")' }} />
      </div>
    </section>
  )
}

export default memo(Banner);
