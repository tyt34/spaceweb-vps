import React from 'react'
import './link-menu.scss'

interface Props {
  title: string
  img: string
}

function LinkMenu(
  {
    title,
    img
  }: Props
): React.ReactElement {
  return (
    <a
      className='link'
      href="https://sweb.ru/"
    >
      <img
        className='link__img'
        src={img}
        alt="иконка меню"
      />
      <p
        className='link__text'
      >
        {title}
      </p>
    </a>
  )
}

export default LinkMenu
