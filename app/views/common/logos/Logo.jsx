/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 */


// Module imports
import React, { Component } from 'react';
import logoImage from '../../../assets/logo.png';


/**
 * @class Logo
 * @description Renders a Bootstrap responsive image
 *
 */
export default class Logo extends Component {
  render() {
    return (
      <img
        src={logoImage}
        alt="TalkRise OrderMan"
        className="img"
        width="150"
      />
    );
  }
}
