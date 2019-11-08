import React, { Component } from 'react';
import './PokeCard.css';

function idConverter(id) {
  let result = id.toString();
  while (result.length < 3) {
    result = '0' + result;
  }
  return result;
}

class PokeCard extends Component {
  render() {
    const cardData = this.props.cardData;
    const id = idConverter(cardData.id);
    return (
      <div
        className='pokecard-container'
        data-id={id}
        data-exp={cardData.base_experience}
      >
        <div className='pokecard-img-container'>
          <img
            className='pokecard-img'
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
          />
        </div>

        <h3 className='pokecard-name'>{cardData.name}</h3>
        <p>Type:{cardData.type}</p>
        <p>EXP:{cardData.base_experience}</p>
      </div>
    );
  }
}

export default PokeCard;
