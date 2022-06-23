import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../css/Missions.css';

class Missions extends Component {
  render() {
    return (
      <>
        <Title headline="Missões" />
        <div data-testid="missions" className="missions">
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
      </>
    );
  }
}

export default Missions;
