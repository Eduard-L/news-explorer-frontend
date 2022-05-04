import './SearchForm.css'
import { useForm } from '../../formHooks/useForm';
import { useEffect, useRef } from 'react'

export function SearchForm({ onSubmit, setSearchKeyWord }) {
  const { handleChange, values, isValid, errors, resetForm } = useForm();
  const button = useRef();
  useEffect(() => {
    if (!isValid) {
      button.current.setAttribute("disabled", "");
    }
    if (isValid) {
      button.current.removeAttribute("disabled", "");
    }
  }, [isValid])
  return (
    <form className='header__form' onSubmit={(e) => { onSubmit(e); resetForm() }} >
      <input value={values.search || ''} onChange={(e) => { setSearchKeyWord(e.target.value); handleChange(e) }} type='text' name="search" className='header__input' placeholder='Enter topic' required minLength={2} />

      <button ref={button} className='header__button' type='submit'>Search</button>
      <span id="input_type_searchWord-error" className="header__form-error-message">{errors.search}</span>
    </form>
  )
}