import React, { PureComponent } from 'react';
import './Style.css';
import LikeButton from '../LikeButton/LikeButton';
import LazyLoad from 'react-lazyload';
import Ticker from '../Ticker/Ticker';
import img_lot from './images/lot.png';
import img_bids from './images/bids.png';
import img_timer from './images/timer.png';

class ListItem extends PureComponent {
  decimalSeparator = (amount) => {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    return (
      <div className="ListItem">
        <LazyLoad height={200} once>
          <LikeButton />
          <img src={this.props.image} className="ListItem-image" alt="item for bidding" />
          <div className="ListItem-info-bar-top">
            <div className="ListItem-title">{this.props.title}</div>
            <div className="ListItem-amount">{this.decimalSeparator(this.props.amount)}<span className="ListItem-currency">{this.props.currency}</span></div>
          </div>
          <div className="ListItem-info-bar-bottom">
            <div className="ListItem-info-bar-lot">
              <img className="ListItem-info-bar-icons" src={img_lot} alt="lot" />
              <span className="ListItem-info-bar-text">{this.props.lot}</span>
            </div>
            <div className="ListItem-info-bar-bids">
              <img className="ListItem-info-bar-icons" src={img_bids} alt="bids" />
              <span className="ListItem-info-bar-text">{this.props.bids}</span>
            </div>
            <div className="ListItem-info-bar-timer">
              <img className="ListItem-info-bar-icons" src={img_timer} alt="time remaining" />
              <Ticker className="ListItem-info-bar-text" endDateTime={this.props.endDateTime} />
            </div>
          </div>
        </LazyLoad>
      </div>
    );
  }
}

export default ListItem;