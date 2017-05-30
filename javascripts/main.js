"use strict";
console.log("Main has loaded");

let $= require("jquery");
let al= require("./apiLoader");
let temperature= require("./builder");
let Handlebars= require("hbsfy/runtime");



$(document).on("click", ".submit", function(data){
    var code= $(".zip").val();
    al.getWeather(code)
    .then(function(weatherData){
        var weatherArray=[];
        var idArray= Object.keys(weatherData);
        idArray.forEach(function(key){
            weatherArray.push(weatherData[key]);
        });
         temperature.populateDom(weatherData);
    });    
});

$(".zip").on("keyup", (event)=>{
    if(event.keyCode==13){
        var code= $(".zip").val();
        al.getWeather(code)
        .then(function(weatherData){
            var weatherArray=[];
            var idArray= Object.keys(weatherData);
            idArray.forEach(function(key){
                weatherArray.push(weatherData[key]);
            });
            temperature.populateDom(weatherData);
        }); 
    }
});

$(document).on("click", ".fiveDay", function(event){
     var code= $(".zip").val();
     console.log("value of zip is", code);
     al.getForecast(code)
     .then(function(data){
        console.log("forecast data is",data);
        temperature.populateDiv(data);
     });
});
$(document).on("click", ".threeDay", function(event){
     var code= $(".zip").val();
     console.log("value of zip is", code);
     al.getForecast(code)
     .then(function(data){
        while(data.list.length >20){
            data.list.pop();
        }
        console.log("forecast data is",data);
        temperature.populateDivTwo(data);
     });
});


