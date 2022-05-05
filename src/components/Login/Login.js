import { PopupWithForm } from "../PopupWithForm/PopupWithForm";
import { useForm } from '../../formHooks/useForm'
import { AuthForm } from "../AuthForm/AuthForm";

export function Login({ btnText, onSubmit, redirectText, onClick, isOpen, setEmail, setPassword, globalErrorMessage, isFormLoading, isSignUpOpen, isSignInOpen, onClose, preSpanText }) {

  const { handleChange, values, isValid, errors, resetForm } = useForm();

  return (
    <PopupWithForm btnText={btnText} isFormLoading={isFormLoading} onSubmit={onSubmit} resetForm={resetForm} isValid={isValid} onClose={onClose} redirectText={redirectText} isSignUpOpen={isSignUpOpen} isOpen={isOpen} preSpanText={preSpanText} onClick={onClick} type={isSignUpOpen ? 'signup' : 'signin'} text={isSignInOpen ? 'Sign In' : 'Sign up'} >
      <AuthForm setEmail={setEmail} handleChange={handleChange} errors={errors} values={values} setPassword={setPassword} globalErrorMessage={globalErrorMessage} />
    </PopupWithForm>
  )
}