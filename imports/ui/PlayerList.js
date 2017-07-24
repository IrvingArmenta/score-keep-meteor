import React from 'react';
import PropTypes from 'prop-types';
import Player from './Player';
import FlipMove from 'react-flip-move';

export default class PlayerList extends React.Component {
  renderPlayers() {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">Add your first player to get started!</p>
        </div>
      );
    }
    else {
      return this.props.players.map((player) => {
        if(player.score === 1 || player.score === -1) {
          var pointText = 'point';
        } else {
          var pointText = 'points';
        }
        return <Player key={player._id} player={player} pointText={pointText}/>;
      });
    }
  }
  render() {
    return (
      <div>
        <FlipMove maintainContainerHeight={true} duration={500} easing="cubic-bezier(0.680, -0.550, 0.265, 1.550)">
          {this.renderPlayers()}
        </FlipMove>
      </div>
    );
  }
}

PlayerList.propTypes = {
  players: PropTypes.array.isRequired
}
