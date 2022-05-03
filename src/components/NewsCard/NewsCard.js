import './NewsCard.css'
import { useRef, useEffect } from 'react'


export function NewsCard({ setIsPopupWithFormOpen, setOnSuccessReq, onSuccessReq, savedCardsData, id, onDelete, searchKeyWord, cardLink, token, onSave, isCardClicked, setIsCardClicked, card, isSaveArticlesPageIsOpen, isHomePageOpen, isLoggedIn, isCardHover, setIsCardHover, imgSrc, cardDate, cardTitle, cardSubtitle, cardCaption, cardKeyWord }) {
  const button = useRef()
  const message = useRef()

  useEffect(() => {
    if (isSaveArticlesPageIsOpen) return

    if (!isLoggedIn) {
      button.current.classList.remove(`card__button_is-clicked`)
      return
    }

    savedCardsData.forEach((element) => {
      if (element.text === cardSubtitle) {
        button.current.classList.add(`card__button_is-clicked`)
      }
    });



  }, [isLoggedIn, isSaveArticlesPageIsOpen, savedCardsData])

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
      setIsCardClicked(false)
    }
    if (isLoggedIn && isSaveArticlesPageIsOpen) {
      message.current.classList.remove(`card__message_is-visible`)
    }

  }
  function handleBtnClick(e) {

    if (isLoggedIn && isHomePageOpen && !e.target.classList.contains(`card__button_is-clicked`)) {//if user loggedin and homepageopen but icon not clicked
      const keyWord = localStorage.getItem('lastKeyWord') || searchKeyWord;

      onSave(keyWord, cardTitle, cardSubtitle, cardDate, cardCaption, cardLink, imgSrc, token)

      if (onSuccessReq) {
        setIsCardClicked(!isCardClicked)
        e.target.classList.toggle(`card__button_is-clicked`)
        button.current.classList.toggle('card__button_is-hover')

      }

      setOnSuccessReq(false)

    }
    else if (isSaveArticlesPageIsOpen && isLoggedIn) {//user logged in and save-article page open
      onDelete(id)
    }
    else if (e.target.classList.contains(`card__button_is-clicked`)) { // if card is clicke in the main page
      const cardToDelete = savedCardsData.find((item) => item.text === card.description)
      onDelete(cardToDelete._id)
      if (onSuccessReq) {
        button.current.classList.toggle(`card__button_is-hover`)
        e.target.classList.toggle(`card__button_is-clicked`)
      }
      setOnSuccessReq(false)


    }
    else if (!isLoggedIn) {

      setIsPopupWithFormOpen(true)
    }

  }







  return (
    <article className='card' >

      <button onClick={(e) => { handleBtnClick(e) }} onMouseLeave={(e) => handleBtnLeave(e)} onMouseEnter={(e) => handleBtnHover(e)} ref={button} className={`card__button ${isSaveArticlesPageIsOpen && "card__button_type_saved-cards"}`} type='button'></button>

      {isSaveArticlesPageIsOpen && <span className='card__keyword'>{cardKeyWord}</span>}

      <span ref={message} className={`card__message ${isSaveArticlesPageIsOpen && 'card__message_type_save-articles'}`}>{isCardClicked && 'delete from save' || isHomePageOpen && isLoggedIn && !isCardClicked && 'Add to saved' || !isLoggedIn && isHomePageOpen && 'Sign in to save articles' || isSaveArticlesPageIsOpen && 'Remove from saved'}</span>
      <a className='card__link' href={cardLink} target="_blank">
        <img className='card__image' src={imgSrc} alt='news image' />
        <div className='card__text-wrapper'>
          <p className='card__date'>{cardDate}</p>
          <h2 className='card__title'>{cardTitle}</h2>
          <p className='card__subtitle'>{cardSubtitle}</p>
          <span className='card__caption'>{cardCaption}</span>

        </div>
      </a>
    </article>
  )
}