import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ items, dataFrom }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (idx) => setActiveIndex(idx);

  const renderItems = items.map((item, index) => {
    const activeState = activeIndex === index ? 'active' : '';

    return (
      <React.Fragment key={index}>
        <div
          className={`card ${activeState}`}
          onClick={() => handleClick(index)}
        >
          <div className="title">
            <h4>{item.title}</h4>
          </div>
          <div className="content">
            {dataFrom === 'searchApp' ? (
              <p dangerouslySetInnerHTML={{ __html: item.snippet }}></p>
            ) : (
              <p>{item.content}</p>
            )}
          </div>
        </div>
      </React.Fragment>
    );
  });

  return <div className="accordion">{renderItems}</div>;
};

export default Accordion;
