import './Header.css'

import { Navigation } from '../Navigation/Navigation'
import { SearchForm } from '../SerachForm/SerachForm'


export function Header({ setSearchKeyWord, onSubmit, userDataErr, isLoggedIn, onClick, isBurgerMenuOpen, setIsBurgerMenuOpen, isHomePageOpen, setIsHomePageOpen, isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen }) {
  // const { handleChange, values, isValid, errors, resetForm } = useForm();
  // const button = useRef();
  // useEffect(() => {
  //   if (!isValid) {
  //     button.current.setAttribute("disabled", "");
  //   }
  //   if (isValid) {
  //     button.current.removeAttribute("disabled", "");
  //   }
  // }, [isValid])

  return (
    <header className='header'>
      <Navigation
        isLoggedIn={isLoggedIn}
        onClick={onClick}
        isBurgerMenuOpen={isBurgerMenuOpen}
        setIsBurgerMenuOpen={setIsBurgerMenuOpen}
        isHomePageOpen={isHomePageOpen}
        setIsHomePageOpen={setIsHomePageOpen}
        isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
        setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}
        userDataErr={userDataErr}

      />
      <div className='header__content'>

        <h1 className='header__title'>What's going on in the world?</h1>
        <p className='header__subtitle'>Find the latest news on any topic and save them in your personal account.</p>

        <SearchForm onSubmit={onSubmit} setSearchKeyWord={setSearchKeyWord} />

      </div>


    </header >
  )
}