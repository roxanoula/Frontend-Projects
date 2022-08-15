const imagesAPI = "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
const unsplashUrl = "https://unsplash.com/s/photos/random?client_id=8fAPve7yyfLiZ5hK2gOfC1hPZPuii3dtGq1PCioshE8&orientation=landscape&query=nature"
const dogsAPI = "https://dog.ceo/api/breeds/image/random"
const dogsApiLocation = dogsAPI.slice(0, dogsAPI.indexOf("api"))

fetch(dogsAPI)
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        return res.json()})
    .then(image => {
        document.body.style.backgroundImage = `url(${image.message})`
        document.getElementById("author").textContent = `By: ${dogsApiLocation}`
    })
    .catch(err => console.error(err))
/*
    document.body.style.backgroundImage = `url(${image.urls.regular})`
		document.getElementById("author").textContent = `By: ${image.user.name}`
*/

setInterval(getCurrentTime, 1000)

function getCurrentTime() {
    const date = new Date()
    const timeEl = document.getElementById("time")
    timeEl.textContent = 
        "Local Time  " + date.toLocaleTimeString("en-us", {timeStyle: "medium"})
}

navigator.geolocation.getCurrentPosition(
        position => {
            console.log(position.coords.latitude)
            fetch(`
                https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&APPID=347e4a9b1bb1c083f28286dae90e1230
            `)
            .then(res => {
                if (!res.ok) {
                    throw Error("Weather data not available")
                }
                return res.json()
            })
            .then(data => {
                const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                document.getElementById("weather").innerHTML = `
                    <img src=${iconUrl} alt="weather icon" \>
                    <p class="weather-temp">${Math.round(data.main.temp)} F</p>
                    <p class="weather-city">${data.name}</p>
                `
            })
            .catch(err => console.Error(err))
        })

