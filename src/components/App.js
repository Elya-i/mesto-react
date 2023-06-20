import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <div className="popup popup_type_profile">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <button type="button" className="popup__close-btn"></button>
          <form className="popup__form" name="profileEditForm" novalidate>
            <input name="name" type="text" placeholder="Имя" className="popup__input popup__input_profile_name" id="name-input" minlength="2" maxlength="40" required />
            <span className="popup__error" id="name-input-error" ></span>
            <input name="about" type="text" placeholder="О себе" className="popup__input popup__input_profile_about" id="job-input"  minlength="2" maxlength="200" required />
            <span className="popup__error" id="job-input-error"></span>
          <button type="submit" className="popup__button popup__button-submit">Сохранить</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_card">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <button type="button" className="popup__button popup__close-btn"></button>
          <form class="popup__form" name="addImageForm" novalidate>
            <input name="imageName" type="text" placeholder="Название" className="popup__input popup__input_image_name" id="input-image-name" minlength="2" maxlength="30" required />
            <span className="popup__error" id="input-image-name-error"></span>
            <input name="imageLink" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_image_link" id="input-image-link" required />
            <span className="popup__error" id="input-image-link-error"></span>
          <button type="submit" className="popup__button popup__button-submit">Создать</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_image">
        <div className="popup__image-container">
          <button type="button" className="popup__button popup__close-btn"></button>
          <img src="#" alt="Изображение" className="popup__image-photo" />
          <p className="popup__image-caption"></p>
        </div>
      </div>

      <div className="popup popup_type_confirm">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button type="button" class="popup__button popup__close-btn"></button>
          <form className="popup__form" name="confirmDeleteForm" novalidate>
          <button type="submit" className="popup__button popup__button-submit">Да</button>
          </form>
        </div>
      </div>

      <div className="popup popup_type_avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <button type="button" class="popup__button popup__close-btn"></button>
          <form className="popup__form" name="updateAvatarForm" novalidate>
            <input name="avatar" type="url" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar_link" id="input-avatar-link" required />
            <span className="popup__error" id="input-avatar-link-error"></span>
          <button type="submit" className="popup__button popup__button-submit">Создать</button>
          </form>
        </div>
     </div>

      <template id="element-template">
        <li className="element">
          <article>
            <img src="#" alt="#" className="element__image" />
            <button type="button" className="element__delete-btn"></button>
            <div className="element__caption">
              <h2 className="element__name"></h2>
              <div class="element__like">
                <button type="button" class="element__like-btn"></button>
                <span className="element__like-counter"></span>
              </div>
            </div>
          </article>
        </li>
      </template>
  </>
 );
}

export default App;
