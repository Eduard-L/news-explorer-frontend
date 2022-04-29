import { Popup } from '../Popup/Popup'
import './PopupWithForm.css'

export function PopupWithForm({ isFormLoading, globalErrorMessage, name, email, password, onSubmit, btnText, redirectText, onClick, isSignUpOpen, onClose, isOpen, isSignInOpen, preSpanText, setEmail, setPassword, setName }) {

  return (
    <Popup preSpanText={preSpanText} onClick={onClick} redirectText={redirectText} type={isSignUpOpen ? 'signup' : 'signin'} text={isSignInOpen ? 'Sign In' : 'Sign up'} isSignUpOpen={isSignUpOpen} onClose={onClose} isOpen={isOpen}>
      <form onSubmit={(e) => onSubmit(e)} className='popup__form'>
        <label className='popup__label' htmlFor='email'>Email</label>
        <input value={email || ''} onChange={(e) => setEmail(e.target.value)} autoComplete="email" className='popup__input' type='email' id='email' placeholder='Enter email' required />
        <span id="input_type_email-error" className="popup__error"></span>
        <label className='popup__label' htmlFor='password'>password</label>
        <input value={password || ''} onChange={(e) => setPassword(e.target.value)} autoComplete="password" className='popup__input' type='password' id='password' placeholder='Enter password' required minLength={6} />
        <span id="input_type_password-error" className="popup__error"></span>
        {
          isSignUpOpen &&
          <>
            <label className='popup__label' htmlFor='username'>Username</label>
            <input value={name || ''} onChange={(e) => setName(e.target.value)} autoComplete='username' className='popup__input' type='text' id='username' placeholder='Enter your username' required minLength={2} />
            <span id="input_type_username-error" className="popup__error"></span>
          </>

        }
        <span id="input_type_global-error" className="popup__error">{globalErrorMessage && globalErrorMessage}</span>
        <button className={`popup__button ${isFormLoading && 'popup__button_is-blinking'}`} type='submit' >{isFormLoading ? 'Loading...' : btnText}</button>

      </form>
    </Popup>
  )
}