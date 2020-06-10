<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta content="text/html;charset=utf-8" http-equiv="Content-Type">
    <meta charset="utf-8">
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/d158196d49.js" crossorigin="anonymous"></script>


    <title>US Accidents Smart Visualizer</title>
    <link rel="icon" href="img/logo.png" type="image/x-icon">

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>



</head>


<body>

    <nav class="navbar" id="myNavbar">
        <a href="index.html" class="logo">
            <img src="img/logo.png" alt="logo">
        </a>
        <ul class="nav-links">
            <li class="nav-item"><a href="./topic1.php">Most affected states</a></li>
            <li class="nav-item"><a href="./topic2.php">Weather and accidents</a></li>
            <li class="nav-item"><a href="about.html">About</a></li>

        </ul>

        <div class="dropdown-menu">
            <button class="drop-button"><i class="fas fa-bars"></i></button>

            <div class="dropdown-content">
                <a href="topic1.php">Most affected states</a>
                <a href="topic2.php">Weather and accidents</a>
                <a href="about.html">About</a>


                <!--More buttons here-->

            </div>

        </div>

    </nav>

    <div class="topic-landing-page">
        <img src="img/snow.jpg">

    </div>


    <main>

        <div id="topic2" class="section">

            <div class="container">
                <div class="row">
                    <h2 class="section-title">How Bad Weather Increases Driving Accidents
                    </h2>
                </div>
                <div class="row" id="context">
                    <div id="column-img">
                        <img src="./img/weather.jpg" alt="Crashed car">
                    </div>
                    <div id="column-text">
                        <p>According to the Federal Highway Administration (FHWA) out of nearly six million vehicular accidents that occur every year in the U.S., approximately 22 percent are weather-related. Nearly 6,000 people are killed and another 445,000 injured due to accidents that occur during bad weather.A weather-related accident is defined as one that occurs in any adverse condition such as sleet, snow, rain, fog, winds or on slick pavement. More accidents occur when the roads are wet following a rainstorm than in any other type of bad weather. Wet roads account for 73 percent of all weather-related accidents. Snow and sleet make up 17 percent of bad weather accidents with 13 percent occurring on icy roads. Only 3 percent of bad weather accidents are caused by foggy conditions.

                    </div>
                </div>
            </div>

            <div class="container-id" style="height: 850px">
                <div class="row">

                    <h2 class="section-title">US Car Accident Statistics: What factors cause the most accidents</h2>

                </div>

                <div class="row" id="context">
                    <div id="column-text">
                        <p>See how weather and different factors affect each state.</p>

                        <form>
                            <label for="states">Choose a State:</label>
                            <select id="states" name="state">
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idahao</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Mebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Islands</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>

                            </select>

                            <label for="causes">Choose a Cause:</label>
                            <select id="causes" name="causes">
                                <option value="temp" onclick="location.reload()">Temperature</option>
                                <option value="humid" onclick="location.reload()">Humidity</option>
                                <option value="pressure" onclick="location.reload()">Atmospheric Pressure</option>
                                <option value="visib" onclick="location.reload()">Visibility</option>
                                <option value="wind" onclick="location.reload()">Wind Speed</option>
                                <option value="weather" onclick="location.reload()">Weather</option>
                                <option value="time" onclick="location.reload()">Day Time / Night Time</option>
                            </select>

                            <input id="submit" type="button" value="Submit" onclick="getInput()" />
                        </form>
                    </div>
                </div>

                <div class="buttons">
                    <div id='png-pie-chart'></div>
                    <div id='csv-pie-chart'></div>
                    <div id='svg-pie-chart'></div>
                </div>

                <div id="piechart_3d" style="width: 900px; height: 500px;"></div>
                <div id="donutchart" style="width: 900px; height: 500px;"></div>
                <div id="piechart" style="width: 900px; height: 500px;"></div>
                <div id="columnchart_values" style="width: 100vw; height: 300px;"></div>




            </div>





    </main>

    <footer>
        <p>Copyright ©</p>
        <p></p>
        <p>All rights reserved</p>
    </footer>
</body>



<script src="./js/myscripts.js"></script>
<script src="./js/weatherCharts.js"></script>





</html>