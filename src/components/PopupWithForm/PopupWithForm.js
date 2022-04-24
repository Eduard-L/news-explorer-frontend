import { Popup } from '../Popup/Popup'
import './PopupWithForm.css'

export function PopupWithForm({ btnText, redirectText, onClick, isSignUpOpen, onClose, isOpen, isSignInOpen, preSpanText }) {

  return (
    <Popup preSpanText={preSpanText} onClick={onClick} redirectText={redirectText} type={isSignUpOpen ? 'signup' : 'signin'} text={isSignInOpen ? 'Sign In' : 'Sign up'} isSignUpOpen={isSignUpOpen} onClose={onClose} isOpen={isOpen}>
      <form className='popup__form'>
        <label className='popup__label' htmlFor='email'>Email</label>
        <input autoComplete="email" className='popup__input' type='email' id='email' placeholder='Enter email' required />
        <span id="input_type_email-error" className="popup__error"></span>
        <label className='popup__label' htmlFor='password'>password</label>
        <input autoComplete="password" className='popup__input' type='password' id='password' placeholder='Enter password' required minLength={6} />
        <span id="input_type_password-error" className="popup__error">password error</span>
        {
          isSignUpOpen &&
          <>
            <label className='popup__label' htmlFor='username'>Username</label>
            <input autoComplete='username' className='popup__input' type='text' id='username' placeholder='Enter your username' required minLength={2} />
            <span id="input_type_username-error" className="popup__error"></span>
          </>

        }
        <span id="input_type_global-error" className="popup__error">global error</span>
        <button className='popup__button' type='submit' >{btnText}</button>

      </form>
    </Popup>
  )
}