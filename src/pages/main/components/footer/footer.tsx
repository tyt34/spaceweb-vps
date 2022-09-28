import React from 'react'
import './footer.scss'
import google from './assets/google.png'
import apple from './assets/apple.png'

function Footer(): React.ReactElement {
  function getNowYear(): string {
    const date = new Date()
    return date.getFullYear().toString()
  }

  return (
    <section
      className='footer'
    >
      <div
        className='footer__text-about'
      >
        <p>
          © 2001–{getNowYear()} ООО <span className='footer__text-blue'>«СпейсВэб»</span>
        </p>
        <p>
          Все права защищены.
        </p>
        <p>
          Лицензия <span className='footer__text-blue'>№163230</span>
        </p>
      </div>

      <div
        className='footer__text-app'
      >
        <p>
          Скачать приложение
        </p>
        <a
          className='footer__link-app'
          href="https://play.google.com/store/apps/details?id=ru.sweb.app&hl=ru"
        >
          <img
            className='footer__link-img'
            src={google}
            alt="иконка приложения google play"
          />
        </a>

        <a
          className='footer__link-app'
          href="https://apps.apple.com/ru/app/spaceweb-%D1%85%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%B3/id1583597572"
        >
          <img
            className='footer__link-img'
            src={apple}
            alt="иконка приложения apple store"
          />
        </a>
      </div>

      <div
        className='footer__text-numbers'
      >
        <p>
          <span className='footer__text-blue'>+7 (812) 334-12-22</span> (в Санкт-Петербурге)
        </p>
        <p>
          <span className='footer__text-blue'>+7 (495) 663-16-12</span> (в Москве)
        </p>
        <p>
          <span className='footer__text-blue'>+7 (800) 100-16-15</span> (бесплатно по России)
        </p>
      </div>
    </section>
  )
}

export default Footer
