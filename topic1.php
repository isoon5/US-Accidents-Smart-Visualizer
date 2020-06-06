<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin');
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With");

//include_once $_SERVER['DOCUMENT_ROOT'].'/tw/api/view/fetchStatesCases.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta charset="UTF-8">
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/d158196d49.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <title>US Accidents Smart Visualizer</title>
    <link rel="icon" href="img/logo.png" type="image/x-icon">
    

</head>


<body>

    <nav class="navbar" id="myNavbar">
        <a href="index.html" class="logo">
            <img src="img/logo.png" alt="logo">
        </a>
        <ul class="nav-links">
            <li class="nav-item"><a href="#topic1">Most affected states</a></li>
            <li class="nav-item"><a href=#topic2>Button 2 longer text</a></li>
            <li class="nav-item"><a href=#topic3>Button 3 longer text</a></li>

        </ul>

        <div class="dropdown-menu">
            <button class="drop-button"><i class="fas fa-bars"></i></button>

            <div class="dropdown-content">
                <a href="#topic1">Most affected states</a>
                <a href=#topic2>Button 2 longer text</a>
                <a href=#topic3>Button 3 longer text</a>


                <!--More buttons here-->

            </div>

        </div>

    </nav>

    <div class="topic-landing-page">
        <img src="img/rain.jpg">

    </div>


    <main>

        <div id="topic1" class="section">

            <div class="container">
                <div class="row">
                    <h2 class="section-title"> Find Out What Are The Leading Causes For Most Car Accidents
                    </h2>
                </div>
                <div class="row" id="context">
                    <div id="column-img">
                        <img src="img/crashed_car.jpg" alt="Crashed car">
                    </div>
                    <div id="column-text">
                        <p>The number of fatal car crashes in the United States has declined, at least partially due to better safety measures and improved road design. In 2014, 32,675 Americans died in car crashes, roughly 10,000 fewer than there were In 2004.Still, traffic accidents remain a serious problem in this country, and in some states the issue is much more severe than in others.Nationwide, there were 10.2 deaths for every 100,000 people in 2014. In Wyoming, the most dangerous state for drivers, there were 25.7 deaths for every 100,000 people.
                            <br><br>
                            <br><br>
                            <br> Below you can see a chart with the most/least affected states of car accidents between February 2016 and December 2019 </p>

                        <form id="topChartForm">

                            <input type="radio" id="most" name="view" value="most" checked>
                            <label for="most"><b>Top 10 most affected states</b></label>
                            <input type="radio" id="least" name="view" value="least">
                            <label for="female"><b>Top 10 least affected states</b></label><br>

                        </form>

                    </div>
                </div>
            </div>



            <div id="chart_div"></div>

        </div>





    </main>


</body>
<script src="myscripts.js"></script>
<script src="topChart.js"></script>



</html>