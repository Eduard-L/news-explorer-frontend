import './NewsCardList.css'
import { PreLoader } from '../PreLoader/PreLoader'
import { NotFoundCards } from '../NotFoundCards/NotFoundCards'
import { NewsCard } from '../NewsCard/NewsCard'
import { handleChageDateFormat } from '../../utils/constants'


export function NewsCardList({ setIsPopupWithFormOpen, setOnSuccessReq, onSuccessReq, savedCardsData, onDelete, searchKeyWord, token, onSave, isCardClicked, setIsCardClicked, isSearchErrorOccured, isCardsBlockVisible, cardToSave, setCardToSave, allCardsData, isSaveArticlesPageIsOpen, isHomePageOpen, onClick, isLoggedIn, isLoading, cardsData, isCardHover, setIsCardHover }) {



  return (

    <section className={`cards ${isCardsBlockVisible && 'cards_is-visible'}`}>
      {
        isLoading ? <PreLoader /> :
          <>
            {
              cardsData.length === 0 ? <NotFoundCards isSearchErrorOccured={isSearchErrorOccured} text={!isSearchErrorOccured ? 'Sorry, but nothing matched your search terms.' : "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."} /> :

                <>
                  <h2 className='cards__title'>Search Result</h2>
                  <div className='cards__wrapper'>
                    {
                      cardsData.map((card) => {

                        return (
                          <NewsCard
                            token={token}
                            onSave={onSave}
                            id={card._id}
                            isCardClicked={isCardClicked}
                            setIsCardClicked={setIsCardClicked}
                            cardToSave={cardToSave}
                            setCardToSave={setCardToSave}
                            card={card}
                            isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
                            isHomePageOpen={isHomePageOpen}
                            isLoggedIn={isLoggedIn}
                            key={card.id}
                            isCardHover={isCardHover}
                            setIsCardHover={setIsCardHover}
                            imgSrc={card.urlToImage}
                            cardDate={handleChageDateFormat(card.publishedAt)}
                            cardTitle={card.title}
                            cardSubtitle={card.description}
                            cardCaption={card.source.name}
                            cardLink={card.url}
                            searchKeyWord={searchKeyWord}
                            onDelete={onDelete}
                            savedCardsData={savedCardsData}
                            cardsData={cardsData}
                            onSuccessReq={onSuccessReq}
                            setOnSuccessReq={setOnSuccessReq}
                            setIsPopupWithFormOpen={setIsPopupWithFormOpen}
                          />
                        )
                      })
                    }
                  </div>
                  {

                    allCardsData.length !== cardsData.length &&
                    <button onClick={() => onClick()} className='cards__button-show-more' type='button'>Show more</button>
                  }

                </>


            }

          </>


      }









    </section>
  )
}