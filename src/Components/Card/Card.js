import { useEffect } from "react";
import "./Card.css";

const Cart = ({
  int,
  id,
  openCards,
  setOpenCards,
  matched,
  cards,
  setMatched,
}) => {
  useEffect(() => {
    const htmlCards = document.querySelectorAll(".card");
    if (openCards.length < 2) {
      return;
    }

    const firtsMatch = cards[openCards[0]];
    const secondMatch = cards[openCards[1]];
    if (openCards.length === 2) {
      setTimeout(() => setOpenCards([]), 500);
    }
    if (openCards[0] === openCards[1]) return;
    if (secondMatch && firtsMatch === secondMatch) {
      setMatched([...matched, firtsMatch]);
    }
  }, [openCards]);

  const flipCard = (index) => {
    setOpenCards((opened) => [...opened, index]);
  };

  let isFlipped = false;
  if (openCards.includes(id)) {
    isFlipped = true;
  }
  if (matched.includes(int)) {
    isFlipped = true;
  }

  return (
    <div
      className={`cart fliped$ ${isFlipped ? `cart_active` : ""}`}
      onClick={() => flipCard(id)}
    >
      <p id={id} className={`cart__int ${isFlipped ? `fliped` : ""}`}>
        {int}
      </p>
    </div>
  );
};

export default Cart;
