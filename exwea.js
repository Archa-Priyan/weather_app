const inputBox = document.querySelector('.Input-box');
const searchchBtn = document.getElementById('search-btn');
const weather_img = document.querySelector('.Whether-img');
const temp = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humd = document.getElementById('humadity');
const wind_speed = document.getElementById('Wind-Speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');
const country_id =document.getElementById('country_id');
const timezone =document.getElementById('timezone');
const base = document.getElementById('base');
const cityname=document.getElementById('cityname')




async function checkwhether(city) {
    const api_key = "9355a3e3b5571079f305c96a7ac10db8";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const whether_data = await fetch(`${url}`).then(response => response.json());

    if(whether_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log('error');
        return;
    }
    weather_body.style.display = "flex";

    temp.innerHTML = `${Math.round(whether_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${whether_data.weather[0].description}`;
    humd.innerHTML = `${whether_data.main.humidity}%`;
    wind_speed.innerHTML = `${whether_data.wind.speed}Km/H`;
    country_id.innerHTML=`${whether_data.sys.country}`;
    timezone.innerHTML=`${whether_data.timezone}`;
    base.innerHTML=`${whether_data.base}`
    cityname.innerHTML=`${whether_data.name}`


 console.log(whether_data);

    switch (whether_data.weather[0].main) {
        case 'Clouds':
            weather_img.src = "./images/cloud.png";
            break;
        case 'Clear':
            weather_img.src = "./images/clear.png";
            break;
        case 'Rain':
            weather_img.src = "./images/rain.png";
            break;
        case 'Mist':
            weather_img.src = "./images/mist.png";
            break;
        case 'Snow':
            weather_img.src = "./images/snow.png";
            break;
        
    }

}
searchchBtn.addEventListener('click', () => {
    checkwhether(inputBox.value);
});