import { useState } from "react";
import Cart from "../Cart/Cart";
import "./Game.css";

const Game = () => {
  const primeNumbers = [];
  const [cards, setCards] = useState();
  const [openCards, setOpenCards] = useState();
  const [matched, setMatched] = useState();
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

  const getRandPrime = (min, max) => {
    const primes = getPrimes(min, max);
    return primes[getRandNum(0, primes.length - 1)];
  };

  function pushPrimetoPrimeNumbers() {
    for (; primeNumbers.length < 34; ) {
      let num = getRandPrime(1, 60);
      if (primeNumbers.find((elem) => elem === num) === undefined) {
        primeNumbers.push(num);
        primeNumbers.push(num);
      }
    }
  }
  pushPrimetoPrimeNumbers();

  function fisherShuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  fisherShuffle(primeNumbers);

  return (
    <div>
      <p className="caption">Mahjong</p>
      <div className="cart-wrapper">
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
};

export default Game;
