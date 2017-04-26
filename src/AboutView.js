import React from 'react';
import Paper from 'material-ui/Paper';

import './AboutView.css';

const AboutView = () => (
  <div className="about-view__container">
    <Paper className="about__container" zDepth={1}>
      <h2 className="about__title">
        About Front-End Conf
      </h2>
      <p className="about__msg">
        Front-End Conf is one of Europe’s most established annual conferences for professional front-end developers to meet, learn and get inspired.
      </p>
      <p className="about__msg">
        See how the pros build the future face of the web and get motivated from a wide spectrum of front-end talks beyond the ordinary.
      </p>
    </Paper>
  </div>
);

export default AboutView;
