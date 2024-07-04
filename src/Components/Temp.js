import React, { useEffect, useState } from 'react'
import Wheathercard from './WheatherCard'
import './style.css'
const Temp = () => {
    const [searchValue,setSearchValue] = useState("afghan");
    const [tempinfo,setTempinfo] = useState({});

    const getWeatherInfo = async ()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=f02b216d1fcbcc0660a74500c587d7d6`;
            const res = await fetch(url);
            const data = await res.json();
            const {temp,humidity,pressure} = data.main;
            const {name} = data;
            const {speed} = data.wind;
            const {country,sunset} = data.sys;
            console.log(temp)
            const wheatherjan = {
              temp,
              humidity,
              pressure,
              name,
              speed,
              country,
              sunset,
            };
            setTempinfo(wheatherjan)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getWeatherInfo()
    },[])
  return (
    <>
      <div className="search-bar">
        <input type="text" className='search' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)} placeholder='Search City'/>
        <div>
            <button className='btn btn-success' onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      <Wheathercard tempinfo={tempinfo}/>
    </>
  )
}

export default Temp
