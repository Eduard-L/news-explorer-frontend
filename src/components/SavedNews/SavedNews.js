import './SavedNews.css'
import { useEffect } from 'react'
import { SavedNewsHeader } from '../SavedNewsHeader/SavedNewsHeader'
import { Main } from '../Main/Main'
import { NewsCardList } from '../NewsCardList/NewsCardList'




export function SavedNews({ isLoggedIn, onClick, setIsHomePageOpen, isHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen, setIsBurgerMenuOpen, isBurgerMenuOpen }) {
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
      />
      <Main>
        <NewsCardList />

      </Main>
    </div>
  )
}