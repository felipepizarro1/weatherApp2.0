import './App.css';
import Headerunit from './components/Headerunit';
import Mainday from './components/Mainday';
import Infodetail from './components/Infodetail';
import Searchbar from './components/Searchbar';
import Citiesandmore from './components/Citiesandmore';
import React, { useState, useEffect } from 'react';




function App() {

    

    const API_KEY = "84ea03d648cf9492e6c4d8b23085e149"

    const [tempmesure, setTempmesure] = useState("&units=metric")

    const [words, setWords] = useState("Milano")
    const [update, setUpdate] = useState(words)
    const [content, setContent] = useState([])


    const handleTemp = () => {
      if(tempmesure = "&units=metric"){
       return setTempmesure("&units=imperial")
      }
      else if(tempmesure = "&units=imperial"){
        return setTempmesure("&units=metric")
      }

    }

    const handleChange = (event) => {
      {setWords(event.target.value)}

    }

    const handleClick = () => {
      setUpdate(words)
    }

    

    useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${update}&appid=${API_KEY}${tempmesure}`)
      .then(response => response.json())
      .then(json => 
        
        setContent(json.main)
    
        )
    }, [update,tempmesure])

    
  // const fetchWeather = async () => {
  //   const data = await getFormattedWeatherData({ q: "tokyo"});
  //   return data;
  // };

  // fetchWeather();
  
  return (
              <div class="container-fluid px-1 px-sm-3 py-5 mx-auto">
                <div class="row d-flex justify-content-center">
                  
                    <div class="row card0">
                        <div class="card1 col-lg-8 col-md-7">
                          <Headerunit action={handleTemp}/>
                          <Mainday cityName={update} temperature={Math.round(content.temp)} feels={content.feels_like}/>
                          <Infodetail min={Math.round(content.temp_min)} max={Math.round(content.temp_max)}/>
                        </div>
                        <div class="card2 col-lg-4 col-md-5">
                        <div class="row px-3"> 
                        <input type="text" name="location" placeholder="Search" class="mb-5 text-capitalize" onChange={handleChange}  />
                        <button className= "fa fa-search mb-5 mr-0 text-center border-0" onClick={handleClick} />
                        
                        {content.isArray ? content.filter((val)=> {
                          if(update == ""){
                            return
                          } else if(val.name.toLowerCase().includes(update.toLowerCase())){
                            return val

                          }
                          
                        })
                        
                        : null}
                      
                        </div> 
                          <Citiesandmore name="Weather Details"  citycall humidity={content.humidity} cloudiness={content.clouds}/>
                        </div>
                    </div>
                </div>
              </div>

    
  );
}

export default App;