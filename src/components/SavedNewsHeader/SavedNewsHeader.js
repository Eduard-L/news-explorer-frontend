import './SavedNewsHeader.css'
import { Navigation } from '../Navigation/Navigation'

export function SavedNewsHeader({ isLoggedIn, onClick, isBurgerMenuOpen, setIsBurgerMenuOpen, setIsBurgerMenuOpenisHomePageOpen, setIsHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen }) {
  return (
    <header className='savednewsheader'>
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
    </header>
  )
}