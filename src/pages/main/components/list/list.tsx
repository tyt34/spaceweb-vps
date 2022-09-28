import React, { useEffect, useState } from 'react'
import './list.scss'
import Select from 'react-select'
import {
  ISelectType,
  IVpsPlans
} from "../../../../shared/types/main"
import { RootState } from '../../../../app/store'
import { useSelector } from 'react-redux'
import Tariff from './tariff/tarif'

const defaultSeletType: ISelectType = { 
  value: 'all', 
  label: 'Все' 
}

function List(): React.ReactElement {
  const storeData = useSelector( (store: RootState) => store.data)
  const [category, setCategory] = useState<ISelectType>(defaultSeletType)
  const [optionsCategory, setOptionsCategory] = useState<any>(
    [
      defaultSeletType,
    ]
  )

  useEffect(() => {
    storeData.result.categories.forEach( (cat) => {
      /**
       * Проверка, чтобы не было категорий в которых 0 элементов
       * и чтобы не добавилась категория повторно
       */ 
      if (
        storeData.result.vpsPlans.some( (el) => {
          return el.category === cat.slug
        })
        &&
        !optionsCategory.some( (el: ISelectType) => {
          return el.value === cat.name
        })
      ) {
        setOptionsCategory( 
          (optionsCategory: ISelectType[]) => [
            ...optionsCategory, 
            {
              value: cat.name,
              label: cat.slug
            }
          ]
        )
      }
    });
  }, [storeData])

  useEffect(() => {
    console.log(' o:', optionsCategory)
  }, [optionsCategory])

  return (
    <section
      className='list'
    >
      <p
        className='list__account'
      >
        АККАУНТ
      </p>
      <p
        className='list__order'
      >
        Заказать VPS
      </p>
      <p
        className='list__category'
      >
        Категория
      </p>
      <div
        className='list__select'
      >
        <Select
          value={category}
          className='menu__sort-select menu__sort-options'
          options={optionsCategory}
          defaultValue={optionsCategory[0]}
          onChange={ (select) => {
            setCategory(select)
          }}
        />
      </div>

      <section
        className='list__tariffs'
      >
        {
          storeData.result.vpsPlans.map( (tariff: IVpsPlans) => (
            <Tariff 
              key={tariff.id}
              info={tariff}
            />
          ))
        }
      </section>
      
    </section>
  )
}

export default List
