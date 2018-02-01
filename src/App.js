import React, { Component } from 'react';

import './styles';

import PROFILES from './profiles.json';

import Ranking from './components/Ranking';
import Modal from './components/Modal';
import UserInfo from './components/UserInfo';


class App extends Component {
  state = {
    profiles: [],
    check: false,
    temp_picture: null,
    temp_name: "",
    temp_points: 0,
  };

  componentWillMount() {
    this.setState({
      profiles: PROFILES,
      check: false,
    });
  }

  render() {
    return (
      <div>
        <Ranking
          profiles={this.state.profiles}
          onSelectProfile={(user) => {this.setState ({check: true,
          temp_picture: user.picture,
          temp_name: user.name,
          temp_points: user.points,
    });}}
        />
        <Modal show={this.state.check}   onHide={() => {this.setState ({check: false});}} >
          <UserInfo
            picture={this.state.temp_picture}
            name={this.state.temp_name}
            points={this.state.temp_points}
          />
        </Modal>
      </div>
    );
  }
}

export default App;
