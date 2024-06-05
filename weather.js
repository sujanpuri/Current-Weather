let result = document.getElementById("weatherInfo");
let searchBtn = document.getElementById("searchButton");
let cityRef = document.getElementById("cityInput");
key = "aa3a39927d238e1eb9c17c8b39a5683b";
//fetching the weather details from the API.    
let getWeather = () =>
    {
        let cityValue = cityRef.value;

        // if city input is empty
        if(cityValue.length == 0){
            result.innerHTML==`<h3>Please input the name of the city.</h3>`
        }
        // if city name is given
        else{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
            fetch(url)
                //fetching the url as json.
                .then((response) =>
                    response.json()
                )
                //if city name is valid.
                .then((data) =>
                    {
                        result.innerHTML=
                        `
                        <h2>${data.name}</h2>
                        <h4 class="weather">${data.weather[0].main}</h4>
                        <h4 class="description">${data.weather[0].description}</h4>
                        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
                        <h1>${data.main.temp} &#176;</h1>
                        <div class="temp-container">
                            <div>
                                <h4 class="title">min</h4>
                                <h4 class="temp">${data.main.temp_min}</h4>
                            </div>
                            <div>
                                <h4 class="title">max</h4>
                                <h4 class="temp">${data.main.temp_max}</h4>
                            </div>
                        </div>
                        `;
                    }
                )
                //if city name is not valid.
                .catch(() =>
                    {
                        result.innerHTML = `<h3>Sorry This City name is not found in the Server.</h3>`
                    }

                )
        }   
    }
    searchBtn.addEventListener("click", getWeather)
window.addEventListener("load", getWeather);


    