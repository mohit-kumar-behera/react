import React from 'react';

const CommentDetail = (props) => {
  return (
    <div className="comments">
      <a href="/" className="avatar">
        <img
          style={{ width: '35px', height: '35px' }}
          alt="avatar"
          src={props.img}
        />
      </a>
      <div className="comment">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
