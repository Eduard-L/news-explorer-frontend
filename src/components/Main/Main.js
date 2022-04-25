import './Main.css'
import { NewsCardList } from '../NewsCardList/NewsCardList'
import { About } from '../About/About'

export function Main({ setIsSaveArticlesPageIsOpen, setIsHomePageOpen, isLoggedIn, isLoading, cardsData, isCardHover, setIsCardHover, onClick, isHomePageOpen, isSaveArticlesPageIsOpen }) {
  return (
    <main>
      <NewsCardList
        isLoggedIn={isLoggedIn}
        isLoading={isLoading}
        cardsData={cardsData}
        isCardHover={isCardHover}
        setIsCardHover={setIsCardHover}
        onClick={onClick}
        isHomePageOpen={isHomePageOpen}
        isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
      />



      <About
        isHomePageOpen={isHomePageOpen}
        setIsHomePageOpen={setIsHomePageOpen}
        setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}

      />
    </main>
  )
}