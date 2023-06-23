import React from 'react';

function Card({card, onCardClick}) {
  const handleCardClick = () => {
    onCardClick(card);
  }
  return (
    <li className="element">
      <article>
        <img src={card.link} alt={card.name} className="element__image" onClick={handleCardClick} />
        <button type="button" className="element__delete-btn"></button>
        <div className="element__caption">
          <h2 className="element__name">{card.name}</h2>
          <div className="element__like">
            <button type="button" className="element__like-btn"></button>
            <span className="element__like-counter">{card.likes.length}</span>
          </div>
        </div>
      </article>
    </li>
  );
}

export default Card;