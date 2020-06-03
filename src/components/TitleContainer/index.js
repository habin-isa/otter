import React from 'react';
import OtterIcon from '../../assets/otter.png';

import './styles.css';

const TitleContainer = () => {
  return (
    <div className="container">
      <h1>
        <span className="animation">
          <span className="first">
            <img className="icon" src={OtterIcon} alt="otter-icon" />
          </span>
          <span className="layer">
            <span className="second">Otter</span>
          </span>
        </span>
      </h1>
    </div>
  );
};

export default TitleContainer;
