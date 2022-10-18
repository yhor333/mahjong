import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Game.css";

const Game = () => {
  const [cards, setCards] = useState([]);
  const [openCards, setOpenCards] = useState([]);
  const [matched, setMatched] = useState([]);
  const getPrimes = (min, max) => {
    const result = Array(max + 1)
      .fill(0)
      .map((_, i) => i);
    for (let i = 2; i <= Math.sqrt(max + 1); i++) {
      for (let j = i ** 2; j < max + 1; j += i) delete result[j];
    }
    return Object.values(result.slice(Math.max(min, 2)));
  };

  const getRandNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function fisherShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  useEffect(() => {
    const htmlCards = document.querySelectorAll(".cart");
    const primeNumbers = [];
    const getRandPrime = (min, max) => {
      const primes = getPrimes(min, max);
      return primes[getRandNum(0, primes.length - 1)];
    };

    function pushPrimetoPrimeNumbers() {
      for (; primeNumbers.length < 32; ) {
        let num = getRandPrime(1, 60);
        if (!primeNumbers.includes(num)) {
          primeNumbers.push(num);
          primeNumbers.push(num);
        }
      }
      fisherShuffle(primeNumbers);
    }
    pushPrimetoPrimeNumbers();
    setCards(primeNumbers);
    setMatched(primeNumbers);
    setTimeout(() => {
      setMatched([]);
    }, 5000);
  }, []);

  return (
    <div className="container">
      <p className="caption">Mahjong</p>
      <div className="cart-wrapper">
        {cards.map((int, index) => {
          return (
            <Card
              matched={matched}
              openCards={openCards}
              setOpenCards={setOpenCards}
              key={index}
              int={int}
              id={index}
              cards={cards}
              setMatched={setMatched}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Game;
