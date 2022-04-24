import './NewsCard.css'
import { useRef } from 'react'


export function NewsCard({ isSaveArticlesPageIsOpen, isLoggedIn, isCardHover, setIsCardHover, imgSrc, cardDate, cardTitle, cardSubtitle, cardCaption }) {
  const button = useRef()
  const message = useRef()
  function handleBtnHover() {
    if (isLoggedIn) return
    setIsCardHover(!isCardHover)
    message.current.classList.toggle(`card__message_is-visible`)
    button.current.classList.toggle(`card__button_is-hover`)
  }
  function handleBtnClick() {
    if (!isLoggedIn) return
    button.current.classList.toggle(`card__button_is-clicked`)
  }



  return (
    <article className='card'>
      <button onClick={() => { handleBtnClick() }} onMouseLeave={() => handleBtnHover()} onMouseEnter={() => handleBtnHover()} ref={button} className='card__button' type='button'></button>

      <span ref={message} className='card__message'>Sign in to save articles</span>

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