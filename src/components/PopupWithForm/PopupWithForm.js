import { Popup } from '../Popup/Popup'
import './PopupWithForm.css'
import { useForm } from '../../formHooks/useForm'
import { useEffect, useRef } from 'react'

export function PopupWithForm({ isFormLoading, globalErrorMessage, onSubmit, btnText, redirectText, onClick, isSignUpOpen, onClose, isOpen, isSignInOpen, preSpanText, setEmail, setPassword, setName }) {
  const { handleChange, values, isValid, errors, resetForm } = useForm();
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
        <label className='popup__label' htmlFor='email'>Email</label>
        <input name='email' value={values.email || ''} onChange={(e) => { setEmail(e.target.value); handleChange(e); }} autoComplete="email" className='popup__input' type='email' id='email' placeholder='Enter email' required />
        <span id="input_type_email-error" className="popup__error">{errors.email ? errors.email : ''}</span>
        <label className='popup__label' htmlFor='password'>password</label>
        <input name="password" value={values.password || ''} onChange={(e) => { setPassword(e.target.value); handleChange(e); }} autoComplete="password" className='popup__input' type='password' id='password' placeholder='Enter password' required minLength={6} />
        <span id="input_type_password-error" className="popup__error">{errors.password ? errors.password : ''}</span>
        {
          isSignUpOpen &&
          <>
            <label className='popup__label' htmlFor='username'>Username</label>
            <input name='name' value={values.name || ''} onChange={(e) => { setName(e.target.value); handleChange(e); }} autoComplete='username' className='popup__input' type='text' id='username' placeholder='Enter your username' required minLength={2} />
            <span id="input_type_username-error" className="popup__error">{errors.name ? errors.name : ''}</span>
          </>

        }
        <span id="input_type_global-error" className="popup__error">{globalErrorMessage && globalErrorMessage}</span>
        <button ref={button} className={`popup__button ${isFormLoading && 'popup__button_is-blinking'}`} type='submit' >{isFormLoading ? 'Loading...' : btnText}</button>

      </form>
    </Popup >
  )
}