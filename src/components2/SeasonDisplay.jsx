import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
  summer: {
    text: 'This is Summer!!!',
  },
  winter: {
    text: "Bruuhhh!!! It's cool outside",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) return lat > 0 ? 'winter' : 'summer';
  else return lat > 0 ? 'summer' : 'winter';
};

class SeasonDisplay extends React.Component {
  month = new Date().getMonth();
  season = getSeason(this.props.latitude, this.month);
  seasonText = seasonConfig[this.season].text;

  render() {
    return (
      <div className={`season-display ${this.season}`}>
        <p>{this.seasonText}</p>
      </div>
    );
  }
}

export default SeasonDisplay;
