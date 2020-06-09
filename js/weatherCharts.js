    
var obj;
/*
var getJSON = function (url,param, callback) {
    var xhr = new XMLHttpRequest();
    url=url+"?"+param;
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
            array = data;
        }
    };
    xhr.send();

};

*/
var stateInput;
var causeInput;

function sendData(stateInput, url){

    var params = "state="+stateInput;
    var http = new XMLHttpRequest();
    
    http.open("GET", url+"?"+params, true);
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200) {
            
            array = http.responseText;
           
            obj = JSON.parse(array); 
            console.log(obj);
        }
    }
    http.send(null);
    }



function getInput() {
    
    stateInput = document.getElementById("states").value;
    causeInput = document.getElementById("causes").value;


    
if (causeInput == "temp") { 
 
   sendData(stateInput, "http://localhost/tw/api/view/fetchTemp.php");
    

                // Piechart

                google.charts.load("current", {packages:["corechart"]});
                google.charts.setOnLoadCallback(drawChart);
                function drawChart() {
                  var data = google.visualization.arrayToDataTable([
                    ['Temperature', 'Accidents'],
                    ['Below -50 F degrees',    parseInt(obj['belowMinusFifty'])],
                    ['Below 0 F degrees',       parseInt(obj['belowZero'])],
                    ['Below 50 F degrees',   parseInt(obj['belowFifty'])],
                    ['Below 100 F degrees',  parseInt(obj['belowHundred'])],
                    ['Below 150 F degrees',     parseInt(obj['belowHundredFifty'])],
                    ['Above 150 F degrees',     parseInt(obj['aboveHundredFifty'])]

                  ]);
          
                  var options = {
                    title: 'Accidents on different temperatures',
                    is3D: true,
                  };
          
                  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
                  chart.draw(data, options);
                }
             
        
    
  } else if (causeInput == "humid") {
     
    sendData(stateInput, "http://localhost/tw/api/view/fetchHumid.php");
    //Chart
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Humidity%', 'Accidents'],
        ['Below 30%', parseInt(obj['belowThirty'])],
        ['Below 60%', parseInt(obj['belowSixty'])],
        ['Above 60%', parseInt(obj['aboveSixty'])]
      ]);

      var options = {
        title: 'Accidents on different Humidity levels',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

    
  } else if (causeInput == "pressure") { 
    sendData(stateInput, 'http://localhost/tw/api/view/fetchPressure.php');
    
    //chart
    
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Humidity%', 'Accidents'],
        ['Below 10%', parseInt(obj['belowTen'])],
        ['Below 20%', parseInt(obj['belowTwenty'])],
        ['Above 20%', parseInt(obj['aboveTwenty'])]
      ]);

      var options = {
        title: 'Accidents on different Pressure levels',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

    
  } else if (causeInput == "visib") { 
   
    sendData(stateInput, 'http://localhost/tw/api/view/fetchVisibility.php');
      google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Visibility', 'Accidents'],
          ['Below 30', parseInt(obj['belowThirty'])], 
          ['Below 60', parseInt(obj['belowSixty'])], 
          ['Below 100', parseInt(obj['belowHundred'])],
          ['Above 100', parseInt(obj['aboveHundred'])]
          
        ]);

        var options = {
          title: 'Accidents on different levels of visibility(mi)',
          legend: 'none',
          pieSliceText: 'label',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }

    
  } else if (causeInput == "wind") { 
    sendData(stateInput, 'http://localhost/tw/api/view/fetchWind.php');
    google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Visibility', 'Accidents'],
          ['Below 30', parseInt(obj['belowThirty'])], 
          ['Below 60', parseInt(obj['belowSixty'])], 
          ['Below 100', parseInt(obj['belowHundred'])],
          ['Below 200', parseInt(obj['belowTwoHundred'])],
          ['Below 300', parseInt(obj['belowThreeHundred'])],
          ['Above 300', parseInt(obj['aboveThreeHundred'])],
          
        ]);

        var options = {
          title: 'Accidents on different levels of visibility(mi)',
          legend: 'none',
          pieSliceText: 'label',
          slices: {  4: {offset: 0.2},
                    12: {offset: 0.3},
                    14: {offset: 0.4},
                    15: {offset: 0.5},
          },
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));
        chart.draw(data, options);
      }
    
  } else if (causeInput == "weather") { 
    sendData(stateInput, 'http://localhost/tw/api/view/fetchWeather.php');
    google.charts.load("current", {packages:['corechart']});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
            ["Weather", "Accidents", { role: "style" } ],
            ["Clear",parseInt(obj['clearWeather']), "color: #c7e0f9"],
            ["Overcast", parseInt(obj['overcast']), "color: #006f75"],
            ["Snow", parseInt(obj['snow']), "color: #3e7fc1"],
            ["Fog", parseInt(obj['fog']), "color: #3a453e"],
            ["Rain", parseInt(obj['rain']), "color: #6c4c7b"],
            ["Drizzle",parseInt(obj['drizzle']), "color: #eabcac"],
            ["Windy", parseInt(obj['windy']), "color: #2e003e"],
            ["Hail", parseInt(obj['hail']), "color: #b2272d"],
            ["Storm", parseInt(obj['storm']), "color: #27242c"],
            ["Tornado", parseInt(obj['tornado']), "color: #2e0f2f"]
          ]);
    

      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);

      var options = {
        title: "Accidents on different weathers",
        width: '100vw',
        height: 800,
        bar: {groupWidth: "50%"},
        legend: { position: "none" },
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
      chart.draw(view, options); }
    
  } else if (causeInput == "time") { 
    sendData(stateInput, 'http://localhost/tw/api/view/fetchDayTime.php');
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Day/night', 'Accidents'],
        ['Day', parseInt(obj['dayTime'])],
        ['Night', parseInt(obj['nightTime'])]
      ]);

      var options = {
        title: 'Accidents on day time/night time',
        is3D: true,
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
      chart.draw(data, options);
    }

    
  }
   
}







