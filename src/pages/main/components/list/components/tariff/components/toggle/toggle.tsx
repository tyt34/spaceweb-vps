import React, { useEffect } from 'react'
import './toggle.scss'

interface Props {
  dataCenter: boolean
  datacenters: number[]
  setDataCenter: (dataCenter: boolean) => void
  name: string
}

function Toggle({
  dataCenter,
  setDataCenter,
  datacenters,
  name
}: Props): React.ReactElement {
  useEffect(() => {
    if (datacenters.length !== 2) {
      if (datacenters[0] === 1) {
        setDataCenter(true)
      } else if (datacenters[0] === 2) {
        setDataCenter(false)
      }
    }
  }, [datacenters])

  return (
    <div
      className="checkbox"
    >
      <section
        className="check"
      >
        <input
          type="checkbox"
          className="check-checkbox"
          name={'toggleSwitch ' + name}
          id={'toggleSwitch ' + name}
          checked={dataCenter}
          onChange={ () => {
            if (datacenters.length === 2) {
              setDataCenter(dataCenter)
            }
          }}
        />
          <label
            className={
              datacenters.length === 2
                ? 'check-label'
                : 'check-label not-pointer'
            }
            htmlFor={'toggleSwitch ' + name}
          >
            <span
              className="check-inner"
            >
            </span>
            <span
              className="check-switch"
            >
            </span>
            <span className='check__description'>
              {
                dataCenter
                  ? (
                  <>
                    <p className="check__text-left blue">
                      Санкт-Петербург
                    </p>
                    <p className="check__text-right white">
                      Москва
                    </p>
                  </>
                    )
                  : (
                  <>
                    <p className="check__text-left white">
                      Санкт-Петербург
                    </p>
                    <p className="check__text-right blue">
                      Москва
                    </p>
                  </>
                    )
              }
            </span>
          </label>
      </section>
    </div>
  )
}

export default Toggle
