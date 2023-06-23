import React, { useState, useEffect } from 'react';
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick  }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserData(), api.getCardList()])
      .then(([userData, cardList]) => { 
        setUserName(userData.name)
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardList);
      })
      .catch(console.error)
  }, [])

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block">
          <img src={userAvatar} alt="Аватар пользователя" className="profile__avatar"/>
          <button onClick={onEditAvatar} type="button" className="profile__avatar-edit-btn"></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit-container">
              <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} type="button" className="profile__edit-btn"></button>
          </div>
          <p className="profile__job">{userDescription}</p>
        </div>
        <button onClick={onAddPlace} className="profile__add-btn" type="button"></button> 
      </section>
   
      <section className="elements" aria-label="Карточки с изображениями">
        <ul className="elements__list">
          {cards.map(card => (
            <Card card={card} key={card._id} onCardClick={onCardClick}/>
          ))}
        </ul>
      </section>

    </main>
  );
}

export default Main;