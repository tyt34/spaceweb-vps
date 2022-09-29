import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../../app/store'
import './tariff.scss'
import { 
  IVpsPlans,
  ISelectType,
  ISelectOs
} from "../../../../../../shared/types/main"
import { availability } from '../../../../../../shared/constants/main'
import nvmeIco from "./assets/nvme.png"
import turboIco from "./assets/turbo.svg"
import hddIco from "./assets/hdd.png"

interface Props {
  info: IVpsPlans
}

const defaultSelectOs: ISelectType = {
  value: 'ubuntu-20-04',
  label: 'Ubuntu 20.04 LTS'
}

const defaultSelectSoft: ISelectType = {
  value: 'empty',
  label: 'Без ПО'
}

function Tariff(
  {
    info
  }: Props
): React.ReactElement {
  const {
    category, 
    cpu_cores, 
    datacenters, 
    disk_type, 
    price_per_month, 
    volume_disk,
    name,
    ram
  } = info
  console.log(' t: ', name, category, info)
  const storeData = useSelector( (store: RootState) => store.data)

  const [os, setOs] = useState<ISelectType>(defaultSelectOs)
  const [optionsOS, setOptionsOS] = useState<ISelectType[]>(
    [
      defaultSelectOs
    ]
  )

  const [soft, setSoft] = useState<ISelectType>(defaultSelectSoft)
  const [optionsSoft, setOptionsSoft] = useState<ISelectType[]>(
    [
      defaultSelectSoft
    ]
  )

  /**
   * Подгрузка дистрибутивов
   */
  useEffect(() => {
    storeData.result.selectOs.forEach( (dataOs) => {
      if (
        !optionsOS.some( (option: ISelectType) => {
          return option.value === dataOs.name
        })
      ) {
        setOptionsOS( 
          (optionsCategory: ISelectType[]) => [
            ...optionsCategory, 
            {
              value: dataOs.name,
              label: dataOs.description
            }
          ]
        )
      }
    })
  }, [storeData])

  /**
   * Подгрузка програмного обеспечения
   */
   useEffect(() => {
    availability.forEach( (ava) => {
      if (ava.name === os.value) { // ava.list это доступное по для данного дистрибутива        
        if (
          !ava.list.some( 
            (nameSoft) => {
              return nameSoft === soft.value
           }
          )
        ) {
          setSoft(defaultSelectSoft)
        } 
        let newOptions = [defaultSelectSoft]
        ava.list.forEach( (nameSoft) => {
          newOptions.push({
            value: nameSoft,
            label: nameSoft
          })
        })
        setOptionsSoft([...newOptions])
      }
    });
  }, [storeData, os])

  return (
    <section
      className='tariff'
    >
      <div
        className='tariff__top'
      >
        <img 
          className='tariff__ico'
          src={
            category === 'nvme' ? nvmeIco : 
            category === 'turbo' ? turboIco :
            category === 'hdd' ? hddIco : hddIco
          }
          alt="иконка отображающая категорию тарифного плана" 
        />
        <p
          className='tariff__title'
        >
          {name}
        </p>
      </div>

      <p 
        className='tariff__cost'
      >
        {price_per_month} ₽/мес.
      </p>

      <div
        className='tariff__power'
      >
        CPU {`\u00A0`} {/* пробел */}
        <p 
          className='tariff__power-number' 
        > 
          {cpu_cores} × 2,8 ГГц 
        </p>
      </div>

      <div
        className='tariff__power'
      >
        RAM {`\u00A0`} {/* пробел */}
        <p 
          className='tariff__power-number' 
        > 
          {ram} МБ
        </p>
      </div>

      <div
        className='tariff__power'
      >
        DISK {`\u00A0`} {/* пробел */}
        <p 
          className='tariff__power-number' 
        > 
          {volume_disk} {disk_type}
        </p>
      </div>

      <p
        className='tariff__text-select'
      >
        Дистрибутив
      </p>

      <div
        className='tariff__select'
      >
        <Select
          value={os}
          options={optionsOS}
          defaultValue={optionsOS[0]}
          onChange={ (select: any) => {
            setOs(select)
          }}
        />
      </div>

      <p
        className='tariff__text-select'
      >
        Програмное обеспечение
      </p>
      <div
        className='tariff__select'
      >
        <Select
          value={soft}
          options={optionsSoft}
          defaultValue={optionsSoft[0]}
          onChange={ (select: any) => {
            setSoft(select)
          }}
        />
      </div>

      <p
        className='tariff__text-select'
      >
        Дата-центр
      </p>

    </section>
  )
}

export default Tariff
