import { Popup } from '../Popup/Popup'
import './PopupWithForm.css'
// import { useForm } from '../../formHooks/useForm'
import { useEffect, useRef } from 'react'

export function PopupWithForm({ children, resetForm, isValid, isFormLoading, onSubmit, btnText, redirectText, onClick, isSignUpOpen, onClose, isOpen, isSignInOpen, preSpanText }) {

  const button = useRef()
  useEffect(() => {
    if (!isValid) {
      button.current.setAttribute("disabled", "");
    }
    if (isValid) {
      button.current.removeAttribute("disabled", "");
    }
  }, [isValid])

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen])




  return (
    <Popup preSpanText={preSpanText} onClick={onClick} redirectText={redirectText} type={isSignUpOpen ? 'signup' : 'signin'} text={isSignInOpen ? 'Sign In' : 'Sign up'} isSignUpOpen={isSignUpOpen} onClose={onClose} isOpen={isOpen}>
      <form onSubmit={(e) => { onSubmit(e); }} className='popup__form'>

        {
          children
        }
        <button ref={button} className={`popup__button ${isFormLoading && 'popup__button_is-blinking'}`} type='submit' >{isFormLoading ? 'Loading...' : btnText}</button>

      </form>
    </Popup >
  )
}