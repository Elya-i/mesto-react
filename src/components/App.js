import React, { useState } from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null)
  }
  
  return (
    <div className="page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="profileEditForm"
        title="Редактировать профиль"
        submitText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input name="name" type="text" placeholder="Имя" className="popup__input popup__input_profile_name" id="name-input" minLength="2" maxLength="40" required />
        <span className="profile-name-error popup__error" id="name-input-error" ></span>
        <input name="about" type="text" placeholder="О себе" className="popup__input popup__input_profile_about" id="about-input"  minLength="2" maxLength="200" required />
        <span className="popup-about-error popup__error" id="about-input-error"></span>
      </PopupWithForm>
      
      <PopupWithForm
        name="addImageForm"
        title="Новое место"
        submitText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input name="imageName" type="text" placeholder="Название" className="popup__input popup__input_image_name" id="input-image-name" minLength="2" maxLength="30" required />
        <span className="image-name-error popup__error" id="input-image-name-error"></span>
        <input name="imageLink" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_image_link" id="input-image-link" required />
        <span className="image-link-error popup__error" id="input-image-link-error"></span>
      </PopupWithForm>
      
      <PopupWithForm
        name="confirmDeleteForm"
        title="Вы уверены?"
        submitText="Да"
        onClose={closeAllPopups}
      >
      </PopupWithForm>
      
      <PopupWithForm
        name="updateAvatarForm"
        title="Обновить аватар"
        submitText="Создать"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input name="avatar" type="url" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar_link" id="input-avatar-link" required />
        <span className="popup__error" id="input-avatar-link-error"></span>
      </PopupWithForm>
      
      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups} 
      />
  </div>
 );
}

export default App;