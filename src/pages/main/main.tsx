import React, { useState } from 'react'
import './main.scss'
import Menu from './components/menu/menu'
import Roof from './components/roof/roof'
import Footer from './components/footer/footer'

function Main(): React.ReactElement {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true)

  function changeMenuIsOpen(menuIsOpen: boolean): void {
    setMenuIsOpen(!menuIsOpen)
  }

  //console.log(' menuIsOpen: ', menuIsOpen)

  return (
    <div
      className='main'
    >
      <Roof 
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={changeMenuIsOpen}
      />
      <Menu 
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={changeMenuIsOpen}
      />

      <Footer />
    </div>
  )
}

export default Main

