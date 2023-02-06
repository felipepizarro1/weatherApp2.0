import React from 'react'

export default function Mainday({cityName, temperature, feels}) {
    
  return (
    <div class="row px-3 mt-3 mb-3">
        <h1 class="large-font mr-3">{temperature}&#176;</h1>
        <div class="d-flex flex-column mr-3">
            <h2 class="mt-3 mb-0">{cityName}</h2>
            <small>Currently</small>
        </div>
        <div class="d-flex flex-column text-center">
            <h3 class="fa fa-sun-o mt-4"></h3>
            <small>Feels like {feels}</small>
        </div>
        
    </div>
  )
}