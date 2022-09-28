import React from 'react'
import './tariff.scss'
import { IVpsPlans } from "../../../../../shared/types/main"

interface Props {
  info: IVpsPlans
}

function Tariff(
  {
    info
  }: Props
): React.ReactElement {

  console.log(' t: ', info.name, info)

  return (
    <section
      className='tariff'
    >
      <div
        className='tariff__top'
      >
        <img 
          className='tariff__ico'
          src="" 
          alt="иконка отображающая категорию тарифного плана" 
        />
        <p
          className='tariff__title'
        >
          {info.name}
        </p>
      </div>
    </section>
  )
}

export default Tariff
