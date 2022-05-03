import './SavedNewsList.css'
import { NewsCard } from '../NewsCard/NewsCard'
import { NotFoundCards } from '../NotFoundCards/NotFoundCards'

export function SavedNewsList({ onDelete, savedCardsData, isSaveArticlesPageIsOpen, isHomePageOpen, isLoggedIn, isCardHover, setIsCardHover }) {

  return (

    <section className='cards cards_type_saved-articles cards_is-visible'>
      {
        savedCardsData.length !== 0 ?

          <div className='cards__wrapper cards__wrapper_type_saved-articles'>
            {
              savedCardsData.map((card) => {
                return (
                  <NewsCard
                    isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
                    isHomePageOpen={isHomePageOpen}
                    isLoggedIn={isLoggedIn}
                    key={card._id}
                    id={card._id}
                    card={card}
                    isCardHover={isCardHover}
                    setIsCardHover={setIsCardHover}
                    imgSrc={card.image}
                    cardDate={card.date}
                    cardTitle={card.title}
                    cardSubtitle={card.text}
                    cardCaption={card.source}
                    cardKeyWord={card.keyword}
                    cardLink={card.link}
                    onDelete={onDelete}
                  />
                )
              })
            }
          </div>



          : <NotFoundCards text='You dont have saved articles' />
      }



    </section>
  )
}