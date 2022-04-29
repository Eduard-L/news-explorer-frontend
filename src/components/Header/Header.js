import './Header.css'

import { Navigation } from '../Navigation/Navigation'


export function Header({ userDataErr, isLoggedIn, onClick, isBurgerMenuOpen, setIsBurgerMenuOpen, isHomePageOpen, setIsHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen }) {


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
        <form className='header__form'>
          <input type='text' name="search" className='header__input' placeholder='Enter topic' required />
          <button className='header__button' type='submit'>Search</button>
        </form>

      </div>


    </header >
  )
}