import { PopupWithForm } from "../PopupWithForm/PopupWithForm";
import { useForm } from '../../formHooks/useForm'

export function Login({ btnText, onSubmit, redirectText, onClick, isOpen, setEmail, setPassword, globalErrorMessage, isFormLoading, isSignUpOpen, isSignInOpen, onClose, preSpanText }) {

  const { handleChange, values, isValid, errors, resetForm } = useForm();

  return (
    <PopupWithForm btnText={btnText} isFormLoading={isFormLoading} onSubmit={onSubmit} resetForm={resetForm} isValid={isValid} onClose={onClose} redirectText={redirectText} isSignUpOpen={isSignUpOpen} isOpen={isOpen} preSpanText={preSpanText} onClick={onClick} type={isSignUpOpen ? 'signup' : 'signin'} text={isSignInOpen ? 'Sign In' : 'Sign up'} >
      <label className='popup__label' htmlFor='email'>Email</label>
      <input name='email' value={values.email || ''} onChange={(e) => { setEmail(e.target.value); handleChange(e); }} autoComplete="email" className='popup__input' type='email' id='email' placeholder='Enter email' required />
      <span id="input_type_email-error" className="popup__error">{errors.email ? errors.email : ''}</span>
      <label className='popup__label' htmlFor='password'>password</label>
      <input name="password" value={values.password || ''} onChange={(e) => { setPassword(e.target.value); handleChange(e); }} autoComplete="password" className='popup__input' type='password' id='password' placeholder='Enter password' required minLength={6} />
      <span id="input_type_password-error" className="popup__error">{errors.password ? errors.password : ''}</span>
      <span id="input_type_global-error" className="popup__error">{globalErrorMessage && globalErrorMessage}</span>

    </PopupWithForm>
  )
}