import React from 'react';

import './MainContent.css';

const MainContent = ({children}) => (
  <div className="main-content__container">
    {children}
  </div>
);

export default MainContent;
