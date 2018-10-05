import React, { Component } from 'react';
import './Style.css';
import img_heart_grey from './images/heart-grey.png';
import img_heart_red from './images/heart-red.png';

class LikeButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      liked: false,
    };
  }

  toggleLike = () => {
    this.setState({
      liked: this.state.liked ? false : true,
    });
  }

  render() {
    return (
      <div className="LikeButton">
        <img
          src={this.state.liked ? img_heart_red : img_heart_grey}
          onClick={this.toggleLike}
          alt="Like it?" />
      </div>
    );
  }
}

export default LikeButton;