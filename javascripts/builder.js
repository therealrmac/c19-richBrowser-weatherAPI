"use strict";

let $= require("jquery");
let temp= require("../template/output.hbs");
let fiveday= require("../template/fiveDay.hbs");
let threeDay= require("../template/threeDay.hbs");

function populateDom(data){
    $("#output").html(temp(data));
}
function populateDiv(data){
    $("#fiveDayForecast").html(fiveday(data));
    console.log("new data is", data);
}
function populateDivTwo(data){
    $("#fiveDayForecast").html(threeDay(data));
    console.log("new data is", data);
}
module.exports= {populateDom, populateDiv, populateDivTwo};
