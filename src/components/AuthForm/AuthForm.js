export function AuthForm({ children, setEmail, handleChange, errors, values, setPassword, globalErrorMessage }) {
  return (
    <>
      <label className='popup__label' htmlFor='email'>Email</label>
      <input name='email' value={values.email || ''} onChange={(e) => { setEmail(e.target.value); handleChange(e); }} autoComplete="email" className='popup__input' type='email' id='email' placeholder='Enter email' required />
      <span id="input_type_email-error" className="popup__error">{errors.email ? errors.email : ''}</span>
      <label className='popup__label' htmlFor='password'>password</label>
      <input name="password" value={values.password || ''} onChange={(e) => { setPassword(e.target.value); handleChange(e); }} autoComplete="password" className='popup__input' type='password' id='password' placeholder='Enter password' required minLength={6} />
      <span id="input_type_password-error" className="popup__error">{errors.password ? errors.password : ''}</span>
      {
        children
      }
      <span id="input_type_global-error" className="popup__error">{globalErrorMessage && globalErrorMessage}</span>

    </>

  )
}