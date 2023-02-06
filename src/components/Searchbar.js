import React from 'react'
import { useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate'

export default function Searchbar({onSearchChange}) {

  const API_KEY = "84ea03d648cf9492e6c4d8b23085e149";

  const [search, setSearch] = useState(null);
  const [update, setUpdate] = useState("Milano")
  const [tempmesure, setTempmesure] = useState("&units=metric")
  const [content, setContent] = useState([])

  const loadOptions = (inputValue) => {
    /*la query (q=) tiene que llevar el resultado del inputValue */
     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}${tempmesure}`)
     .then(response => response.json())
     .then(json => setContent(json.main))
  }
  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  }

  return (
    <>
    
    <div class="row px-3">   
    <AsyncPaginate
    
    placeholder="Search for city"
    debounceTimeout={600}
    value={search}
    onChange={handleOnChange}
    loadOptions={loadOptions}
    />                       
        <input type="text" name="location" placeholder="Another locations" class="mb-5 text-capitalize"></input>
        <div class="fa fa-search mb-5 mr-0 text-center"></div> 
    </div>
    </>
  )

  /*Tendría que meter en una variable el nombre de la query insertada por el usuario, y luego esta variable importarla en app y pasarla en query a la fetch que está entregando los datos a los demás componentes */
}