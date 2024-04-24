const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=6def2b510873c8bd6ecf84e63055584a&query=' + latitude + ',' + longitude +''
   
    request({url, json: true}, (error, {body}) => {
                if(error) {
                    callback('Uanable to connect to location services!', undefined)
                } else if (body.error) {
                    callback('Unable to find location.', undefined)
                } else {
                    callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out. If feels like ' + body.current.feelslike + ' degress out.' + ' The humidity is ' + body.current.humidity + '%')
                }})
}
 

  module.exports = forecast