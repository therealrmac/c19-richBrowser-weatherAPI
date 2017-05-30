"use strict";

let weatherDB= require("./apiConfig");
let $= require("jquery");

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

function getForecast(code){
    return new Promise(function(resolve,reject){
        $.ajax({
            url: `${weatherDB.getAPIsettings().zipFor}${code}${weatherDB.getAPIsettings().forEnd}`
        }).done(function(event){
            resolve(event);
        });
    });
}



module.exports= {getWeather, getForecast};
