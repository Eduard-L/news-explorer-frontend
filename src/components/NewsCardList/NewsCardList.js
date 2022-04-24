import './NewsCardList.css'
import { PreLoader } from '../PreLoader/PreLoader'
import { NotFoundCards } from '../NotFoundCards/NotFoundCards'
import { NewsCard } from '../NewsCard/NewsCard'

export function NewsCardList({ isSaveArticlesPageIsOpen, isHomePageOpen, onClick, isLoggedIn, isLoading, cardsData, isCardHover, setIsCardHover }) {
  return (
    <section className='cards'>
      {
        isLoading ? <PreLoader /> :
          cardsData ?
            <>
              <h2 className='cards__title'>Search Result</h2>
              <div className='cards__wrapper'>
                {
                  cardsData.map((card) => {
                    return (
                      <NewsCard isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen} isHomePageOpen={isHomePageOpen} isLoggedIn={isLoggedIn} key={card.id} isCardHover={isCardHover} setIsCardHover={setIsCardHover} imgSrc={card.img} cardDate={card.date} cardTitle={card.title} cardSubtitle={card.subtitle} cardCaption={card.caption} />
                    )
                  })
                }
              </div>
              <button onClick={() => onClick()} className='cards__button-show-more' type='button'>Show more</button>

            </>
            : <NotFoundCards />
      }



    </section>
  )
}