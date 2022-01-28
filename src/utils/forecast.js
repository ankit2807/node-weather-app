const request = require('request')

const forecastURL = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0856fca4ca2e059b21014f989e784c66&query=' + lat + ',' + lon

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to server!', undefined)
        } else if (body.error) {
            callback('Unable to find the location!', undefined)
        } else {
            // callback(undefined, body.current.weather_descriptions[0])
            callback(undefined, 'It is currently ' + body.current.temperature + '°C and humidity is ' + body.current.humidity + ' and the weather is ' + body.current.weather_descriptions[0])
        }
    })
}

module.exports = forecastURL