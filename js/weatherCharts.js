
var getJSON = function (url, callback, array2) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();

};


var stateInput;
var causeInput;
function sendData(stateInput, url){

    var params = "state="+stateInput;
    var http = new XMLHttpRequest();
    
    http.open("GET", url+"?"+params, true);
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200) {
            console.log(http.responseText);
        }
    }
    http.send(null);
    }

    
var array;

function getInput() {
    
    stateInput = document.getElementById("states").value;
    causeInput = document.getElementById("causes").value;


    
if (causeInput == "temp") { 

    sendData(stateInput, "http://localhost/tw/api/view/fetchTemp.php");
    getJSON('http://localhost/tw/api/view/fetchTemp.php',
          function (err, data) {
              if (err !== null) {
                  console.log('Something went wrong: ' + err);
                  return 0;
              } else {
  
                  console.log('Succesfully retrieved data');
                  array = data;
         
                  
              }
          });
    
  } else if (causeInput == "humid") {
     
    sendData(stateInput, "http://localhost/tw/api/view/fetchHumid.php");
    getJSON('http://localhost/tw/api/view/fetchHumid.php',
          function (err, data) {
              if (err !== null) {
                  console.log('Something went wrong: ' + err);
                  return 0;
              } else {
  
                  console.log('Succesfully retrieved data');
                  array = data;
         
                  
              }
          });
    
  } else if (causeInput == "pressure") { 
    sendData(stateInput, 'http://localhost/tw/api/view/fetchPressure.php');
    getJSON('http://localhost/tw/api/view/fetchPressure.php',
          function (err, data) {
              if (err !== null) {
                  console.log('Something went wrong: ' + err);
                  return 0;
              } else {
  
                  console.log('Succesfully retrieved data');
                  array = data;
         
                  
              }
          });
    
  } else if (causeInput == "visib") { 
   
    sendData(stateInput, 'http://localhost/tw/api/view/fetchVisibility.php');
    getJSON('http://localhost/tw/api/view/fetchVisibility.php',
          function (err, data) {
              if (err !== null) {
                  console.log('Something went wrong: ' + err);
                  return 0;
              } else {
  
                  console.log('Succesfully retrieved data');
                  array = data;
         
                  
              }
          });
    
  } else if (causeInput == "wind") { 
    sendData(stateInput, 'http://localhost/tw/api/view/fetchWind.php');
    getJSON('http://localhost/tw/api/view/fetchWind.php',
          function (err, data) {
              if (err !== null) {
                  console.log('Something went wrong: ' + err);
                  return 0;
              } else {
  
                  console.log('Succesfully retrieved data');
                  array = data;
         
                  
              }
          });
    
  } else if (causeInput == "weather") { 
    sendData(stateInput, 'http://localhost/tw/api/view/fetchWeather.php');
    getJSON('http://localhost/tw/api/view/fetchWeather.php',
          function (err, data) {
              if (err !== null) {
                  console.log('Something went wrong: ' + err);
                  return 0;
              } else {
  
                  console.log('Succesfully retrieved data');
                  array = data;
         
                  
              }
          });
    
  } else if (causeInput == "time") { 
    sendData(stateInput, 'http://localhost/tw/api/view/fetchDayTime.php');
    getJSON('http://localhost/tw/api/view/fetchDayTime.php',
          function (err, data) {
              if (err !== null) {
                  console.log('Something went wrong: ' + err);
                  return 0;
              } else {
  
                  console.log('Succesfully retrieved data');
                  array = data;
         
                  
              }
          });
    
  }
   
}
console.log(array);






