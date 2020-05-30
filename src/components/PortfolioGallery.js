import React, { useState, memo, useEffect } from 'react';
import axios from 'axios';
import { serverAddress } from '../config';

const PortfolioGallery = () => {

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(`${serverAddress}portfolio-gallery`)
      .then(response => setApiData(response.data));
  }, []);

  console.log(apiData);

  return (
    <div className="container-fluid">
      <div className="row no-gutters">
        {apiData && apiData.map((el) => {
          const{attachments = [], description} = el || {};
          const imageSrc = attachments && attachments[0].thumbnails.large.url;
          return <div className="col-lg-3 col-md-4">
            <div className="portfolio-item wow fadeInUp">
              <a href={imageSrc} className="portfolio-popup">
                <img src={imageSrc} alt />
                <div className="portfolio-overlay">
                  <div className="portfolio-info">
                    <h2 className="wow fadeInUp">{description}</h2>
                  </div>
                </div>
              </a>
            </div>
          </div>

        })}
      </div>
    </div>


  )
}

export default memo(PortfolioGallery);
