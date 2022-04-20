
import './App.css';
import { Header } from '../Header/Header'
import { useState } from 'react'

function App() {
  function handleHeaderButton() {
    setIsLoggedIn(!isLoggedIn)
  }

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onClick={handleHeaderButton} isBurgerMenuOpen={isBurgerMenuOpen} setIsBurgerMenuOpen={setIsBurgerMenuOpen} />


    </div>
  );
}

export default App;
