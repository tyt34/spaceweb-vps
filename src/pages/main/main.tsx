import React, { useEffect, useState } from 'react'
import './main.scss'
import Menu from './components/menu/menu'
import Roof from './components/roof/roof'
import Footer from './components/footer/footer'
import List from './components/list/list'
import { getData } from '../../shared/api/main'
import { useDispatch } from 'react-redux'
import { getDataFromApi } from './main.slice'

function Main(): React.ReactElement {
  const dispatch = useDispatch()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true)

  useEffect(() => {
    getData()
      .then((res) => {
        dispatch(getDataFromApi(res))
      })
  }, [])

  function changeMenuIsOpen(menuIsOpen: boolean): void {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <div
      className={
        menuIsOpen
          ? 'main'
          : 'main-hidden'
      }
    >
      <Roof
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={changeMenuIsOpen}
      />
      <Menu
        menuIsOpen={menuIsOpen}
        setMenuIsOpen={changeMenuIsOpen}
      />

      <List
        menuIsOpen={menuIsOpen}
      />

      <Footer />
    </div>
  )
}

export default Main
