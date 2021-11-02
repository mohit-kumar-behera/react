import React from 'react';
import ButtonDecide from './ButtonDecide';

const ApprovalCard = (props) => {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">{props.children}</div>
        <div className="extra content">
          <ButtonDecide />
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
