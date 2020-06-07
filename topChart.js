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

      var data = google.visualization.arrayToDataTable([

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

      ]);

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

    }
  } else {


    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

      var data = google.visualization.arrayToDataTable([

        ['State', 'Number of accident'],
        ['Alaska', parseInt(array["AK"])],
        ['Puerto Rico', parseInt(array["PR"])],
        ['Virgin Islands', parseInt(array["VI"])],
        ['Hawaii', parseInt(array["HI"])],
        ['Guam', parseInt(array["GU"])],
        ['American Samao', parseInt(array["AS"])],
        ['North Dakota', parseInt(array["ND"])],
        ['South Dakota', parseInt(array["SD"])],
        ['Montana', parseInt(array["MT"])]
 

      ]);

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
        console.log(chart_div.innerHTML);
      });
      printTopChart(top_chart);

    }

  }



}, 10);


function printTopChart(top_chart) {
  document.getElementById('png-top-chart').outerHTML = '<a id  = "top-btn" href="' + top_chart.getImageURI() + '" download="top_char.png" target="_blank"">Convert to PNG</a>';
 
}

