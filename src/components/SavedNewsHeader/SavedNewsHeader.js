import './SavedNewsHeader.css'
import { Navigation } from '../Navigation/Navigation'
import { useContext, useEffect, useState } from 'react'
import { UserDataContext } from '../../contexts/UserInfoContext'

export function SavedNewsHeader({ savedCardsData, isLoggedIn, onClick, isBurgerMenuOpen, setIsBurgerMenuOpen, setIsBurgerMenuOpenisHomePageOpen, setIsHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen }) {
  const userData = useContext(UserDataContext)
  const [keyWordPhrase, setKeyWordPhrase] = useState('');
  useEffect(() => { // algoritm to set the keyword phrase
    if (!savedCardsData) return
    const keyWordCounter = {}
    savedCardsData.forEach((card) => {
      if (!keyWordCounter[card.keyword]) {
        keyWordCounter[card.keyword] = 1
      }
      else {
        keyWordCounter[card.keyword] = keyWordCounter[card.keyword] + 1
      }
    });
    let arrayKeyWords = Object.keys(keyWordCounter).map((item) => {
      return [item, keyWordCounter[item]]
    })

    arrayKeyWords.sort((a, b) => b[1] - a[1])
    arrayKeyWords = arrayKeyWords.flat().filter((item) => typeof (item) === 'string')
    if (arrayKeyWords.length <= 3) {
      arrayKeyWords = arrayKeyWords.join(', ')
      setKeyWordPhrase(arrayKeyWords)
    }
    else {
      const sumOfkeyWord = arrayKeyWords.length
      arrayKeyWords = [arrayKeyWords[0], arrayKeyWords[1]];
      arrayKeyWords = arrayKeyWords.join(', ');
      const phrase = `${arrayKeyWords}, and ${sumOfkeyWord - 2} other`
      setKeyWordPhrase(phrase)
    }

  }, [savedCardsData])
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
        <p className='header__subtitle header__subtitle_page_saved-articles'>By keywords:<span className='header__subtitle header__subtitle_font_bold'>{keyWordPhrase}</span> </p>
      </div>

    </header>
  )
}