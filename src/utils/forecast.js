const request=require('request')

const forecast=(latitude,longitude,callback)=>{
    const url= 'http://api.weatherstack.com/current?access_key=590c6220b32920811ecd7df636336051&query='+  latitude + ',' + longitude + '&units=f'
    
    request({url,json:true},(error,{body})=>{
        if(error){
            callback('Unable to connect to weather services ', undefined)
        }else if(body.error){
            callback('Unable to find weather. Try another search. ', undefined)
        }else{
            callback(undefined,'The temperature is ' + body.current.temperature + ' and humidity is ' + body.current.humidity)
        }
    })
}

module.exports=forecast