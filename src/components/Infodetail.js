import React from 'react'

export default function Infodetail({min,max}) {
  return (
    <div class="row px-3 mt-3 mb-3">
        <div class="d-flex flex-column text-center mx-4">
            <small>Min.</small>
            <h3 class="fa fa-sun-o mt-2"></h3>
            <small>{min}&#176;</small>
        </div>
        <div class="d-flex flex-column text-center mx-4">
            <small>Max. </small>
            <h3 class="fa fa-sun-o mt-2"></h3>
            <small>{max}&#176;</small>
        </div>
        {/* comment here 
        <div class="d-flex flex-column text-center mx-4">
            <small>10:30 </small>
            <h3 class="fa fa-sun-o mt-2"></h3>
            <small>26&#176;</small>
        </div>
        <div class="d-flex flex-column text-center mx-4">
            <small>10:30 </small>
            <h3 class="fa fa-sun-o mt-2"></h3>
            <small>26&#176;</small>
        </div>
        <div class="d-flex flex-column text-center mx-4">
            <small>10:30 </small>
            <h3 class="fa fa-sun-o mt-2"></h3>
            <small>26&#176;</small>
        </div>
        <div class="d-flex flex-column text-center mx-4">
            <small>10:30 </small>
            <h3 class="fa fa-sun-o mt-2"></h3>
            <small>26&#176;</small>
        </div>
        <div class="d-flex flex-column text-center mx-4">
            <small>10:30 </small>
            <h3 class="fa fa-sun-o mt-2"></h3>
            <small>26&#176;</small>
        </div>
        */}
        
    </div>
  )
}
