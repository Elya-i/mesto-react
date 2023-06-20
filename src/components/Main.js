import React from 'react';

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-block">
          <img src="#" alt="Аватар пользователя" className="profile__avatar"/>
          <button type="button" className="profile__avatar-edit-btn"></button>
        </div>
        <div className="profile__info">
          <div className="profile__edit-container">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
            <button type="button" className="profile__edit-btn"></button>
          </div>
          <p className="profile__job"> Исследователь океана</p>
        </div>
        <button className="profile__add-btn" type="button" aria-label="Добавить"></button> 
      </section>
   
      <section class="elements" aria-label="Карточки с изображениями">
        <ul className="elements__list"></ul>
      </section>

    </main>
  );
}

export default Main;