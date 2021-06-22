const express = require('express');
const app = express();
const request = require('request');
request("https://jsonplaceholder.typicode.com/users", (error, response, body) => {
    if(!error && response.statusCode==200){
        var parsedData = JSON.parse(body);
        parsedData.forEach(user => {
            console.log(`${user["name"]} is in ${user["address"]["city"]}, on ${user["address"]["street"]}`);
        });
    } else {
        console.log("We had an error: " + error);
        
    }
})