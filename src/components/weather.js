import React, { createContext, useState } from 'react';
import '../styles.css';
import { Container, Tab, Loader, Popup } from 'semantic-ui-react'
import TodayWeather from "./todayWeather.js";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

   
    const panes = (weatherData) =>{
        return [
            {
                menuItem: 'Today Weather',
                render: () => 
                <Tab.Pane className='tab'screenOptions={{
                    tabBarStyle: {
                      backgroundColor: 'orange',
                    },
                  }}>
                    {(typeof weatherData.main != 'undefined') ? (
                        <div>
                            <TodayWeather weatherData={weatherData}/>
                        </div>    
                    ): (
                        <div className='info'><Loader active inline /><br/>Can't get city's weahter data!</div>
                    )}
                </Tab.Pane>
            },
            // {
            //     menuItem: 'Tomorrow Weather',
            //     render: () => 
            //     <Tab.Pane>
                    
            //     </Tab.Pane>
            // },
        ]
    };
    

const Weather = () => {

    //For Dark and Light Theme
    const [theme, setTheme] =useState("light");

    function toggleTheme() {
        console.log("In toggle function");
        setTheme((curr) => (curr === "light")? "dark" : "light");
    }

    //To get current location
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    //To store weather data
    const [weather, setWeather] = useState([]);
    const [cityName, setCityName] = useState([]);

    function cityNameChange(e) {
        setCityName(e.target.value)
    }

    function cityNameSearch(e) {
        e.preventDefault()
        const fetchData = async () => {
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
            //await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`)
              .then(res => res.json())
              .then(result => {
                setWeather(result)
                console.log(result);
              });
          }
          fetchData();
    }

    function currentCity(){
        const fetchData = async () => {
            navigator.geolocation.getCurrentPosition(function(position) {
              setLat(position.coords.latitude);
              setLong(position.coords.longitude);
            });
      
            await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
            //await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=a25f27a25853fafbf1aeecea35cf305f`)
            //await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Yangon&appid=${process.env.REACT_APP_API_KEY}`) 
              .then(res => res.json())
              .then(result => {
                setWeather(result)
                console.log(result);
              });
          }
          fetchData();
    }

    function currentCityClick(e){
        e.preventDefault()
        currentCity()
    }

      return(
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>
                <div className='main'>
                    <form>
                        <div>
                            <div class="ui action input">
                                <input type="text" className='inputCityName' name='cityName' value={cityName} onChange={cityNameChange} placeholder="Search..."/>
                                <button class="ui icon button btnCitySearch" onClick={cityNameSearch}>
                                    <i aria-hidden="true" class="search icon iconSearch"></i>
                                </button>
                            </div>
                            
                            <Popup trigger={<div className='switch'><ReactSwitch  onChange={toggleTheme} checked={theme === "dark"}/><div className='textColor'><b>Dark Mode</b></div></div>}> 
                                <div>Change to {(theme === 'light')? 'dark' : 'light'} mode</div>
                            </Popup>
                            
                        </div>
                        <h3 class="ui header textColor">Weather in {cityName}</h3>
                        <button class="ui button btnCurrentCity" onClick={currentCityClick}>Current Location</button>
                    </form>
                    <Tab panes={panes(weather)} />
                </div>
            </div>
        </ThemeContext.Provider>
      )
}


export default Weather;