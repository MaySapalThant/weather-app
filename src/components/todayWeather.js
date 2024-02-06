import React from 'react';
import '../styles.css';
import { Card, Divider, Flag, Image} from 'semantic-ui-react'
import moment from 'moment/moment';

function createCard(weatherData){

    let cards = [];
    cards.push(
        <div>
            <Card fluid className='card1'>
                <Card.Content>
                    <Card.Header className="headerCus">{weatherData.name}, {weatherData.sys.country} &nbsp;&nbsp;<Flag name={(weatherData.sys.country).toLowerCase()} /></Card.Header>
                    <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}  />
                    <p>{moment().format('dddd')}, {moment().format('LL')}</p>
                    <Divider hidden></Divider>
                    <div class="ui three column grid">
                        <div class="row">
                            <div class="column">
                                <div class="ui centered five column grid">
                                    <div class="row">
                                        <div class="column three">
                                            <h4>Temprature</h4>
                                            {weatherData.main.temp}&deg;C
                                        </div>
                                        <div class="column two">
                                            <i aria-hidden="true" class="thermometer half icon huge iconData"></i>
                                        </div>
                                    </div>  
                                </div>     
                            </div>
                            <div class="column">
                                <div class="ui centered five column grid">
                                    <div class="row">
                                        <div class="column three">
                                            <h4>Wind Speed</h4>
                                            {weatherData.wind.speed}
                                        </div>
                                        <div class="column two">
                                            <i aria-hidden="true" class="paper plane icon huge iconData"></i>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui centered five column grid">
                                    <div class="row">
                                        <div class="column three">
                                            <h4>Sunrise</h4>
                                            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
                                        </div>
                                        <div class="column two">
                                            <i aria-hidden="true" class="sun icon huge iconData"></i>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="column">
                                <div class="ui centered five column grid">
                                    <div class="row">
                                        <div class="column three">
                                            <h4>Humidity</h4>
                                            {weatherData.main.humidity}%
                                        </div>
                                        <div class="column two">
                                            <i aria-hidden="true" class="tint icon huge iconData"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui centered five column grid">
                                    <div class="row">
                                        <div class="column three">
                                            <h4>Clouds</h4>
                                            {weatherData.clouds.all} {weatherData.clouds.name}
                                        </div>
                                        <div class="column two">
                                            <i aria-hidden="true" class="cloud icon huge iconData"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="ui centered five column grid">
                                    <div class="row">
                                        <div class="column three">
                                            <h4>Sunset</h4>
                                            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}
                                        </div>
                                        <div class="column two">
                                            <i aria-hidden="true" class="sun outline icon huge iconData"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Divider hidden></Divider>
                    <p>Today will be {weatherData.weather[0].description}.</p>
                </Card.Content>
            </Card>
        </div>
    )
    return cards;
}

function todayWeather(data) {
    const weatherData = data.weatherData;
    console.log("IN weather",weatherData);
    
  return (
    <div>
        {createCard(weatherData)}
    </div>  
  )
}

export default todayWeather
