import React, {useState, useEffect} from 'react'
import './menu.scss'
import LinkMenu from './components/link-menu/link-menu'
// изображения для самого меню
import logo from "./assets/logo.png"
import icoMenu from "./assets/menu.png"
import grocery from "./assets/grocery-trolley.png"
// изображения для списка меню
import account from "./assets/account.png"
import domains from "./assets/domains.png"
import help from "./assets/help.png"
import idea from "./assets/idea.png"
import monitor from "./assets/monitor.png"
import seo from "./assets/seo.png"
import server from "./assets/server.png"
import shop from "./assets/shop.png"
import ssl from "./assets/ssl.png"

interface Props {
  menuIsOpen: boolean
  setMenuIsOpen: (menuIsOpen: boolean) => void
}

const listMenu: {title: string, img: string}[] = [
  {
    title: 'аккаунт',
    img: account
  },
  {
    title: 'серверы',
    img: server
  },
  {
    title: 'мониторинг',
    img: monitor
  },
  {
    title: 'домены',
    img: domains
  },
  {
    title: 'ssl',
    img: ssl
  },
  {
    title: 'магазин',
    img: shop
  },
  {
    title: 'seo и реклама',
    img: seo
  },
  {
    title: 'поддержка',
    img: help
  },
  {
    title: 'есть идея',
    img: idea
  },
]

function Menu(
  {
    menuIsOpen,
    setMenuIsOpen
  }: Props): React.ReactElement {

  const { width } = useWindowDimensions()

  function useWindowDimensions(): { width: number } {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    )

    useEffect(() => {
      function handleResize(): void {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
  }

  function getWindowDimensions(): { width: number } {
    const { innerWidth: width } = window

    return {
      width
    }
  }

  function handleMenu() {
    if (width < 1280) {
      setMenuIsOpen(menuIsOpen)
    }
  }

  useEffect( () => {
    if (width < 1280) {
      setMenuIsOpen(false)
    }
  }, [width])

  return (
    <section
    className={
      menuIsOpen ?
      'menu-close'
      :
      'menu'
    }
    >
      <div
        className='menu__top'
      >
        <a 
          href="https://sweb.ru/"
        >
          <img 
            className='menu__logo'
            src={logo}
            alt="логотип компании" 
          />
        </a>
        <button
          className={
            menuIsOpen ?
            'menu__button-menu menu__button-menu-open'
            :
            'menu__button-menu'
          }
          onClick={handleMenu}
        >
          <img 
            className='menu__menu-ico'
            src={icoMenu}
            alt="иконка кнопки открытия/закрытия меню" 
          />
        </button>
      </div>

      <div
        className='menu__name'
      >
        <img 
          className='menu__name-ico'
          src={grocery}
          alt="" 
        />
        <p
          className='menu__link-text'
        >
          Заказать VPS
        </p>
      </div>
      
      <div
        className='menu__list'
      >
        {
          listMenu.map( (el) => (
            <LinkMenu 
              key={el.title}
              title={el.title}
              img={el.img}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Menu

