import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import '../css/SolarSystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <Title headline="Planetas" />
        <div data-testid="solar-system" className="solar-system">
          {
            planets.map((element, index) => (<PlanetCard
              key={ index }
              planetName={ element.name }
              planetImage={ element.image }
            />))
          }
        </div>
      </>
    );
  }
}

export default SolarSystem;
