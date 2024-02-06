import React from 'react'

function fiveDaysWeather() {
  return (
    <div>
        <div class="ui four cards">
            <a class="red card">
                <div>
                <img src={`http://openweathermap.org/img/wn/10d@4x.png`} />
                </div>
            </a>
            <a class="orange card">
                <div class="image">
                <img src={`http://openweathermap.org/img/wn/10d@4x.png`} />
                </div>
            </a>
            <a class="yellow card">
                <div class="image">
                <img src={`http://openweathermap.org/img/wn/10d@2x.png`} />
                </div>
            </a>
            <a class="olive card">
                <div class="image">
                <img src={`http://openweathermap.org/img/wn/10d@2x.png`} />
                </div>
            </a>
            <a class="green card">
                <div class="image">
                <img src={`http://openweathermap.org/img/wn/10d@2x.png`} />
                </div>
            </a>
        </div>
    </div>
  )
}

export default fiveDaysWeather
