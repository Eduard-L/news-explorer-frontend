
import './App.css';
import { Header } from '../Header/Header'
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react'
import { Footer } from '../Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Main } from '../Main/Main'
import { SavedNews } from '../SavedNews/SavedNews'
import { PopupWithForm } from '../PopupWithForm/PopupWithForm';
import { Popup } from '../Popup/Popup'
import { testData } from '../../utils/data'



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [isHomePageOpen, setIsHomePageOpen] = useState(true)
  const [isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen] = useState(false)
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(true)
  const [isPopupWithMessageOpen, setIsPopupWithMessageOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cardsData, setCardsData] = useState([])
  const [savedCardsData, setSavedCardsData] = useState(testData)
  const [isCardHover, setIsCardHover] = useState(false)
  const [allCardsData, setAllCardsData] = useState(testData)
  const [counterOne, setCounterOne] = useState(6)
  const [cardToSave, setCardToSave] = useState({})


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
    let cardsToRender = []
    for (let i = 0; i < counterOne; i++) {
      if (testData[i]) {
        cardsToRender.push(testData[i])
      }

    }

    setCounterOne(counterOne + 3)
    setCardsData(cardsToRender)
  }


  useEffect(() => {
    setAllCardsData(testData)
    if (cardsData === []) return
    function renderCards() {
      let cardsToRender = []

      for (let i = 0; i < 3; i++) {
        if (!testData[i]) return
        cardsToRender.push(testData[i])
      }
      setCardsData(cardsToRender)
    }
    renderCards()

  }, [])
  // useEffect(() => {
  //   if (!cardToSave) return
  //   setSavedCardsData([cardToSave, ...savedCardsData])


  // }, [cardToSave])


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
          <Main
            isLoggedIn={isLoggedIn}
            isLoading={isLoading}
            cardsData={cardsData}
            isCardHover={isCardHover}
            setIsCardHover={setIsCardHover}
            onClick={hanldeDisplayCards}
            isHomePageOpen={isHomePageOpen}
            isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
            setIsHomePageOpen={setIsHomePageOpen}
            setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}
            allCardsData={allCardsData}
            setCardToSave={setCardToSave}
          />




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
            savedCardsData={savedCardsData}
          >



            /</SavedNews>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
