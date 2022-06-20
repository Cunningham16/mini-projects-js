const link = 'http://api.weatherstack.com/current'
const apiKey = 'c6e050a966579a0b691e3d4896c4b782'

const cityInput = document.querySelector(".input-town input")
const currentTime = document.querySelector(".time-temperature h3")
const temperature = document.querySelector(".time-temperature h1")
const weatherImg = document.querySelector(".header__display img")
const weatherDescription = document.querySelector(".header__display h2")
const otherInfo = document.querySelectorAll(".mini-card__text span")


const fetchData = async (city) => {
    const result = await fetch(link+'?access_key='+apiKey+'&query='+city)
    const data = await result.json()
    console.log(data)
    temperature.textContent = data.current.temperature + "°С"
    weatherImg.src = data.current.weather_icons[0]
    weatherDescription.textContent = data.current.weather_descriptions[0]
    currentTime.textContent = "Time: "+ data.current.observation_time
    otherInfo[0].textContent = data.current.cloudcover + "%"
    otherInfo[2].textContent = data.current.pressure 
    otherInfo[4].textContent = data.current.feelslike + "°С"
    otherInfo[1].textContent = data.current.wind_speed + " km/h"
    otherInfo[3].textContent = data.current.uv_index + "/100"
    otherInfo[5].textContent = data.current.humidity + "%"
}

let storageCity = localStorage.getItem('currentTown');

if(storageCity != ''){
	cityInput.value = storageCity
	fetchData(storageCity)
}else{}

cityInput.addEventListener("keydown", (e) => {
	if(e.keyCode === 13 || cityInput.hasFocus === false){
		fetchData(cityInput.value)
		localStorage.setItem('currentTown', cityInput.value);
	}
})
