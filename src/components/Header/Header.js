import './Header.css'
import { useEffect, useRef } from 'react'
import { Navigation } from '../Navigation/Navigation'
import { useForm } from '../../formHooks/useForm';

export function Header({ searchKeyWord, setSearchKeyWord, onSubmit, userDataErr, isLoggedIn, onClick, isBurgerMenuOpen, setIsBurgerMenuOpen, isHomePageOpen, setIsHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen }) {
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
    <header className='header'>
      <Navigation
        isLoggedIn={isLoggedIn}
        onClick={onClick}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        isHomePageOpen={isHomePageOpen}
        setIsHomePageOpen={setIsHomePageOpen}
        isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
        setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}
        userDataErr={userDataErr}

      />
      <div className='header__content'>

        <h1 className='header__title'>What's going on in the world?</h1>
        <p className='header__subtitle'>Find the latest news on any topic and save them in your personal account.</p>
        <form className='header__form' onSubmit={(e) => { onSubmit(e); resetForm() }} >
          <input value={values.search || ''} onChange={(e) => { setSearchKeyWord(e.target.value); handleChange(e) }} type='text' name="search" className='header__input' placeholder='Enter topic' required minLength={2} />

          <button ref={button} className='header__button' type='submit'>Search</button>
          <span id="input_type_searchWord-error" className="header__form-error-message">{errors.search}</span>
        </form>

      </div>


    </header >
  )
}