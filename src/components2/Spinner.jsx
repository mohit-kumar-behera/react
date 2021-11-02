import React from 'react';
import './spinner.css';

const Spinner = (props) => {
  return (
    <div className="spinner">
      <p>{props.message}</p>
    </div>
  );
};

Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
