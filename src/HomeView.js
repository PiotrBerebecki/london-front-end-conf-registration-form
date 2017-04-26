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
        poster="https://react.amsterdam/img/dummy_bg.jpg"
      >
        <source
          src="https://www.videvo.net/app/stream.php?id=4731"
          type="video/webm"
        />
        {/* <source
          src="https://react.amsterdam/video/video.mp4"
          type="video/mp4"
        /> */}
        {/* <source
          src="https://www.videvo.net/app/stream.php?id=4731"
          type="video/mp4"
        /> */}
      </video>
    </div>

    <div className="homeview__content-container">
      <h1 className="homeview__title">London Front-End Conf</h1>
    </div>

  </div>
);

export default HomeView;
