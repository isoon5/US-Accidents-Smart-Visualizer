USE avi;

DROP PROCEDURE IF EXISTS populate_factors;
DROP TABLE IF EXISTS populate_factors;
CREATE TABLE IF NOT EXISTS populate_factors(
	name VARCHAR(2),
    tempBelowMinusFifty INTEGER,
    tempBelowZero INTEGER,
    tempBelowFifty INTEGER,
    tempBelowHundred INTEGER,
    tempBelowHundredFifty INTEGER,
    tempAboveHundredFifty INTEGER,
    humidityBelowThirty INTEGER,
    humidityBelowSixty INTEGER,
    humidityAboveSixty INTEGER,
    pressureBelowTen INTEGER,
    pressureBelowTwenty INTEGER,
    pressureAboveTwenty INTEGER,
    visibilityBelowThirty INTEGER,
    visibilityBelowSixty INTEGER,
    visibilityBelowHundred INTEGER,
    visibilityAboveHundred INTEGER,
    windSpeedBelowThirty INTEGER,
    windSpeedBelowSixty INTEGER,
    windSpeedBelowHundred INTEGER,
    windSpeedBelowTwoHundred INTEGER,
    windSpeedBelowThreeHundred INTEGER,
    windSpeedAboveThreeHundred INTEGER,
    /*WEATHER CONDITION */
    clearWeather INTEGER,
    overcast INTEGER,
    snow INTEGER,
    fog INTEGER,
    rain INTEGER,
    drizzle INTEGER,
    windy INTEGER,
    hail INTEGER,
    storm INTEGER,
    tornado INTEGER,
    dayTime INTEGER,
    nightTime INTEGER
	
);

SET @listOfStates = 'AK,AL,AR,AZ,CA,CO,CT,DE,FL,GA,HI,IA,ID,IL,IN,KS,KY,LA,MA,MD,ME,MI,MN,MO,MS,MT,NC,ND,NE,NH,NJ,NM,NV,NY,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VA,VT,WA,WI,WV,WY';
/*
SET @rain="Light Rain,Rain,Heavy Rain,Light Freezing Rain,Light Rain Showers,Rain Showers,Light Rain / Windy,Showers in the Vicinity,Light Rain Shower,Light Rain with Thunder,N/A Precipitation,
 Rain / Windy,Heavy Rain / Windy,Heavy Freezing Rain,Heavy Rain Showers,Freezing Rain,Light Freezing Rain / Windy,Light Rain Shower / Windy,Rain Shower";

SET @clearWeather = "Scattered Clouds,Clear,Fair";

SET @overcast = "Overcast,Mostly Cloudy,Partly Cloudy,Cloudy,Mostly Cloudy / Windy,Partly Cloudy / Windy,Thunder in the Vicinity,Thunder,Funnel Cloud";

SET @snow = "Light Snow,Snow,Blowing Snow,Light Thunderstorms and Snow,Heavy Snow,Low Drifting Snow,Light Ice Pellets,Ice Pellets,Snow Grains,Snow Showers,Heavy Thunderstorms and Snow, 
Heavy Ice Pellets,Light Snow / Windy,Wintry Mix,Snow / Windy,Snow and Sleet,Sleet,Light Sleet,Heavy Sleet,Wintry Mix / Windy,Light Snow Shower,Heavy Snow / Windy,Light Snow and Sleet,Light Snow Grains
Light Snow with Thunder,Blowing Snow / Windy,Snow and Thunder,Light Snow and Sleet / Windy,Snow and Sleet / Windy,Heavy Snow with Thunder,Thunder / Wintry Mix / Windy,Light Snow Showers";

SET @fog = "Haze,Fog,Shallow Fog,Mist,Smoke,Patches of Fog,Light Freezing Fog,Light Haze,Light Fog,Drizzle and Fog,Fog / Windy,Haze / Windy,Partial Fog / Windy,Partial Fog,Heavy Smoke,Smoke / Windy";

SET @drizzle = "Light Freezing Drizzle,Light Drizzle,Drizzle,Heavy Drizzle,Light Drizzle / Windy,Drizzle / Windy,Heavy Freezing Drizzle";

SET @windy = "Volcanic Ash,Blowing Sand,Blowing Dust / Windy,Widespread Dust,Fair / Windy,Cloudy / Windy,Sand,Thunder / Windy,Sand / Dust Whirlwinds,Blowing Dust,Widespread Dust / Windy,Sand / Dust Whirlwinds / Windy,Freezing Rain / Windy";

SET @hail = "Hail,Small Hail";

SET @storm = "Light Thunderstorms and Rain,Thunderstorms and Rain,Thunderstorm,T-Storm,Heavy Thunderstorms and Rain,Heavy T-Storm,Heavy T-Storm / Windy,Squalls,Squalls / Windy,Heavy Thunderstorms with Small Hail,Light Thunderstorm";

SET @tornado = "Tornado, Dust Whirls";

*/

DELIMITER //

CREATE PROCEDURE populate_factors(states VARCHAR(1000)) 
BEGIN

	SET @i=0;
    SET @SubStrLen = 0;

    label1: LOOP
	SET @i = @i+1;
        SET @strLen = LENGTH(states);
        SET @item = SUBSTRING_INDEX(states, ',', 1); 
	
        SELECT COUNT(*) INTO @tempBelowMinusFiftyValue FROM us_accidents u WHERE u.state LIKE @item AND u.temperature < -50;
        SELECT COUNT(*) INTO @tempBelowZeroValue FROM us_accidents u WHERE u.state LIKE @item AND u.temperature BETWEEN -50 AND 0;
        SELECT COUNT(*) INTO @tempBelowFiftyValue FROM us_accidents u WHERE u.state LIKE @item AND u.temperature BETWEEN 0 AND 50;
        SELECT COUNT(*) INTO @tempBelowHundredValue FROM us_accidents u WHERE u.state LIKE @item AND u.temperature BETWEEN 50 AND 100;
        SELECT COUNT(*) INTO @tempBelowHundredFiftyValue FROM us_accidents u WHERE u.state LIKE @item AND u.temperature BETWEEN 100 AND 150;
        SELECT COUNT(*) INTO @tempAboveHundredFiftyValue FROM us_accidents u WHERE u.state LIKE @item AND u.temperature >= 150;
        SELECT COUNT(*) INTO @humidityBelowThirtyValue FROM us_accidents u WHERE u.state LIKE @item AND u.humidity <30;
        SELECT COUNT(*) INTO @humidityBelowSixtyValue FROM us_accidents u WHERE u.state LIKE @item AND u.humidity <60 AND u.humidity >= 30;
        SELECT COUNT(*) INTO @humidityAboveSixtyValue FROM us_accidents u WHERE u.state LIKE @item AND u.humidity >=60;
        SELECT COUNT(*) INTO @pressureBelowTenValue FROM us_accidents u WHERE u.state LIKE @item AND u.pressure < 10;
        SELECT COUNT(*) INTO @pressureBelowTwentyValue FROM us_accidents u WHERE u.state LIKE @item AND u.pressure < 20 AND u.pressure >= 10;
        SELECT COUNT(*) INTO @pressureAboveTwentyValue FROM us_accidents u WHERE u.state LIKE @item AND u.pressure >= 20;
        SELECT COUNT(*) INTO @visibilityBelowThirtyValue FROM us_accidents u WHERE u.state LIKE @item AND u.visibility < 30;
        SELECT COUNT(*) INTO @visibilityBelowSixtyValue FROM us_accidents u WHERE u.state LIKE @item AND u.visibility < 60 AND u.visibility >= 30;
        SELECT COUNT(*) INTO @visibilityBelowHundredValue FROM us_accidents u WHERE u.state LIKE @item AND u.visibility < 100 AND u.visibility >= 60;
        SELECT COUNT(*) INTO @visibilityAboveHundredValue FROM us_accidents u WHERE u.state LIKE @item AND u.visibility >= 100;
        SELECT COUNT(*) INTO @windSpeedBelowThirtyValue FROM us_accidents u WHERE u.state LIKE @item AND u.wind_speed < 30;
        SELECT COUNT(*) INTO @windSpeedBelowSixtyValue FROM us_accidents u WHERE u.state LIKE @item AND u.wind_speed < 60 AND u.wind_speed >= 30;
        SELECT COUNT(*) INTO @windSpeedBelowHundredValue FROM us_accidents u WHERE u.state LIKE @item AND u.wind_speed < 100 AND u.wind_speed >= 60;
        SELECT COUNT(*) INTO @windSpeedBelowTwoHundredValue FROM us_accidents u WHERE u.state LIKE @item AND u.wind_speed < 200 AND u.wind_speed >= 100;
        SELECT COUNT(*) INTO @windSpeedBelowThreeHundredValue FROM us_accidents u WHERE u.state LIKE @item AND u.wind_speed < 300 AND u.wind_speed >= 200;
        SELECT COUNT(*) INTO @windSpeedAboveThreeHundredValue FROM us_accidents u WHERE u.state LIKE @item AND u.wind_speed >= 300;
        
        SELECT COUNT(*) INTO @rainCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Rain%' OR u.weather_condition LIKE '%Showers%' OR u.weather_condition LIKE '%Shower%' OR u.weather_condition LIKE '%receipitaion%');
        SELECT COUNT(*) INTO @snowCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Snow%' OR u.weather_condition LIKE '%Ice%' OR u.weather_condition LIKE '%Wintry%');
        SELECT COUNT(*) INTO @clearCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Clear%' OR u.weather_condition LIKE '%Fair%' OR u.weather_condition LIKE '%Scattered%');
        SELECT COUNT(*) INTO @overcastCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Overcast%' OR u.weather_condition LIKE '%Thunder%' OR u.weather_condition LIKE '%Cloud%');
        SELECT COUNT(*) INTO @fogCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Haze%' OR u.weather_condition LIKE '%Fog%' OR u.weather_condition LIKE '%Mist%' OR u.weather_condition LIKE '%Smoke%'  OR u.weather_condition LIKE '%Smoke%');
        SELECT COUNT(*) INTO @drizzleCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Drizzle%');
        SELECT COUNT(*) INTO @windyCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Ash%' OR u.weather_condition LIKE '%Sand%' OR u.weather_condition LIKE '%Dust%' OR u.weather_condition LIKE '%Windy%');
        SELECT COUNT(*) INTO @hailCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Hail%');
        SELECT COUNT(*) INTO @stormCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Thunderstorms%' OR u.weather_condition LIKE '%T-Storm%' OR u.weather_condition LIKE '%Squalls%');
        SELECT COUNT(*) INTO @tornadoCounter FROM us_accidents u WHERE u.state LIKE @item AND (u.weather_condition LIKE '%Tornado%' OR u.weather_condition LIKE '%Whirls%');
        
        SELECT COUNT(*) INTO @dayCounter FROM us_accidents u WHERE u.state LIKE @item AND u.astronomical_twilight LIKE '%Day%';
        SELECT COUNT(*) INTO @nightCounter FROM us_accidents u WHERE u.state LIKE @item AND u.astronomical_twilight LIKE '%Night%';
        INSERT INTO populate_factors (name, tempBelowMinusFifty, tempBelowZero, tempBelowFifty, tempBelowHundred, tempBelowHundredFifty,tempAboveHundredFifty, humidityBelowThirty, humidityBelowSixty, humidityAboveSixty, pressureBelowTen, pressureBelowTwenty, pressureAboveTwenty,visibilityBelowThirty, visibilityBelowSixty,visibilityBelowHundred, visibilityAboveHundred, windSpeedBelowThirty, windSpeedBelowSixty, windSpeedBelowHundred, windSpeedBelowTwoHundred, windSpeedBelowThreeHundred, windSpeedAboveThreeHundred, clearWeather, overcast, snow, fog, rain, drizzle, windy, hail, storm, tornado, dayTime, nightTime) VALUES (@item, @tempBelowMinusFiftyValue, @tempBelowZeroValue, @tempBelowFiftyValue, @tempBelowHundredValue, @tempBelowHundredFiftyValue, @tempAboveHundredFiftyValue, @humidityBelowThirtyValue, @humidityBelowSixtyValue, @humidityAboveSixtyValue, @pressureBelowTenValue, @pressureBelowTwentyValue, @pressureAboveTwentyValue, @visibilityBelowThirtyValue, @visibilityBelowSixtyValue, @visibilityBelowHundredValue, @visibilityAboveHundredValue, @windSpeedBelowThirtyValue, @windSpeedBelowSixtyValue, @windSpeedBelowHundredValue, @windSpeedBelowTwoHundredValue, @windSpeedBelowThreeHundredValue, @windSpeedAboveThreeHundredValue, @clearCounter, @overcastCounter, @snowCounter, @fogCounter, @rainCounter, @drizzleCounter, @windyCounter, @hailCounter, @stormCounter, @tornadoCounter, @dayCounter, @nightCounter );
        SET @SubStrLen = LENGTH(SUBSTRING_INDEX(states, ',', 1)) + 2;
         
        SET states =  SUBSTRING(states, @SubStrLen);
	


	IF @i>49 THEN
		LEAVE label1;
	END IF;
     
	
    END LOOP label1;
	
END; 

//


DELIMITER ; 


call populate_factors(@listOfStates);
	
