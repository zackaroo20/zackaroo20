"use strict";

function handleSubmit(event) {
   

    const city = document.getElementById("cityInput").value;
    
    
    
    if (city === "" || city.length < 3){
        alert("city mustn't be empty, more than 3 characters needed");
        
         event.preventDefault();
    }
    else {
       handleFetch(city);
       
       event.preventDefault();
      
    }

   
}
const sub = document.getElementById('submitBtn');
sub.addEventListener("click", handleSubmit);

function handleFetch(city) {
    let days = 7;

    let url = `https://api.weatherapi.com/v1/forecast.json?key=827d353bd9654d2495f54235231611&q=${city}&days=${days}&aqi=no&alerts=no`;


    fetch(url)

    .then(response =>
         response.json())

    .then(data =>{
        city = data.location.name;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            CurrentWeather(data);


        })
       
        })
       

    .catch((error) => 
        console.error("data trash: ", error));
}

function bestDay(data) {
const days = data.forecast.forecastday.slice(1);
let bestDay = days[0];
let bestDayBlock = document.getElementById("bestDay");

for (const d of days) {

    if (d.day.maxtemp_c > bestDay.day.maxtemp_c) {
        bestDay = d;
    }
}
bestDayBlock.textContent = `Best day for ${data.location.name} is ${bestDay.date} with a max temperature of ${bestDay.day.maxtemp_c}°C`;
}
function CurrentWeather(data) {
    let currentWeatherBlock = document.getElementById("currentWeather");
    currentWeatherBlock.textContent = `Current weather for ${data.location.name}: ${data.current.temp_c}°C, Current condition: ${data.current.condition.text}`;
}