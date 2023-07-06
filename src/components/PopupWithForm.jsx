import React, { useEffect } from 'react';

function PopupWithForm(props) {

  function closeByOverlayClick(event) {
    if (event.target.classList.contains('popup')) props.onClose();
  }

  function handleCloseByEsc(event) {
    if (event.key === 'Escape') {
      props.onClose()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleCloseByEsc);
    return () => {document.removeEventListener('keydown', handleCloseByEsc)};
  })
  
  return (
    <div onClick={closeByOverlayClick} className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button type="button" className="popup__close-btn" onClick={props.onClose}></button>
        <form className="popup__form" name={props.name} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className="popup__button popup__button-submit">{props.submitText}</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
