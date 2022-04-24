
import './App.css';
import { Header } from '../Header/Header'
import { useNavigate } from 'react-router';
import { useState } from 'react'
import { Footer } from '../Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Main } from '../Main/Main'
import { SavedNews } from '../SavedNews/SavedNews'
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Popup } from '../Popup/Popup'
import { testData } from '../../utils/data'
import { NewsCardList } from '../NewsCardList/NewsCardList'
import { About } from '../About/About'


function App() {
  const navigator = useNavigate()

  function handleHeaderButtonClick() {

    if (isLoggedIn) {
      setIsLoggedIn(false)
      navigator('/')
    }
    else {
      setIsPopupWithFormOpen(true)
    }
  }
  function handleRedirectBtnClick() {
    setIsPopupWithMessageOpen(false)
    setIsSignInOpen(true)
    setIsPopupWithFormOpen(true)

  }
  function closePopup() {
    setIsPopupWithFormOpen(false)
    setIsSignUpOpen(false)
    setIsSignInOpen(true)
    setIsPopupWithMessageOpen(false)
  }
  function handleChangingForm() {
    setIsSignInOpen(!isSignInOpen)
    setIsSignUpOpen(!isSignUpOpen)
  }
  function hanldeDisplayCards() {
    setPreNumOfArticlesDisplayed(preNumOfArticlesDisplayed + 3)
    setNumOfArticlesDisplayed(numOfArticlesDisplayed + 3)
    for (let i = preNumOfArticlesDisplayed; i < numOfArticlesDisplayed; i++) {
      setCardsData([cardsData, ...testData[i]])
    }
  }


  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [isHomePageOpen, setIsHomePageOpen] = useState(true)
  const [isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen] = useState(false)
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(true)
  const [isPopupWithMessageOpen, setIsPopupWithMessageOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cardsData, setCardsData] = useState([testData[1], testData[2], testData[3]])
  const [savedCardsData, setSavedCardsData] = useState('')
  const [isCardHover, setIsCardHover] = useState(false)
  const [preNumOfArticlesDisplayed, setPreNumOfArticlesDisplayed] = useState(0)
  const [numOfArticlesDisplayed, setNumOfArticlesDisplayed] = useState(3)
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<>
          <Header
            isLoggedIn={isLoggedIn}
            onClick={handleHeaderButtonClick}
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            isHomePageOpen={isHomePageOpen}
            setIsHomePageOpen={setIsHomePageOpen}
            isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
            setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}

          />
          <Main>
            <NewsCardList
              isLoggedIn={isLoggedIn}
              isLoading={isLoading}
              cardsData={cardsData}
              isCardHover={isCardHover}
              setIsCardHover={setIsCardHover}
              onClick={hanldeDisplayCards}
              isHomePageOpen={isHomePageOpen}
              isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
            />
            <About
              isHomePageOpen={isHomePageOpen}
              setIsHomePageOpen={setIsHomePageOpen}
              setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}

            />
          </Main>


          <PopupWithForm
            isOpen={isPopupWithFormOpen}
            onClose={closePopup}
            isSignUpOpen={isSignUpOpen}
            onClick={handleChangingForm}
            btnText={isSignInOpen ? 'Sign In' : 'Sign up'}
            redirectText={isSignInOpen ? 'Sign up' : 'Sign In'}
            isSignInOpen={isSignInOpen}
            type={isSignUpOpen ? 'signup' : 'signin'}
            preSpanText='or'

          />
          <Popup
            redirectText='Sign In'
            type='message'
            isOpen={isPopupWithMessageOpen}
            text='Registration successfully completed!'
            onClose={closePopup}
            onClick={handleRedirectBtnClick}

          />

        </>}
        />
        <Route path='/saved-news' element={
          <SavedNews
            isLoggedIn={isLoggedIn}
            onClick={handleHeaderButtonClick}
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            isHomePageOpen={isHomePageOpen}
            setIsHomePageOpen={setIsHomePageOpen}
            isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
            setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}
          >



          </SavedNews>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
