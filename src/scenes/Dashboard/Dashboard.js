import React, { PureComponent } from 'react';
import './Dashboard.css';
import Header from '../../components/Header/Header';
import LeftNavigationBar from '../../components/LeftNavigationBar/LeftNavigationBar';
import List from '../../components/List/List';

class Dashboard extends PureComponent {
  render() {
    return (
      <div className="Dashboard">
        <div className="Dashboard-wrapper">
          <Header />
          <div className="Dashboard-content-wrapper">
            <LeftNavigationBar />
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
