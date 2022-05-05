import './About.css'
import imageSrc from '../../images/my_image.jpg'
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
        <p className='about__subtitle'>Eduard Loktev is a Full Stack Developer, currently working with React on the client-side and with NodeJS on the server-side, graduated from Practicum by Yandex Web Dev Program In May 2022. </p>
        <p className='about__subtitle'>He has a great passion for coding and writing complicated algorithms. He's an excellent team player and fast self-learner that loves helping developers solve their bugs, Happily participates in every available code-jam.</p>
      </div>
    </section>
  )
}