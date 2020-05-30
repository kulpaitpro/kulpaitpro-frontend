import React, { useState, memo, useEffect } from 'react';
import axios from 'axios';
import { serverAddress } from '../config';
import PortfolioGallery from './PortfolioGallery'

const Cms = () => {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`${serverAddress}cms`)
      .then(response => setApiData(response.data));
  }, []);

  return (
    <main id="main">
      <div dangerouslySetInnerHTML={{ __html: apiData && apiData[0] && apiData[0].content }}></div>
      <div dangerouslySetInnerHTML={{ __html: apiData && apiData[1] && apiData[1].content }}></div>
      <div dangerouslySetInnerHTML={{ __html: apiData && apiData[2] && apiData[2].content }}></div>
      <section id="portfolio" class="wow fadeInUp">
        <div dangerouslySetInnerHTML={{ __html: apiData && apiData[3] && apiData[3].content }}></div>
        <PortfolioGallery />
      </section>
      <div dangerouslySetInnerHTML={{ __html: apiData && apiData[4] && apiData[4].content }}></div>
      <div dangerouslySetInnerHTML={{ __html: apiData && apiData[5] && apiData[5].content }}></div>
    </main>

  )
}

export default memo(Cms);
