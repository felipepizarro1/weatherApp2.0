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
    const [update, setUpdate] = useState("Milano")
    const [content, setContent] = useState([])

    useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${update}&appid=${API_KEY}${tempmesure}`)
      .then(response => response.json())
      .then(json => setContent(json.main))
    }, [update,tempmesure])

    

    function rome(){
        setUpdate((pupdate) => pupdate = "Rome")
    }
    function santiago(){
        setUpdate((pupdate) => pupdate = "Santiago")
    }
    function losangeles(){
        setUpdate((pupdate) => pupdate = "Los Angeles")
    }

    function farenheit (){
      setTempmesure((pupdate) => pupdate = "")
    }

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
                          <Headerunit temp={farenheit}/>
                          <Mainday cityName={update} temperature={content.temp}/>
                          <Infodetail/>
                        </div>
                        <div class="card2 col-lg-4 col-md-5">
                          <Searchbar/>
                          <Citiesandmore name="Weather Details" sunny="poto" other="rrr" citycall={santiago}/>
                        </div>
                    </div>
                </div>
              </div>

    
  );
}

export default App;
