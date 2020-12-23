import React, { Component } from 'react';
import './Sidebar.scss'

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="app-info">
          <h1 className="app-info__name">DAIRY APP</h1>
          <h4 className="app-info__description">Comment with no sense</h4>
        </div>
      </div>
    );
  }
}

export default Sidebar;