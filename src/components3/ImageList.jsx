import React from 'react';
import Image from './Image';
import './imageList.css';

const ImageList = (props) => {
  if (!props.images.length) return '';
  return (
    <div className="images-container">
      {props.images.map((image) => {
        return <Image key={image.id} data={image} />;
      })}
    </div>
  );
};

export default ImageList;
