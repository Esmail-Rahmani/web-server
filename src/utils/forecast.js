const request = require('request')

const forecast =(latitude , longitude ,callback)=>{

    const url = 'http://api.weatherstack.com/current?access_key=2d7d633fba6ce5cec7fa32d0286eb0e6&%20query=' + longitude + ',' + latitude
        
    request({ url , json : true } , (error,{ body })=>{
        if (error) {
            callback('no Network Connection',undefined)

        }else if (body.error) {
            callback('unable to find location',undefined)

        }else{
            const cur = body.current
            callback(undefined,'the weather is '+cur.temperature +' degree feels like '+ cur.feelslike)
        }

    })
} 

module.exports = forecast