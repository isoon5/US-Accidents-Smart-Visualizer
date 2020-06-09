var array;

var getJSON = function (url, callback, array) {
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

console.log(array);
getJSON('http://localhost/tw/api/view/fetchStatesCases.php',
  function (err, data) {
    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      console.log('Succesfully retrieved data');
      array = data;
    }
  });

// -- Chart -- //

function getInputValue() {

  // Selecting the input element and get its value 
  var inputVal;
  if (document.getElementById('most').checked) {

    inputVal = document.getElementById('most').value;

  } else {
    inputVal = document.getElementById('least').value;
  }

  return inputVal;

}

var input = getInputValue();

setTimeout(function () {

  if (input == "most") {
    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

      arr = [

        ['State', 'Number of accident'],
        ['California', parseInt(array["CA"])],
        ['Texas', parseInt(array["TX"])],
        ['Florida', parseInt(array["FL"])],
        ['South Carolina', parseInt(array["SC"])],
        ['North Carolina', parseInt(array["NC"])],
        ['New York', parseInt(array["NY"])],
        ['Pennsylvania', parseInt(array["PA"])],
        ['Michigan', parseInt(array["MI"])],
        ['Illinois', parseInt(array["IL"])]

      ];

      var data = google.visualization.arrayToDataTable(arr);

    
      var options = {
        title: 'Most Affected States by Car Accidents',
        chartArea: { width: '40%', height: 400 },
        hAxis: {
          title: 'Total Population',
          minValue: 0,
          textPosition: 'out'
        },
        vAxis: {
          title: 'State',
          
        },

      };


      var chart_div = document.getElementById('chart_div');

      var top_chart = new google.visualization.BarChart(document.getElementById('chart_div'));



      top_chart.draw(data, options);
      google.visualization.events.addListener(top_chart, 'ready', function () {
        chart_div.innerHTML = '<img src="' + top_chart.getImageURI() + '">';
        console.log(chart_div.innerHTML);
      });
      printTopChart(top_chart);
      topCsv(arr);
      topSvg();


    }
  } else {


    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {
       arr = [

        ['State', 'Number of accident'],
        ['Alaska', parseInt(array["AK"])],
        ['Hawaii', parseInt(array["HI"])],
        ['North Dakota', parseInt(array["ND"])],
        ['South Dakota', parseInt(array["SD"])],
        ['Wyoming', parseInt(array["WY"])],
        ['Montana', parseInt(array["MT"])],
        ['Arkansas', parseInt(array["AR"])],
        ['Idaho', parseInt(array["ID"])],
        ['Maine', parseInt(array["ME"])]
 

      ];
      var data = google.visualization.arrayToDataTable(arr);

      var options = {
        title: 'Most Affected States by Car Accidents',
        chartArea: { width: '40%', height: 400 },
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'State'
        },
        width: Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)


      };
      var chart_div = document.getElementById('chart_div');

      var top_chart = new google.visualization.BarChart(document.getElementById('chart_div'));


      top_chart.draw(data, options);

      google.visualization.events.addListener(top_chart, 'ready', function () {
        chart_div.innerHTML = '<img src="' + top_chart.getImageURI() + '">';
      ;
    
   

        
      });
      printTopChart(top_chart);
      topCsv(arr);
      topSvg();
        

      

    }

  }



}, 10);


function printTopChart(top_chart) {
  document.getElementById('png-top-chart').outerHTML = '<a id  = "top-btn" href="' + top_chart.getImageURI() + '" download="top_char.png" target="_blank"">Convert to PNG</a>';
 
}

function topCsv(arr){
var t_csv  = "data:text/csv;charset=utf-8,";
      for(i = 1; i < arr.length; i++){
        
        console.log(arr[i]);
          t_csv += '\n'; 
          t_csv += arr[i]+', '
      }
      console.log(t_csv);
      document.getElementById('csv-top-chart').outerHTML = '<a id  = "top-btn-csv" href="' + t_csv + '" download="TOP_Chart.csv" target="_blank">Convert to CSV</a>'
        
    }

    function topSvg(){

      var svgAsXML = (new XMLSerializer).serializeToString(document.getElementsByTagName('svg')[0]);
      var svgData = "data:image/svg+xml," + encodeURIComponent(svgAsXML);
      document.getElementById('svg-top-chart').outerHTML = '<a id  = "top-btn-svg" href="' + svgData + '" download="TOP_CHART.svg" target="_blank">Convert to SVG</a>';
  }
