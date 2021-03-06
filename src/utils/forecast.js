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
            callback(undefined,body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + '°C and it feels like ' + body.current.feelslike + '°C. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecastURL