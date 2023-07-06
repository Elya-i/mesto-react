import { useState, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  function handleSubmit(event) {
    event.preventDefault();
    onAddPlace({ name, link });
  }

  return (
    <PopupWithForm
      name="addImageForm"
      title="Новое место"
      submitText={isLoading ? "Сохранение..." : "Создать"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input name="imageName" type="text" placeholder="Название" className="popup__input popup__input_image_name" id="input-image-name" minLength="2" maxLength="30" required value={name} onChange={(event) => {setName(event.target.value)}} />
      <span className="image-name-error popup__error" id="input-image-name-error"></span>
      <input name="imageLink" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_image_link" id="input-image-link" required value={link} onChange={(event) => {setLink(event.target.value)}} />
      <span className="image-link-error popup__error" id="input-image-link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
