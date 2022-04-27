import './Navigation.css'
import buttonLogoWhite from '../../images/buttonLogo2.svg'
import buttonLogoBlack from '../../images/logOutBlack.svg'
import { useNavigate } from 'react-router'


export function Navigation({ isLoggedIn, onClick, isBurgerMenuOpen, setIsBurgerMenuOpen, isHomePageOpen, setIsHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen }) {
  const navigation = useNavigate()

  function handleHomeBtnClick() {
    setIsHomePageOpen(true)
    setIsSaveArticlesPageIsOpen(false)
    navigation('/')
  }

  function handleSavedArticlesBtnClick() {
    setIsHomePageOpen(false)
    setIsSaveArticlesPageIsOpen(true)
    navigation('/saved-news')
  }


  function handleBurgerMenu() {

    setIsBurgerMenuOpen(!isBurgerMenuOpen)

  }
  return (
    <nav className={`navigation ${isBurgerMenuOpen && 'navigation_isOpen navigation_type_pseudo-style'} ${isLoggedIn && isBurgerMenuOpen && 'navigation_isOpenAndLoggedIn '} ${isSaveArticlesPageIsOpen && 'navigation_type_save-articles'} `} >
      <div className='navigation__wrapper'>
        <h2 className={`navigation__title  ${isSaveArticlesPageIsOpen && !isBurgerMenuOpen && 'navigation__title_type_saved-articles'} `}>NewsExplorer</h2>
        <button onClick={() => handleBurgerMenu()} className={`navigation__menuButton ${isBurgerMenuOpen ? 'navigation__menuButton_type_closeMenu' : `${isSaveArticlesPageIsOpen ? 'navigation__menuButton_type_blackBurger' : 'navigation__menuButton_type_burger'}`}`} type='button'></button>
      </div>
      <ul className={`navigation__list ${isBurgerMenuOpen && 'navigation__list_isOpen'}`} >
        <li className='navigation__item'>
          <button onClick={() => handleHomeBtnClick()} type='button' className={`navigation__link_type_home-page navigation__link ${isSaveArticlesPageIsOpen && !isBurgerMenuOpen && 'navigation__link_color_black'} ${isLoggedIn && 'navigation__link_logged-in'}`} >Home</button>
        </li>
        {isLoggedIn ?
          <li children='navigation__item'>
            <button onClick={() => { handleSavedArticlesBtnClick() }} type='button' className={`navigation__link_type_saved-articles navigation__link ${isSaveArticlesPageIsOpen && !isBurgerMenuOpen && 'navigation__link_color_black navigation__link_borderB_black'} ${isLoggedIn && 'navigation__link_logged-in'}`} >Saved articles</button>
          </li> : ''}
        <li className='navigation__item'>
          <button onClick={() => onClick()} className={`navigation__button ${isSaveArticlesPageIsOpen && !isBurgerMenuOpen && 'navigation__button_color_black'} ${isLoggedIn && 'navigation__button_logged-in'}`} type='button'>{isLoggedIn ? 'Elise' : 'Sign in'}{isLoggedIn && <img src={!isBurgerMenuOpen && isSaveArticlesPageIsOpen ? buttonLogoBlack : buttonLogoWhite} alt="button logo"></img>} </button>
        </li>
      </ul>

    </nav >
  )
}