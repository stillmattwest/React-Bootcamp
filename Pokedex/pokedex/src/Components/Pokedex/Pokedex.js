import React, { Component } from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './Pokedex.css';
class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: ''
    };

    this.getWinner = function(arr) {
      const firstHand = [
        arr[0].base_experience,
        arr[1].base_experience,
        arr[2].base_experience,
        arr[3].base_experience
      ];
      const secondHand = [
        arr[4].base_experience,
        arr[5].base_experience,
        arr[6].base_experience,
        arr[7].base_experience
      ];
      let firstHandTotal = firstHand.reduce((t, n) => {
        return parseInt(t) + parseInt(n);
      });
      let secondHandTotal = secondHand.reduce((t, n) => {
        return parseInt(t) + parseInt(n);
      });
      if (firstHandTotal > secondHandTotal) {
        this.setState({ winner: 'Winner: First Hand' });
      } else if (secondHandTotal > firstHandTotal) {
        this.setState({ winner: 'Winner: Second Hand' });
      } else {
        this.setState({ winner: 'Tie' });
      }
      console.log('firstHand exp total:', firstHandTotal);
      console.log('secondHand exp total:', secondHandTotal);
    };
  }

  componentDidMount() {
    this.getWinner(this.props.pokeList);
  }
  render() {
    const pokeList = this.props.pokeList;
    return (
      // TODO - Get data as props, pass to each card
      <div>
        <div className='pokedex-winner-banner'>
          <h2>{this.state.winner}</h2>
        </div>
        <ul className='pokedex-ul'>
          {pokeList.map((cardData, index) => {
            return (
              <li
                className='pokedex-li'
                key={`card-${index}`}
                ref={cardData.base_experience}
              >
                <PokeCard
                  cardData={cardData}
                  data-exp={cardData.base_experience}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Pokedex;
