import React from 'react';
import OtterIcon from '../../assets/otter.png';

import './styles.css';

const PageTitle = () => {
  return (
    <div className="container">
      <h1>
        <span className="animation">
          <span className="first">
            <img className="icon" src={OtterIcon} />
          </span>
          <span className="layer">
            <span className="second">Otter</span>
          </span>
        </span>
      </h1>
    </div>
  );
};

export default PageTitle;
