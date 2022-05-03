
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
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { userDataContext } from '../../contexts/UserInfoContext';
import mainApi from '../../utils/MainApi'
import { currentDate, date7DaysAgo } from '../../utils/constants'
import NewsApi from '../../utils/NewsApi';
import uuid from 'react-uuid';






function App() {
  const navigator = useNavigate()


  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("jwt") !== null)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [isHomePageOpen, setIsHomePageOpen] = useState(true)
  const [isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen] = useState(false)
  const [isPopupWithFormOpen, setIsPopupWithFormOpen] = useState(false)
  const [isSignUpOpen, setIsSignUpOpen] = useState(false)
  const [isSignInOpen, setIsSignInOpen] = useState(true)
  const [isPopupWithMessageOpen, setIsPopupWithMessageOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cardsData, setCardsData] = useState([])
  const [savedCardsData, setSavedCardsData] = useState([])
  const [isCardHover, setIsCardHover] = useState(false)
  const [allCardsData, setAllCardsData] = useState(JSON.parse(localStorage.getItem('cards')))
  const [numCardsToRender, setNumCardsToRender] = useState(parseInt(localStorage.getItem('numOfArticlesRendered')) || 2)
  const [cardToSave, setCardToSave] = useState({})
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userData, setUserData] = useState({})
  const [globalErrorMessage, setGlobalErrorMessage] = useState('')
  const [isFormLoading, setIsFormLoading] = useState(false)
  const [token, setToken] = useState(localStorage.getItem("jwt"))
  const [userDataErr, setUserDataErr] = useState(false)
  const [searchKeyWord, setSearchKeyWord] = useState(localStorage.getItem('lastKeyWord') || '')
  const [isCardsBlockVisible, setIsCardBlockVisible] = useState(false)
  const [isSearchErrorOccured, setIsSearchErrorOccured] = useState(false)
  const [isCardClicked, setIsCardClicked] = useState(false)
  const [onSuccessReq, setOnSuccessReq] = useState(false)









  useEffect(() => {// check token validity just when there is token available

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
        alert('something wrong with the server while receiving user data please loggin again', errorStatus)
        setUserDataErr(true)
        setIsLoggedIn(false)
        setUserData({})
        localStorage.removeItem('jwt')
      }
    })()

  }, [token])

  useEffect(() => {//get articles just when the user logged in
    if (!isLoggedIn) return

    (async function getArticles() {
      try {

        const userArticles = await mainApi.handleGetSavedArticles(token)
        if (userArticles) {

          setSavedCardsData(userArticles)
        }
      }
      catch (e) {

        alert('something went wrong while receiving articles')
        console.log(e)

      }
    })()
  }, [isLoggedIn])

  async function deleteArticle(id) {
    try {
      const article = await mainApi.deleteArticle(token, id)
      if (article) {
        const newSavedArticles = savedCardsData.filter((item) => item._id !== article._id)
        setSavedCardsData(newSavedArticles)

        setOnSuccessReq(true)
      }

    }
    catch (e) {
      setOnSuccessReq(false)
      alert('something went wrong while deleting card')
    }
  }



  async function handleSaveArticle(keyWord, title, text, date, source, link, image, token) {
    try {
      const savedArticle = await mainApi.handleSaveArticle(keyWord, title, text, date, source, link, image, token)
      if (savedArticle) {
        setSavedCardsData([savedArticle, ...savedCardsData])
        setOnSuccessReq(true)
      }
    }
    catch (errorStatus) {
      setOnSuccessReq(false)
      alert('something went wrong while save the article')
      console.log(errorStatus)
    }
  }





  async function handleSubmitNewsSearch(e) {
    e.preventDefault();
    setIsCardBlockVisible(true)
    setIsLoading(true)
    setNumCardsToRender(2)
    try {

      const articles = await NewsApi.getArticles(searchKeyWord, date7DaysAgo, currentDate)
      if (articles) {
        setIsSearchErrorOccured(false)
        const allArticles = articles.articles;
        setAllCardsData(allArticles)
        localStorage.setItem('cards', JSON.stringify(allArticles))
        localStorage.setItem('numOfArticlesRendered', 2)
        localStorage.setItem('lastKeyWord', searchKeyWord)
      }

    }
    catch (e) {
      setIsSearchErrorOccured(true)
      setCardsData([])

    }
    finally {
      setIsLoading(false)
    }
  }

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
      setSavedCardsData([])
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
    const numArticlesToRender = numCardsToRender + 3
    localStorage.setItem('numOfArticlesRendered', numArticlesToRender)
    setNumCardsToRender(numArticlesToRender)

  }

  useEffect(() => { //first render after submiting search form

    if (!allCardsData) {
      setCardsData([])
      return
    }

    let cardsToRender = []
    let card;

    for (let i = 0; i <= numCardsToRender; i++) {

      if (allCardsData[i]) {
        card = { ...allCardsData[i], id: uuid() }
        cardsToRender.push(card)

      }

    }
    setIsCardBlockVisible(true)
    setCardsData(cardsToRender)

  }, [allCardsData, numCardsToRender])





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
              onSubmit={handleSubmitNewsSearch}
              setSearchKeyWord={setSearchKeyWord}
              searchKeyWord={searchKeyWord}

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
              isCardsBlockVisible={isCardsBlockVisible}
              isSearchErrorOccured={isSearchErrorOccured}
              isCardClicked={isCardClicked}
              setIsCardClicked={setIsCardClicked}
              onSave={handleSaveArticle}
              token={token}
              searchKeyWord={searchKeyWord}
              onDelete={deleteArticle}
              savedCardsData={savedCardsData}
              onSuccessReq={onSuccessReq}
              setOnSuccessReq={setOnSuccessReq}
              setIsPopupWithFormOpen={setIsPopupWithFormOpen}

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
              onDelete={deleteArticle}
            />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </userDataContext.Provider>
    </div>

  );
}

export default App;
