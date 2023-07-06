import { useRef, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value = '';
  }, [isOpen])
  
  function handleSubmit(event) {
    event.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <PopupWithForm
      name="updateAvatarForm"
      title="Обновить аватар"
      submitText={isLoading ? "Сохранение..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input name="avatar" type="url" placeholder="Ссылка на аватар" className="popup__input popup__input_avatar_link" id="input-avatar-link" required ref={avatarRef} />
      <span className="popup__error" id="input-avatar-link-error"></span>
  </PopupWithForm>
  );
}

export default EditProfilePopup;