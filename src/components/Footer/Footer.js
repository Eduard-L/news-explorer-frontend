import './Footer.css'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <div className='footer'>
      <h2 className='footer__title'>{`© ${new Date().getFullYear()} Supersite, Powered by News API`}</h2>
      <nav className='footer__nav'>
        <ul className='footer__nav-items'>
          <li className='footer__ item footer__item_type_links'>

            <Link className='footer__link' to="/">Home</Link>
            <a className='footer__link' href='https://www.practicum100.org/' target='_blank'>Practicum by Yandex</a>
          </li>
          <li className='footer__item footer__item_type_icons'>
            <div className='footer__icon footer__icon_type_facebook'>
              <a href='http://facebook.com' className='footer__link' target='_blank' />
            </div>
            <div className='footer__icon footer__icon_type_github'>
              <a href='http://github.com/Eduard-L' className='footer__link' target='_blank' />
            </div>
          </li>

        </ul>
      </nav>
    </div>
  )
}