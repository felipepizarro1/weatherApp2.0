import React from 'react'

export default function Mainday({cityName}) {
    
  return (
    <div class="row px-3 mt-3 mb-3">
        <h1 class="large-font mr-3">26&#176;</h1>
        <div class="d-flex flex-column mr-3">
            <h2 class="mt-3 mb-0">{cityName}</h2>
            <small>10:36 - Tuesday, 22 Oct '19</small>
        </div>
        <div class="d-flex flex-column text-center">
            <h3 class="fa fa-sun-o mt-4"></h3>
            <small>Sunny</small>
        </div>
    </div>
  )
}