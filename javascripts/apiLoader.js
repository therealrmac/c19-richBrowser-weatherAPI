"use strict";

let weatherDB= require("./apiConfig");


//By zip code
function getWeather(code){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: `${weatherDB.getAPIsettings().zipCode}${code}${weatherDB.getAPIsettings().endCode}`
        }).done(function(event){
            resolve(event);
        });
    });
}



module.exports= {getWeather};
