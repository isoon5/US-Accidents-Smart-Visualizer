var array2;

var getJSON = function (url, callback,array2) {
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

console.log(array2);
getJSON('http://localhost/tw/api/view/fetchStatesCases.php',
  function (err, data) {
    if (err !== null) {
      console.log('Something went wrong: ' + err);
    } else {
      console.log('Succesfully retrieved data');
      array2 = data;
    }
  });

  setTimeout(function () {
      google.charts.load('current', {'packages':['geochart']});
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
  
        var ar = [
          ['Code', 'Select'],
          ['US-AK', parseInt(array2['AK'])],
          ['US-AL', parseInt(array2['AL'])],
          ['US-AR', parseInt(array2['AR'])],
          ['US-AZ', parseInt(array2['AZ'])],
          ['US-CA', parseInt(array2['CA'])],
          ['US-CO', parseInt(array2['CO'])],
          ['US-CT', parseInt(array2['CT'])],
          ['US-DE', parseInt(array2['DE'])],
          ['US-FL', parseInt(array2['FL'])],
          ['US-GA', parseInt(array2['GA'])],
          ['US-HI', parseInt(array2['HI'])],
          ['US-IA', parseInt(array2['IA'])],
          ['US-ID', parseInt(array2['ID'])],
          ['US-IL', parseInt(array2['IL'])],
          ['US-IN', parseInt(array2['IN'])],
          ['US-KS', parseInt(array2['KS'])],
          ['US-KY', parseInt(array2['KY'])],
          ['US-LA', parseInt(array2['LA'])],
          ['US-MA', parseInt(array2['MA'])],
          ['US-MD', parseInt(array2['MD'])],
          ['US-ME', parseInt(array2['ME'])],
          ['US-MI', parseInt(array2['MI'])],
          ['US-MN', parseInt(array2['MN'])],
          ['US-MO', parseInt(array2['MO'])],
          ['US-MS', parseInt(array2['MS'])],
          ['US-MT', parseInt(array2['MT'])],
          ['US-NC', parseInt(array2['NC'])],
          ['US-ND', parseInt(array2['ND'])],
          ['US-NE', parseInt(array2['NE'])],
          ['US-NH', parseInt(array2['NH'])],
          ['US-NJ', parseInt(array2['NJ'])],
          ['US-NM', parseInt(array2['NM'])],
          ['US-NV', parseInt(array2['NV'])],
          ['US-NY', parseInt(array2['NY'])],
          ['US-OH', parseInt(array2['OH'])],
          ['US-OK', parseInt(array2['OK'])],
          ['US-OR', parseInt(array2['OR'])],
          ['US-PA', parseInt(array2['PA'])],
          ['US-RI', parseInt(array2['RI'])],
          ['US-SC', parseInt(array2['SC'])],
          ['US-SD', parseInt(array2['SD'])],
          ['US-TN', parseInt(array2['TN'])],
          ['US-TX', parseInt(array2['TX'])],
          ['US-UT', parseInt(array2['UT'])],
          ['US-VA', parseInt(array2['VA'])],
          ['US-VA', parseInt(array2['VT'])],
          ['US-WA', parseInt(array2['WA'])],
          ['US-WI', parseInt(array2['WI'])],
          ['US-WV', parseInt(array2['WV'])],
          ['US-WY', parseInt(array2['WY'])]
        ],
            geo_data = google.visualization.arrayToDataTable(ar);
            
        var options = {
          region: 'US',
          displayMode: 'regions',
          resolution: 'provinces', // 'metro'
          legend: 'none',
          animation: {
            easing: 'inAndOut',
            startup: true,
            duration: 2500,
          },
        };

      
        var geo_chart = new google.visualization.GeoChart(document.getElementById('geochart'));
        
        
  function selectHandler() {
    var selectedItem = geo_chart.getSelection();
    if (selectedItem) {
      var row = selectedItem[0].row,
          value = data.getValue(row, 0),
          isSelected = !geo_data.getValue(row, 1);
      //console.log(row);
      ar[row + 1][1] = isSelected ? 1 : 0 ;
      geo_data = google.visualization.arrayToDataTable(ar);
      //alert(value+", "+isSelected);
      //console.log('The user selected: ' + value);
      //console.log('isSelected: ' + isSelected);
      //console.log(JSON.stringify(data));
      geo_chart.draw(geo_data, options);
      
      
    }
  }

   
  geo_chart.draw(geo_data, options);
  google.visualization.events.addListener(geo_chart, 'select', selectHandler);
  google.visualization.events.addListener(geo_chart, 'ready', function () { 
    chart_div2.innerHTML = '<img src="' + geo_chart.getImageURI() + '">';
    console.log(chart_div2.innerHTML);
    printGeoChart(geo_chart);

    
    var csv  = "data:text/csv;charset=utf-8,";
 
    for(i = 1; i < ar.length; i++){
      
        csv += '\n'; 
        csv += ar[i]+', '
    }
  
      document.getElementById('csv-geo-chart').outerHTML = '<a id  = "geo-btn-png" href="' + csv + '" download="USA_MAP.csv" target="_blank">Convert to CSV</a>';
    
   



  });




      }
      
    }, 10);

    function printGeoChart(geo_chart){
      document.getElementById('png-geo-chart').outerHTML = '<a id  = "geo-btn-csv" href="' + geo_chart.getImageURI() + '" download="USA_MAP.png" target="_blank">Convert to PNG</a>';
    }

    
  
 
   
  
    
    
