import './SavedNewsHeader.css'
import { Navigation } from '../Navigation/Navigation'
import { useContext } from 'react'
import { userDataContext } from '../../contexts/UserInfoContext'

export function SavedNewsHeader({ savedCardsData, isLoggedIn, onClick, isBurgerMenuOpen, setIsBurgerMenuOpen, setIsBurgerMenuOpenisHomePageOpen, setIsHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen }) {
  const userData = useContext(userDataContext)
  return (
    <header className='savedNewsHeader'>
      <Navigation
        isLoggedIn={isLoggedIn}
        onClick={onClick}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        setIsBurgerMenuOpenisHomePageOpen={setIsBurgerMenuOpenisHomePageOpen}
        setIsHomePageOpen={setIsHomePageOpen}
        isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
        setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}

      />
      <div className='savedNewsHeader__content-wrapper'>
        <p className='header__subtitle header__subtitle_color_grey'>Saved articles</p>
        <h1 className='header__title  header__title_page_saved-articles'>{userData.name}, you have {savedCardsData.length} saved articles</h1>
        <p className='header__subtitle header__subtitle_page_saved-articles'>By keywords:<span className='header__subtitle header__subtitle_font_bold'> Nature, Yellowstone, and 2 other</span> </p>
      </div>

    </header>
  )
}