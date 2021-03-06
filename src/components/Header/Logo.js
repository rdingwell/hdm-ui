import React, { Component } from 'react';
import robot from '../../../images/robot.png'

export default class Logo extends Component {
  render() {
    return (
      <a className="logo navbar-brand" href="/">
        <span><img className="header-logo" alt="robot" src={robot} width="25px" /></span>
        <span className="topper">Health Data Manager</span>
      </a>
    );
  }
}

Logo.displayName = 'Logo';
