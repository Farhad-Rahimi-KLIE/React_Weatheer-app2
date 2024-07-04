import React from 'react'

const wheathercard = ({tempinfo}) => {
    const {
        temp,
        humidity,
        pressure,
        name,
        speed,
        country,
        sunset,
    } = tempinfo;
  return (
    <div>
       <div className="main-temp">
        <div className="wheatherInfo">
            <span className='deg'>{temp}&deg;</span>
            <span className='temp'>Sunny</span><br />
            <span className='count'>{name}, {country}</span>
            </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="footer1">
            <span className='pm'>{sunset} PM</span>
            <span className='sun'>Sunset</span>

            <span className='hum'>{humidity}</span>
            <span className='mid'>Humidity</span>

            <span className='pre'>Presure</span>
            <span className='jan'>{pressure}PM</span>

            <span className='wid'>Wind</span>
            <span className='www'>{speed}</span>
        </div>
      </div>
    </div>
  )
}

export default wheathercard
