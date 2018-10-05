import React, { Component } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems: [],
    };
  }

  componentDidMount() {
    fetch('http://api.emiratesauction.com/v2/carsonline')
      .then(results => {
        return results.json();
      })
      .then(data => {
        const vehicles = data.Cars.map((item) => {
          let image = item.image.replace('[w]', '200').replace('[h]', '200');

          return (
            <ListItem
              key={item.carID}
              image={image}
              title={item.makeEn + ' ' + item.year}
              amount={item.AuctionInfo.currentPrice}
              currency={item.AuctionInfo.currencyEn}
              lot={item.AuctionInfo.lot}
              bids={item.AuctionInfo.bids}
              endDateTime={item.AuctionInfo.endDateEn}
            />
          );
        });
        this.setState({ listItems: vehicles });
      })
      .catch(error => {
        console.log("Error loading data from the API.");
      });
  }

  render() {
    return (
      <div className="List-listitems">
        {this.state.listItems}
      </div>
    );
  }
}

export default List;
