import './SavedNewsList.css'
import { NewsCard } from '../NewsCard/NewsCard'
import { NotFoundCards } from '../NotFoundCards/NotFoundCards'

export function SavedNewsList({ savedCardsData, isSaveArticlesPageIsOpen, isHomePageOpen, isLoggedIn, isCardHover, setIsCardHover }) {
  return (
    <section className='cards cards_type_saved-articles'>
      {
        savedCardsData ?
          <>
            <div className='cards__wrapper cards__wrapper_type_saved-articles'>
              {savedCardsData &&
                savedCardsData.map((card) => {
                  return (
                    <NewsCard
                      isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
                      isHomePageOpen={isHomePageOpen}
                      isLoggedIn={isLoggedIn}
                      key={card.id}
                      card={card}
                      isCardHover={isCardHover}
                      setIsCardHover={setIsCardHover}
                      imgSrc={card.img}
                      cardDate={card.date}
                      cardTitle={card.title}
                      cardSubtitle={card.subtitle}
                      cardCaption={card.caption}
                      cardKeyWord={card.keyword}
                    />
                  )
                })
              }
            </div>


          </>
          : <NotFoundCards text='You dont have saved articles' />
      }



    </section>
  )
}