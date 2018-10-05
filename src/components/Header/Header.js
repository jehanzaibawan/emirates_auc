import React, { PureComponent } from 'react';
import './Style.css';
import img_logo from './images/logo.png';
import img_logo_ea from './images/logo-ea.png';
import img_bids from './images/bids.png';
import img_heart_grey from './images/heart-grey.png';
import img_bucket from './images/bucket.png';
import img_avatar from './images/avatar.png';

class Header extends PureComponent {
  render() {
    return (
      <div className="Header">
        <div className="Header-logo-wrapper">
          <img src={img_logo} alt="Emirates Auction" />
        </div>
        <div className="Header-logo-ea-wrapper">
          <img src={img_logo_ea} alt="Emirates Auction" />
        </div>
        <div className="Header-links">
          <span>Home</span>
          <span>About</span>
          <span>FAQs</span>
          <span>Contact Us</span>
        </div>
        <div className="Header-notifications first">
          <img src={img_bids} alt="New bid" />
        </div>
        <div className="Header-notifications">
          <img src={img_heart_grey} alt="Likes" />
        </div>
        <div className="Header-notifications last">
          <img src={img_bucket} alt="Bucket" />
        </div>
        <div className="Header-user-section">
          <span className="Header-username">Sophie Reiter</span>
          <img src={img_avatar} className="Header-user-avatar" alt="Sophie Reiter" />
        </div>
        <div className="Header-mobile-menu">
          <span></span>
          <span className="mid"></span>
          <span></span>
        </div>
      </div>
    );
  }
}

export default Header;