import React, { useState, useEffect } from 'react';
import { Grid, Card } from './stylesMemoria';


const JogoMemoria = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  useEffect(() => {
    const newCards = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      value: Math.floor(i / 2),
      flipped: false,
    })).sort(() => Math.random() - 0.5);
    setCards(newCards);
  }, []);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      if (cards[firstIndex].value === cards[secondIndex].value) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <Grid>
      {cards.map((card, index) => (
        <Card
          key={card.id}
          flipped={flippedCards.includes(index) || matchedCards.includes(index)}
          onClick={() => handleCardClick(index)}
        >
          {(flippedCards.includes(index) || matchedCards.includes(index)) && card.value}
        </Card>
      ))}
    </Grid>
  );
};

export default JogoMemoria;