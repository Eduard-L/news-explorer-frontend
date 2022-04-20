import './Navigation.css'
import buttonLogo from '../../images/buttonLogo2.svg'

export function Navigation({ isLoggedIn, onClick, isBurgerMenuOpen, setIsBurgerMenuOpen }) {


  function handleBurgerMenu() {

    setIsBurgerMenuOpen(!isBurgerMenuOpen)


  }
  return (
    <nav className={`navigation ${isBurgerMenuOpen && 'navigation_isOpen'} ${isLoggedIn && isBurgerMenuOpen && 'navigation_isOpenAndLoggedIn'}`} >
      <div className='wrapper'>
        <h2 className='navigation__title'>NewsExplorer</h2>
        <button onClick={() => handleBurgerMenu()} className={`navigation__menuButton ${isBurgerMenuOpen ? 'navigation__menuButton_type_closeMenu' : 'navigation__menuButton_type_burger'}`} type='button'></button>

      </div>

      <ul className={`navigation__list ${isBurgerMenuOpen && 'navigation__list_isOpen'}`} >
        <li className='navigation__item'><a className={`navigation__link_type_home-page navigation__link ${isLoggedIn && 'navigation__link_type_logged-in'}`} href="http://google.com">Home</a></li>
        {isLoggedIn ? <li children='navigation__item'><a className={`navigation__link_type_saved-articles navigation__link ${isLoggedIn && 'navigation__link_type_logged-in'}`} href="http://google.com">Saved articles</a></li> : ''}
        <li className='navigation__item'><button onClick={() => onClick()} className={`navigation__button ${isLoggedIn && 'navigation__button_logged-in'}`} type='button'>{isLoggedIn ? 'Elise' : 'Sign in'}{isLoggedIn && <img src={buttonLogo}></img>} </button></li>

      </ul>

    </nav >
  )
}