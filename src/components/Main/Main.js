import './Main.css'
import { NewsCardList } from '../NewsCardList/NewsCardList'
import { About } from '../About/About'


export function Main({ searchKeyWord, token, onSave, setIsCardClicked, isCardClicked, isSearchErrorOccured, setCardsData, isCardsDataEmpty, isCardsBlockVisible, cardToSave, setCardToSave, allCardsData, setIsSaveArticlesPageIsOpen, setIsHomePageOpen, isLoggedIn, isLoading, cardsData, isCardHover, setIsCardHover, onClick, isHomePageOpen, isSaveArticlesPageIsOpen }) {
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
        allCardsData={allCardsData}
        setCardToSave={setCardToSave}
        cardToSave={cardToSave}
        isCardsBlockVisible={isCardsBlockVisible}
        isCardsDataEmpty={isCardsDataEmpty}
        setCardsData={setCardsData}
        isSearchErrorOccured={isSearchErrorOccured}
        isCardClicked={isCardClicked}
        setIsCardClicked={setIsCardClicked}
        onSave={onSave}
        token={token}
        searchKeyWord={searchKeyWord}
      />



      <About
        isHomePageOpen={isHomePageOpen}
        setIsHomePageOpen={setIsHomePageOpen}
        setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}

      />
    </main>
  )
}