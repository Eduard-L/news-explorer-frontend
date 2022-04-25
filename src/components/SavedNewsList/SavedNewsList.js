import './SavedNewsList.css'
import { NewsCard } from '../NewsCard/NewsCard'
import { NotFoundCards } from '../NotFoundCards/NotFoundCards'

export function SavedNewsList({ savedCardsData, isSaveArticlesPageIsOpen, isHomePageOpen, isLoggedIn, isCardHover, setIsCardHover }) {
  return (
    <section className='cards'>
      {
        savedCardsData ?
          <>
            <div className='cards__wrapper'>
              {
                savedCardsData.map((card) => {
                  return (
                    <NewsCard
                      isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
                      isHomePageOpen={isHomePageOpen}
                      isLoggedIn={isLoggedIn}
                      key={card.id}
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