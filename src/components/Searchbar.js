import React from 'react'
import { useState} from 'react';
import { AsyncPaginate } from 'react-select-async-paginate'

export default function Searchbar({onSearchChange}) {

  const [search, setSearch] = useState(null);
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
    onChange={handleOnChange}/>                       
        <input type="text" name="location" placeholder="Another locations" class="mb-5 text-capitalize"></input>
        <div class="fa fa-search mb-5 mr-0 text-center"></div> 
    </div>
    </>
  )
}