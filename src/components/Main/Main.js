import './Main.css'
import { About } from '../About/About'
import { NewsCardList } from '../NewsCardList/NewsCardList'


export function Main({ children }) {
  return (
    <main>
      {children}
    </main>
  )
}