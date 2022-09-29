import React, { useEffect, useState } from 'react'
import './list.scss'
import Select from 'react-select'
import {
  ISelectType,
  IVpsPlans
} from '../../../../shared/types/main'
import { RootState } from '../../../../app/store'
import { useSelector } from 'react-redux'
import Tariff from './components/tariff/tarif'

const defaultSeletType: ISelectType = {
  value: 'all',
  label: 'Все'
}

interface Props {
  menuIsOpen: boolean
}

function List({
  menuIsOpen
}: Props): React.ReactElement {
  const storeData = useSelector((store: RootState) => store.data)
  const [category, setCategory] = useState<ISelectType>(defaultSeletType)
  const [optionsCategory, setOptionsCategory] = useState<any>(
    [
      defaultSeletType
    ]
  )
  const [filterData, setFilterData] = useState<IVpsPlans[]>([{
    billing_id: '',
    category: 'hdd',
    category_id: '',
    constructor: '',
    cpu_cores: '',
    datacenters: [1],
    disk_type: '',
    id: 0,
    is_promo: '',
    name: '',
    package_duration: '',
    parent_plan_id: null,
    price_per_month: 0,
    price_per_month_promo: 0,
    ram: '',
    ts_create: '',
    ts_update: '',
    units: '',
    volume_disk: '',
    year_price_per_month: 0,
    year_price_per_month_promo: 0
  }])

  useEffect(() => {
    storeData.result.categories.forEach((cat) => {
      /**
       * Проверка, чтобы не было категорий в которых 0 элементов
       * и чтобы не добавилась категория повторно
       */
      if (
        storeData.result.vpsPlans.some((el) => {
          return el.category === cat.slug
        }) &&
        !optionsCategory.some((el: ISelectType) => {
          return el.value === cat.name
        })
      ) {
        setOptionsCategory(
          (optionsCategory: ISelectType[]) => [
            ...optionsCategory,
            {
              value: cat.slug,
              label:
                cat.slug === 'nvme'
                  ? 'NVMe (KVM)'
                  : cat.slug === 'turbo'
                    ? 'HighCPU (Turbo)'
                    : 'Большого объема (HDD)'
            }
          ]
        )
      }
    })
  }, [storeData])

  // console.log(' o:', optionsCategory)

  useEffect(() => {
    console.log(' o:', category)
    const arrForFilter: IVpsPlans[] = []
    storeData.result.vpsPlans.forEach((tariff: IVpsPlans) => {
      if (category.value === 'all') {
        arrForFilter.push(tariff)
      } else {
        if (tariff.category === category.value) {
          arrForFilter.push(tariff)
        }
      }
    })
    setFilterData([...arrForFilter])
  }, [category, storeData])

  return (
    <section
      className={
        menuIsOpen ? 'list' : 'list-move'
      }
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

      <div className='list__main'>
        <section
          className='list__tariffs'
        >
          {
            filterData.map((tariff: IVpsPlans) => (
              <Tariff
                key={tariff.id}
                info={tariff}
              />
            ))
          }
        </section>
      </div>
    </section>
  )
}

export default List
