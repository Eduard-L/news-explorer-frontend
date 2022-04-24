import './NotFoundCards.css'
import logoSrc from '../../images/notFoundLogo.svg'

export function NotFoundCards() {
  return (
    <>
      <img className='notFound__logo' src={logoSrc} alt="not fount logo" />
      <h2 className='notFound__title'>Nothing found</h2>
      <p className='notFound__subtitle'>Sorry, but nothing matched your search terms.</p>
    </>
  )
}