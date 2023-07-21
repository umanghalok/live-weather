var inputval = document.getElementById('cityinput');
var btn = document.getElementById('add');
var city = document.getElementById('cityoutput');
var latitude = document.getElementById('latitude');
var longitude = document.getElementById('longitude');
var description = document.getElementById('description');
var temp = document.getElementById('temp');
var wind = document.getElementById('wind');
var cloudiness = document.getElementById('cloudiness');

apik = "3045dd712ffe6e702e3245525ac7fa38";

function conversion(val) {
    return (val - 273).toFixed(2);
}

function handleSearch() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            var nameval = data['name'];
            var lat = data['coord']['lat'];
            var lon = data['coord']['lon'];
            var descrip = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];
            var clouds = data['clouds']['all'];

            city.innerHTML = `City: ${nameval}`;
            latitude.innerHTML = `Latitude: ${lat}`;
            longitude.innerHTML = `Longitude: ${lon}`;
            temp.innerHTML = `<span class="red-temperature">Temperature: ${conversion(temperature)} C</span>`;
            description.innerHTML = `Conditions: ${descrip}`;
            wind.innerHTML = `Wind Speed: ${windSpeed} km/h`;
            cloudiness.innerHTML = `Cloudiness: ${clouds}%`;

        })
        .catch(err => alert('Please enter the correct name.'));
}

btn.addEventListener('click', handleSearch);


inputval.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

