import React from 'react';
//import PropTypes from 'prop-types';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();

    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }
  render() {
    return (
      <div className="item">
      <form className="form" onSubmit={this.handleSubmit} >
        <input className="form__input" type="text" name="playerName" placeholder="Player name"/>
        <button role="button" className="button">Add player</button>
      </form>
    </div>
    );
  }
}
