import React, { Component } from 'react';
import PokeCard from '../PokeCard/PokeCard';
import './Pokedex.css';
class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      winner: ''
    };
  }
  componentDidMount() {
    const r = this.refs;
    const firstHand = [];
    const secondHand = [];
    for (let key in r) {
      if (firstHand.length < 4) {
        firstHand.push(r[key].childNodes[0].dataset.exp);
      } else {
        secondHand.push(r[key].childNodes[0].dataset.exp);
      }
    }
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
    console.log('firstHand', firstHandTotal);
    console.log('secondHand', secondHandTotal);
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
