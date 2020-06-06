var array;

var getJSON = function (url, callback) {
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



  // Displaying the value

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
        ['California', parseInt(array['CA'])],
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
        chartArea: { width: '40%', height: 700 },
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'State'
        },

      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
  } else {


    google.charts.load('current', { packages: ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawBasic);

    function drawBasic() {

      var data = google.visualization.arrayToDataTable([

        ['State', 'Number of accident'],
        ['Alaska', parseInt(array['AK'])],
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
        chartArea: { width: '40%', height: 700 },
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'State'
        },

      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }



  }

}, 10);