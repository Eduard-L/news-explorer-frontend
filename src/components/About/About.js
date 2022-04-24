import './About.css'
import imageSrc from '../../images/aboutImage.jpg'
import { useEffect } from 'react'
export function About({ isHomePageOpen, setIsHomePageOpen, setIsSaveArticlesPageIsOpen }) {
  useEffect(() => {
    if (isHomePageOpen) return
    setIsHomePageOpen(true)
    setIsSaveArticlesPageIsOpen(false)
  }, [])


  return (
    <section className='about'>
      <img className='about__image' src={imageSrc} alt='women image' />
      <div className='about__text-wrapper'>
        <h2 className='about__title'>About the author</h2>
        <p className='about__subtitle'>This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</p>
        <p className='about__subtitle'>You can also talk about your experience with Practicum, what you learned there, and how you can help potential customers.</p>
      </div>
    </section>
  )
}