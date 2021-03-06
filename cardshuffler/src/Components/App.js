import React, { Component } from 'react';
import CardDeck from './CardDeck';
import ButtonSet from './ButtonSet';
import DeckDraw from './DeckDraw';

import { playingCards } from '../Data/playingCards';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
class App extends Component {
  state = {
    doDraw: false,
    cutDeck: false,
    activeDeck: playingCards,
    handSize: 5
  };

  //Callbacks

  drawCards = () => {
    // this.setState({ doDraw: true });

    return this.state.doDraw
      ? this.setState({ doDraw: false })
      : this.setState({ doDraw: true });
  };

  deckRandomizer = () => {
    const tempDeck = this.state.activeDeck;
    tempDeck.cards = shuffleArray(tempDeck.cards);
    return this.setState({ activeDeck: tempDeck });
  };

  changeHandSize = newSize => {
    return this.setState({ handSize: newSize });
  };

  cutSwitch = () => {
    return this.setState({ cutDeck: !this.state.cutDeck });
  };

  render() {
    return (
      <div className="ui container center aligned">
        <h1 className="App-header ui header">Card Shuffler</h1>
        <CardDeck cutDeck={this.state.cutDeck} />
        <ButtonSet
          doDraw={this.state.doDraw}
          cutDeck={this.state.cutDeck}
          drawCards={this.drawCards}
          deckRandomizer={this.deckRandomizer}
          changeHandSize={this.changeHandSize}
          cutSwitch={this.cutSwitch}
        />
        <div className="ui divider" />
        <div>
          {this.state.doDraw && (
            <DeckDraw
              cards={playingCards.cards}
              handSize={this.state.handSize}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
