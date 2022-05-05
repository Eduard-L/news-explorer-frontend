
import { PopupWithForm } from "../PopupWithForm/PopupWithForm";
import { useForm } from "../../formHooks/useForm";
import { AuthForm } from "../AuthForm/AuthForm";
export function Registration({ setName, btnText, onSubmit, redirectText, onClick, isOpen, setEmail, setPassword, globalErrorMessage, isFormLoading, isSignUpOpen, isSignInOpen, onClose, preSpanText }) {
  const { handleChange, values, isValid, errors, resetForm } = useForm();
  return (
    <PopupWithForm btnText={btnText} isFormLoading={isFormLoading} onSubmit={onSubmit} resetForm={resetForm} isValid={isValid} onClose={onClose} redirectText={redirectText} isSignUpOpen={isSignUpOpen} isOpen={isOpen} preSpanText={preSpanText} onClick={onClick} type={isSignUpOpen ? 'signup' : 'signin'} text={isSignInOpen ? 'Sign In' : 'Sign up'}>
      <AuthForm setEmail={setEmail} handleChange={handleChange} errors={errors} values={values} setPassword={setPassword} globalErrorMessage={globalErrorMessage}>
        <label className='popup__label' htmlFor='username'>Username</label>
        <input name='name' value={values.name || ''} onChange={(e) => { setName(e.target.value); handleChange(e); }} autoComplete='username' className='popup__input' type='text' id='username' placeholder='Enter your username' required minLength={2} />
        <span id="input_type_username-error" className="popup__error">{errors.name ? errors.name : ''}</span>
      </AuthForm>

    </PopupWithForm>
  )
}