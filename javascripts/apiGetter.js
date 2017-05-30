"use strict";

function getKey(){
	return {
		apiKey: "08c4b8fd5b505371633e997ff7683c21",
		zipCodeURL: "http://api.openweathermap.org/data/2.5/weather?zip=",
        zipCodeEND: "&appid=08c4b8fd5b505371633e997ff7683c21&units=Imperial/metric",
        zipForeURL: "http://api.openweathermap.org/data/2.5/forecast?zip=",
        zipForeEND: "&appid=08c4b8fd5b505371633e997ff7683c21&units=Imperial"

	};
}


module.exports= {getKey};

