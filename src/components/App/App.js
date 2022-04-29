
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
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { userDataContext } from '../../contexts/UserInfoContext';
import mainApi from '../../utils/MainApi'



function App() {
  const navigator = useNavigate()


  const [isLoggedIn, setIsLoggedIn] = useState(false)
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
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const [globalErrorMessage, setGlobalErrorMessage] = useState('')
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("jwt"))
  const [userDataErr, setUserDataErr] = useState(false)


  useEffect(() => {

    if (!token) {
      console.log('token not valid')
      return
    }

    (async function checkTokenValidity() {

      try {
        const userInfo = await mainApi.getUserData(token)
        if (userInfo) {
          setUserData(userInfo)
          setIsLoggedIn(true)
          setUserDataErr(false)
        }
      }
      catch (errorStatus) {
        alert('something wrong with the server while receiving user data please try again', errorStatus)
        setUserDataErr(true)
        setIsLoggedIn(false)
      }
    })()
  }, [token])

  async function handlePopupFormSubmit(e) {
    e.preventDefault();
    if (isSignUpOpen) {

      try {
        setIsFormLoading(true)
        const response = await mainApi.handleSignUp(email, password, name)

        if (response) {
          setGlobalErrorMessage('')
          setIsPopupWithFormOpen(false)
          setIsSignInOpen(true)
          setIsSignUpOpen(false)
          setIsPopupWithMessageOpen(true)
          setEmail('')
          setPassword('')
          setName('')
          return
        }
      }

      catch (errorStatus) {
        console.log(errorStatus)

        if (errorStatus === 409) {
          setGlobalErrorMessage('user already excist')
        }
        else if (errorStatus === 400) {
          setGlobalErrorMessage('your data is invalid')
        }
        else {
          setGlobalErrorMessage('server error')
        }
      }
      finally {
        setIsFormLoading(false)
      }
    }
    else if (isSignInOpen) {


      try {
        setIsFormLoading(true)
        const resWithToken = await mainApi.handleSignIn(email, password)
        if (resWithToken) {
          localStorage.setItem('jwt', resWithToken)
          setToken(resWithToken)
          setIsLoggedIn(true)
          setIsPopupWithFormOpen(false)


        }
      }
      catch (errorStatus) {

        if (errorStatus === 401) {
          setGlobalErrorMessage('wrong email or password')
        }
        else if (errorStatus === 400) {
          setGlobalErrorMessage('your data is inavlid')
        }
        else {
          setGlobalErrorMessage('server error')
        }
      }
      finally {
        setIsFormLoading(false)
      }

    }
  }
  function handleHeaderButtonClick() {

    if (isLoggedIn) {
      setIsLoggedIn(false)
      setToken('')
      localStorage.removeItem('jwt')
      setEmail('')
      setPassword('')
      navigator('/')
      setUserDataErr(false)
      setUserData({})
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
    setName('')
    setEmail('')
    setPassword('')
    setGlobalErrorMessage('')
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


  return (

    <div className="App">
      <userDataContext.Provider value={userData}>
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
              userDataErr={userDataErr}

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
              cardToSave={cardToSave}
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
              onSubmit={handlePopupFormSubmit}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
              name={name}
              password={password}
              email={email}
              globalErrorMessage={globalErrorMessage}
              isFormLoading={isFormLoading}

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
            <ProtectedRoute
              component={SavedNews}
              isLoggedIn={isLoggedIn}
              onClick={handleHeaderButtonClick}
              isBurgerMenuOpen={isBurgerMenuOpen}
              setIsBurgerMenuOpen={setIsBurgerMenuOpen}
              isHomePageOpen={isHomePageOpen}
              setIsHomePageOpen={setIsHomePageOpen}
              isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
              setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}
              savedCardsData={savedCardsData}
            />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </userDataContext.Provider>
    </div>

  );
}

export default App;
