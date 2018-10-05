import React, { Component } from 'react';
import './Style.css';
import moment from 'moment';

class Ticker extends Component {
  constructor(props) {
    super(props);

    const rmT = this.calculateTimeRemain(this.props.endDateTime);

    this.state = {
      closeToEnd: rmT.closeToEnd,
      endsAfter: rmT.endsAfter,
    };
  }

  calculateTimeRemain = (then) => {
    // FIXME: year needs to be fix in the API, currently not included
    const diff = moment(then, "DD MMM YYYY HH:mm A").year('2018').diff(moment());
    const dur = moment.duration(diff);

    const hours = Math.floor(dur.asHours());
    const ms = moment.utc(diff);
    return {
      closeToEnd: hours <= 0 && ms.minute() <= 15 ? true : false,
      endsAfter: hours + ms.format(":mm:ss"),
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.tick, 1000);
  }

  tick = () => {
    const rmT = this.calculateTimeRemain(this.props.endDateTime);

    this.setState({
      closeToEnd: rmT.closeToEnd,
      endsAfter: rmT.endsAfter,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className={this.state.closeToEnd ? 'Ticker-time-endsAfter Ticker-time-endsAfter-red' : 'Ticker-time-endsAfter'}>
        {this.state.endsAfter}
      </div>
    );
  }
}

export default Ticker;