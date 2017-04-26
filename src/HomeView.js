import React from 'react';

import './HomeView.css';

const HomeView = () => (
  <div>
    <div className="video__container">
      <video
        className="video"
        preload="auto"
        muted
        autoPlay
        loop
        poster="./img/background.jpg"
      >
        <source
          src="https://www.videvo.net/app/stream.php?id=5445"
          type="video/mp4"
        />
      </video>
    </div>

    <div className="homeview__content-container">
      <h1 className="homeview__title">Early bird registrations open</h1>
    </div>

  </div>
);

export default HomeView;
