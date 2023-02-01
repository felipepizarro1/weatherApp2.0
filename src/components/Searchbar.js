import React from 'react'
import { useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate'

export default function Searchbar({onSearchChange}) {

  const [search, setSearch] = useState(null);

  const loadOptions = (inputValue) => {
     return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${update}&appid=${API_KEY}${tempmesure}`)
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
}