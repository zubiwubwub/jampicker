import React { Component } from 'react';


import './Track.css';

class Track extends Component {

  renderAction() {
    if (isRemoval === true) {
      '-'
    }  else {
      '+'
    }
  }

  render() {
    return (

    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      <button className="Track-action">{this.renderAction}</button>
    </div>
    )
  };
}

export default Track;
