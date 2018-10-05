import React, { Component } from 'react';
import './Style.css';
import img_n_plate from './images/number-plate.png';
import img_n_plate_h from './images/number-plate-hover.png';
import img_property from './images/property.png';
import img_property_h from './images/property-hover.png';
import img_sim_cards from './images/sim-cards.png';
import img_sim_cards_h from './images/sim-cards-hover.png';
import img_general from './images/general-items.png';
import img_general_h from './images/general-items-hover.png';

class LeftNavigationBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 1,
      img_n_plate_h: false,
      img_property_h: false,
      img_sim_cards_h: false,
      img_general_h: false
    };
  }

  changeSelectedIndex = (index) => {
    this.setState(
      { selectedIndex: index }
    );
  }

  plateHover = (status) => this.setState({ img_n_plate_h: status });

  propertyHover = (status) => this.setState({ img_property_h: status });

  simCardHover = (status) => this.setState({ img_sim_cards_h: status });

  generalHover = (status) => this.setState({ img_general_h: status });

  render() {
    return (
      <div className="LeftNavigationBar">
        <div
          onClick={() => this.changeSelectedIndex(1)}
          onMouseOver={() => this.plateHover(true)}
          onMouseOut={() => this.plateHover(false)}
          className={this.state.selectedIndex === 1 ? 'selected' : ''}>
          <img src={this.state.img_n_plate_h || this.state.selectedIndex === 1 ? img_n_plate_h : img_n_plate}
            onClick={() => this.changeSelectedIndex(1)}
            alt="Number plates"
          />
        </div>
        <div
          onClick={() => this.changeSelectedIndex(2)}
          onMouseOver={() => this.propertyHover(true)}
          onMouseOut={() => this.propertyHover(false)}
          className={this.state.selectedIndex === 2 ? 'selected' : ''}>
          <img src={this.state.img_property_h || this.state.selectedIndex === 2 ? img_property_h : img_property}
            onClick={() => this.changeSelectedIndex(2)}
            alt="Properties"
          />
        </div>
        <div
          onClick={() => this.changeSelectedIndex(3)}
          onMouseOver={() => this.simCardHover(true)}
          onMouseOut={() => this.simCardHover(false)}
          className={this.state.selectedIndex === 3 ? 'selected' : ''}>
          <img
            src={this.state.img_sim_cards_h || this.state.selectedIndex === 3 ? img_sim_cards_h : img_sim_cards}
            onClick={() => this.changeSelectedIndex(3)}
            alt="Sim Cards"
          />
        </div>
        <div
          onClick={() => this.changeSelectedIndex(4)}
          onMouseOver={() => this.generalHover(true)}
          onMouseOut={() => this.generalHover(false)}
          className={this.state.selectedIndex === 4 ? 'selected' : ''}>
          <img
            src={this.state.img_general_h || this.state.selectedIndex === 4 ? img_general_h : img_general}
            onClick={() => this.changeSelectedIndex(4)}
            alt="General items"
          />
        </div>
      </div>
    );
  }
}

export default LeftNavigationBar;