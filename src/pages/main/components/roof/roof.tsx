import React from 'react'
import './roof.scss'
import icoMenu from './assets/ico-menu.png'
import notice from './assets/notice.png'

interface Props {
  menuIsOpen: boolean
  setMenuIsOpen: (menuIsOpen: boolean) => void
}

function Roof(
  {
    menuIsOpen,
    setMenuIsOpen
  }: Props): React.ReactElement {
  return (
    <section
      className={
        menuIsOpen
          ? 'roof'
          : 'roof roof-open'
      }
    >
      <div
        className={
          menuIsOpen
            ? 'roof__main'
            : 'roof__main roof__main-open'
        }
      >
        <button
          className={
            menuIsOpen
              ? 'roof__button-menu'
              : 'roof__button-menu roof__button-menu-open'
          }
          onClick={ () => { setMenuIsOpen(menuIsOpen) }}
        >
          <img
            className='roof__menu-ico'
            src={icoMenu}
            alt="иконка кнопки открытия/закрытия меню"
          />
        </button>
        <div
          className='roof__panel'
        >
          <p
            className='roof__balance'
          >
            3467 ₽
          </p>
          <img
            className='roof__notice'
            src={notice}
            alt=""
          />
          <p
            className='roof__user'
          >
            hesoyam_user
          </p>
          <button
            className='roof__button-exit'
          >
            <p
              className='roof__text-exit'
            >
              Выйти
            </p>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Roof
