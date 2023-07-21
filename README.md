# Live Weather Web App

## Description

Live Weather is a simple web application that allows users to check the current weather for a specific location. Users can enter the name of a city in the search box, and the app will display the temperature, latitude, longitude, weather description, wind speed, and cloudiness for that location.

The app is designed to be responsive and works on both desktop and mobile devices.


## Installation

To use the Live Weather app locally, follow these steps:

1. Clone this repository: `git clone https://github.com/umanghalok/live-weather.git`
2. Navigate to the project directory: `cd live-weather`
3. Open the `index.html` file in your web browser.

## Technologies Used

- HTML
- CSS
- JavaScript
- [Bootstrap](https://getbootstrap.com/) (for styling)

## Styling (CSS)

The CSS code provided is responsible for the styling and layout of the Live Weather web app. It sets the background image, colors, and responsive design for various screen sizes.

## JavaScript Functionality

The JavaScript code handles the core functionality of the Live Weather app. It interacts with the [OpenWeather API](https://openweathermap.org/api) to fetch real-time weather data for the searched city. The key features of the JavaScript code are:

- Fetching weather data using the `fetch` API.
- Handling user input and triggering weather data retrieval on button click or pressing the Enter key.
- Updating the DOM with the retrieved weather information.

## API Key

To use the Live Weather app, you need to obtain an API key from [OpenWeather API](https://openweathermap.org/api) and replace the `apik` variable in the `main.js` file with your API key.

```javascript
apik = "your_api_key_here";
