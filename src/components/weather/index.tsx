import React, { FC, useState } from 'react'

import * as styles from './index.module.css'

import type { Maybe, Perhaps } from '../../types'
import { IResult } from 'Weather'

interface IWeatherProps {
  lat: number
  long: number
}

interface IAPIResponse {
  data: IResult
}

// Returns the data or null on error
const fetchUserData = async (lat: number, long: number): Promise<Perhaps<IResult>> => {
  try {
    const res = await fetch('/.netlify/functions/weather', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lat, long })
    })

    const response = await res.json() as IAPIResponse

    return response.data
  } catch (e) {
    console.warn(e)

    return null
  }
}

const Weather: FC<IWeatherProps> = ({ lat, long }) => {
  const [data, setData] = useState<Maybe<IResult>>(undefined)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [isError, setError] = useState<boolean>(false)

  const handleClick = (): void => {
    setLoading(true)
    void fetchUserData(lat, long).then(data => {
      if (data === null) {
        setError(true)

        return
      }

      setData(data)
      setLoading(false)
    })
  }

  if (isLoading) {
    return (<div>
      ...loading
    </div>)
  }

  if (isError) {
    return (<div>
      Something went wrong
    </div>)
  }

  if (data != null) {
    return (
      <div className={styles.dataWrapper}>
        <div className="current">
          Today's conditions are <strong>{data.currentConditions.conditions}</strong>
        </div>
        <div className="predictions">
          <table>
            <thead>
              <th>Date</th>
              <th>Condition</th>
              <th>Feels Like</th>
            </thead>

            <tbody>
            {data.days.map(day => (
              <tr key={day.datetime}>
                <td>{day.datetime}</td>
                <td>{day.conditions}</td>
                <td>{day.feelslike}</td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={handleClick}>Get Weather Prediction</button>
    </div>
  )
}

export default Weather
