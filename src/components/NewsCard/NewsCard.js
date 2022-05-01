import './NewsCard.css'
import { useRef } from 'react'


export function NewsCard({ id, onDelete, searchKeyWord, cardLink, token, onSave, isCardClicked, setIsCardClicked, cardToSave, setCardToSave, card, isSaveArticlesPageIsOpen, isHomePageOpen, isLoggedIn, isCardHover, setIsCardHover, imgSrc, cardDate, cardTitle, cardSubtitle, cardCaption, cardKeyWord }) {
  const button = useRef()
  const message = useRef()

  function handleBtnHover(e) {
    if (e.target.classList.contains(`card__button_is-clicked`)) {
      setIsCardClicked(true)
      message.current.classList.add(`card__message_is-visible`)
      return
    }
    if (isHomePageOpen) {
      setIsCardHover(!isCardHover)
      message.current.classList.add(`card__message_is-visible`)
      button.current.classList.add(`card__button_is-hover`)
    }
    if (isLoggedIn && isSaveArticlesPageIsOpen) {
      message.current.classList.add(`card__message_is-visible`)
    }

  }
  function handleBtnLeave(e) {
    if (isHomePageOpen) {
      setIsCardHover(!isCardHover)
      message.current.classList.remove(`card__message_is-visible`)
      button.current.classList.remove(`card__button_is-hover`)
    }
    if (isLoggedIn && isSaveArticlesPageIsOpen) {
      message.current.classList.remove(`card__message_is-visible`)
    }

  }
  function handleBtnClick(e) {

    if (isLoggedIn && isHomePageOpen) {

      onSave(searchKeyWord, cardTitle, cardSubtitle, cardDate, cardCaption, cardLink, imgSrc, token)
      setIsCardClicked(!isCardClicked)
      e.target.classList.toggle(`card__button_is-clicked`)
      button.current.classList.toggle(`card__button_is-hover`)
      // handleBtnLeave(e)

    }
    if (isSaveArticlesPageIsOpen) {
      onDelete(id)
    }
    // setCardToSave([card, ...cardToSave])


  }



  return (
    <article className='card' onClick={(e) => { handleBtnClick(e) }}>

      <button onMouseLeave={(e) => handleBtnLeave(e)} onMouseEnter={(e) => handleBtnHover(e)} ref={button} className={`card__button ${isSaveArticlesPageIsOpen && "card__button_type_saved-cards"}`} type='button'></button>

      {isSaveArticlesPageIsOpen && <span className='card__keyword'>{cardKeyWord}</span>}

      <span ref={message} className={`card__message ${isSaveArticlesPageIsOpen && 'card__message_type_save-articles'}`}>{isCardClicked && 'Delete from saved' || isHomePageOpen && isLoggedIn && !isCardClicked && 'Add to saved' || !isLoggedIn && isHomePageOpen && 'Sign in to save articles' || isSaveArticlesPageIsOpen && 'Remove from saved'}</span>

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