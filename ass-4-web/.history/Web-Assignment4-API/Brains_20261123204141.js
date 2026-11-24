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

    const url = `https://api.weatherapi.com/v1/forecast.json?key=827d353bd9654d2495f54235231611&q=${city}&days=7&aqi=no&alerts=no`;


    fetch(url)

    .then(response =>
         response.json())

    .then(data =>
         displayInfo(data))

    .catch((error) => 
        console.error("data trash: ", error));
}

function displayInfo(data) {
    let cityName = data.location.name;
    let countryName = data.location.country;
    let temp = data.current.temp_c;
    let responseBlock = document.getElementById("bruh");
    responseBlock.textContent = `Country: ${countryName}, City: ${cityName}, Temperature: ${temp}°C`;

    



    
}