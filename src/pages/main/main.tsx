import React, { useEffect, useState } from 'react'
import './main.scss'
import Menu from './components/menu/menu'
import Roof from './components/roof/roof'
import Footer from './components/footer/footer'
import { getData } from '../../shared/api/main'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getDataFromApi } from './main.slice'

function Main(): React.ReactElement {
  const dispatch = useDispatch()
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true)
  const storeData = useSelector( (store: any) => store.data)

  useEffect(() => {
    getData()
      .then((res) => {
        dispatch(getDataFromApi(res))
      })
  }, [])

  function changeMenuIsOpen(menuIsOpen: boolean): void {
    setMenuIsOpen(!menuIsOpen)
  }

  useEffect(() => {
    console.log(' d: ', storeData)
  }, [storeData])

  //console.log(' menuIsOpen: ', menuIsOpen, storeData)

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
