
import './App.css';
import { Header } from '../Header/Header'
import { useState } from 'react'
import { About } from '../About/About'
import { Footer } from '../Footer/Footer';
import { Routes, Route, Navigate } from 'react-router-dom'
import { Main } from '../Main/Main'
import { SavedNews } from '../SavedNews/SavedNew'
import { SavedNewsHeader } from '../SavedNewsHeader/SavedNewsHeader'

function App() {
  function handleHeaderButton() {
    setIsLoggedIn(!isLoggedIn)
  }

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  const [isHomePageOpen, setIsHomePageOpen] = useState(true)
  const [isSaveArticlesPageIsOpen, setIsSaveArticlesPageIsOpen] = useState(false)
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<>
          <Header
            isLoggedIn={isLoggedIn}
            onClick={handleHeaderButton}
            isBurgerMenuOpen={isBurgerMenuOpen}
            setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            isHomePageOpen={isHomePageOpen}
            setIsHomePageOpen={setIsHomePageOpen}
            isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
            setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen}
          />
          <Main />
          <About />
          <Footer />
        </>}
        />
        <Route path='/saved-news' element={
          <SavedNews>
            <SavedNewsHeader
              isLoggedIn={isLoggedIn}
              onClick={handleHeaderButton}
              isBurgerMenuOpen={isBurgerMenuOpen}
              setIsBurgerMenuOpen={setIsBurgerMenuOpen}
              isHomePageOpen={isHomePageOpen}
              setIsHomePageOpen={setIsHomePageOpen}
              isSaveArticlesPageIsOpen={isSaveArticlesPageIsOpen}
              setIsSaveArticlesPageIsOpen={setIsSaveArticlesPageIsOpen} />
          </SavedNews>} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
