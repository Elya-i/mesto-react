import { useState, useEffect, useContext} from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => { 
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser, isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
    onUpdateUser({ name, about: description });
  }
  
  return (
    <PopupWithForm
      name="profileEditForm"
      title="Редактировать профиль"
      submitText={isLoading ? "Сохранение..." : "Сохранить"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input name="name" type="text" placeholder="Имя" className="popup__input popup__input_profile_name" id="name-input" minLength="2" maxLength="40" required onChange={(event) => {setName(event.target.value)}} value={name} />
      <span className="profile-name-error popup__error" id="name-input-error" ></span>
      <input name="about" type="text" placeholder="О себе" className="popup__input popup__input_profile_about" id="about-input"  minLength="2" maxLength="200" required onChange={(event) => {setDescription(event.target.value)}} value={description} />
      <span className="popup-about-error popup__error" id="about-input-error"></span>
    </PopupWithForm> 
  );
}

export default EditProfilePopup;
