import React from 'react';

import Track from '../TrackList/TrackList';
import './TrackList.css';

class TrackList extends React.Component {

  render() {
    return (

      <div className="TrackList">
          <Track />
      </div>
    )
  };
}

export default TrackList;
