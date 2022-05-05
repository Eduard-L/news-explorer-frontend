import { useEffect } from 'react'
import '../Popup/Popup.css'

export function Popup({ text, isOpen, onClose, children, type, redirectText, onClick, preSpanText }) {


  useEffect(() => {

    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', closeByEscape)

    return () => document.removeEventListener('keydown', closeByEscape)

  }, [isOpen, onClose])

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }
  return (
    <div onClick={(e) => handleOverlay(e)} className={`popup popup_type_${type} ${isOpen && 'popup_is-visible'}`}>
      <div className={`popup__content popup__content_type_${type} `}>
        <h2 className='popup__title'>{text}</h2>
        <button onClick={() => onClose()} className='popup__close-button' type='button'></button>
        {children}
        <button className={`popup__redirect-button popup__redirect-button_type_${type}`} type='button'> {preSpanText}<span onClick={() => { onClick() }} className='popup__button-span'> {redirectText}</span></button>
      </div>
    </div>
  )
}