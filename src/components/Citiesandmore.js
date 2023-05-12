import React from 'react'

export default function Citiesandmore({name, sunny, other, citycall, humidity, pressure}) {
    
  return (
    <>
        <div class="line my-5"></div>
        <p>{name}</p>

        <div class="row px-3">
            <p class="light-text">Humidity</p>
            <p class="ml-auto">{humidity}%</p>
        </div>
        <div class="row px-3">
            <p class="light-text">Air Pressure</p>
            <p class="ml-auto">{pressure + " hPa"}</p>
        </div>

        <div class="line mt-5"></div>
        <div class="row px-3">
        <small class="light-text mt-2">Created with Weather API by <a className='text-info' href="https://github.com/felipepizarro1">Felipe Pizarro</a></small>
        </div>
    </>
    
  )
}