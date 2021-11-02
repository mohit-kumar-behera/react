import React from 'react';
import './image.css';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.ImageRef = React.createRef();
  }

  componentDidMount() {
    this.ImageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.ImageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { id, description, urls } = this.props.data;
    return (
      <div
        className="image-div"
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          ref={this.ImageRef}
          src={urls.regular}
          alt={description}
          className="image"
        />
      </div>
    );
  }
}

export default Image;
