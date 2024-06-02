const API_KEY = 'e1e36981a7d03b2cdc4454e69ca22986';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const city = document.querySelector("#weather span:nth-child(2)");
            const weather = document.querySelector("#weather span:nth-child(4)");
            const weatherIcon = document.querySelector(".weatherIcon");
            const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            // city.innerText = `${data.name} / ${Math.round(data.main.temp)}˚`;
            city.innerText = `${data.name} /`
            weather.innerText = `${Math.round(data.main.temp)}˚`
            weatherIcon.setAttribute('src', iconURL);
        })
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk);