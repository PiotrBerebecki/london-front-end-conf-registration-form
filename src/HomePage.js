import React from 'react';

import './HomePage.css';

const HomePage = () => (
  <div>
    <div className="video__container">
      <video
        className="video"
        preload="auto"
        muted
        autoPlay
        loop
        poster="https://react.amsterdam/img/dummy_bg.jpg"
      >
        <source
          src="https://react.amsterdam/video/video.webm"
          type="video/webm"
        />
        <source
          src="https://react.amsterdam/video/video.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <div className="homepage__content-container">
      <h1 className="homepage__title">London Front-End Conf</h1>
    </div>

  </div>
);

export default HomePage;
