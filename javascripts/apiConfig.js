"use strict";

let owapi= require("./apiGetter");
let owapiData= owapi();

var owapiConfig={
    owapiKey: owapiData.apiKey,
    zipCode: owapiData.zipCodeURL,
    endCode: owapiData.zipCodeEND,
    zipFor: owapiData.zipForeURL,
    forEnd: owapiData.zipForeEND 
};

let getAPIsettings=()=>{
    return owapiConfig;
};


module.exports= {getAPIsettings};
