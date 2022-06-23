import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/PlanetCard.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    const classPlanetName = planetName.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return (
      <div data-testid="planet-card" className="planet-card">
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
        <h3 data-testid="planet-name" className={ classPlanetName }>{planetName}</h3>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};

export default PlanetCard;
