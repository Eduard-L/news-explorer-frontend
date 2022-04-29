import './NewsCard.css'
import { useRef } from 'react'


export function NewsCard({ cardToSave, setCardToSave, card, isSaveArticlesPageIsOpen, isHomePageOpen, isLoggedIn, isCardHover, setIsCardHover, imgSrc, cardDate, cardTitle, cardSubtitle, cardCaption, cardKeyWord }) {
  const button = useRef()
  const message = useRef()

  function handleBtnHover() {
    if (isHomePageOpen) {
      setIsCardHover(!isCardHover)
      message.current.classList.toggle(`card__message_is-visible`)
      button.current.classList.toggle(`card__button_is-hover`)
    }
    if (isLoggedIn && isSaveArticlesPageIsOpen) {
      message.current.classList.toggle(`card__message_is-visible`)
    }

  }
  function handleBtnClick(e) {

    if (isLoggedIn && isHomePageOpen) {
      e.target.classList.toggle(`card__button_is-clicked`)
    }
    // setCardToSave([card, ...cardToSave])


  }



  return (
    <article className='card' onClick={(e) => { handleBtnClick(e) }}>

      <button onMouseLeave={() => handleBtnHover()} onMouseEnter={() => handleBtnHover()} ref={button} className={`card__button ${isSaveArticlesPageIsOpen && "card__button_type_saved-cards"}`} type='button'></button>

      {isSaveArticlesPageIsOpen && <span className='card__keyword'>{cardKeyWord}</span>}

      <span ref={message} className={`card__message ${isSaveArticlesPageIsOpen && 'card__message_type_save-articles'}`}>{isHomePageOpen && isLoggedIn && 'Add to saved' || !isLoggedIn && isHomePageOpen && 'Sign in to save articles' || isSaveArticlesPageIsOpen && 'Remove from saved'}</span>

      <img className='card__image' src={imgSrc} alt='news image' />
      <div className='card__text-wrapper'>
        <p className='card__date'>{cardDate}</p>
        <h2 className='card__title'>{cardTitle}</h2>
        <p className='card__subtitle'>{cardSubtitle}</p>
        <span className='card__caption'>{cardCaption}</span>

      </div>

    </article>
  )
}