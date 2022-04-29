import './SavedNews.css'
import { useEffect } from 'react'
import { SavedNewsHeader } from '../SavedNewsHeader/SavedNewsHeader'
import { SavedNewsList } from '../SavedNewsList/SavedNewsList'





export function SavedNews({ savedCardsData, isLoggedIn, onClick, setIsHomePageOpen, isHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen, setIsBurgerMenuOpen, isBurgerMenuOpen }) {
  function handleCloseBurgerMenu() { // handler for closing the burger in bigger screen resolution in order not to lose the colors at the navigation bar  //

    if (window.screen.availWidth > 760) {

      setIsBurgerMenuOpen(false)
    }
  }
  useEffect(() => {
    if (isSaveArticlesPageIsOpen) return
    setIsSaveArticlesPageIsOpen(true)
    setIsHomePageOpen(false)
  }, [])

  useEffect(() => {

    if (!isBurgerMenuOpen) return
    window.addEventListener('resize', handleCloseBurgerMenu)

    return () => {
      window.removeEventListener('resize', handleCloseBurgerMenu)
    }
  })

  return (
    <div className='savednews'>
      <SavedNewsHeader
        isLoggedIn={isLoggedIn}
        onClick={onClick}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        isHomePageOpen={isHomePageOpen}
        setIsHomePageOpen={setIsHomePageOpen}
        isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
        setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}
        savedCardsData={savedCardsData}
      />
      <SavedNewsList
        isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
        savedCardsData={savedCardsData}
        isHomePageOpen={isHomePageOpen}
        isLoggedIn={isLoggedIn}
      />

    </div>
  )
}