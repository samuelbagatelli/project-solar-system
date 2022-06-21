import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {
          missions.map((element, index) => (<MissionCard
            key={ index }
            name={ element.name }
            year={ element.year }
            country={ element.country }
            destination={ element.destination }
          />))
        }
      </div>
    );
  }
}

export default Missions;
