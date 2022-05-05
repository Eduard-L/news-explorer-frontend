import './NotFoundCards.css'
import logoSrc from '../../images/notFoundLogo.svg'

export function NotFoundCards({ isSearchErrorOccured, text }) {
  return (
    <>
      <img className='notFound__logo' src={logoSrc} alt="not found logo" />
      <h2 className='notFound__title'>{!isSearchErrorOccured ? 'Nothing found' : "Server Error"}</h2>
      <p className='notFound__subtitle'>{text}</p>
    </>
  )
}