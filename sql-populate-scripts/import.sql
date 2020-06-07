USE avi;
DROP TABLE IF EXISTS us_accidents;
CREATE TABLE IF NOT EXISTS us_accidents (
	id VARCHAR(256) NOT NULL,
	source VARCHAR(256) NOT NULL,
	tmc FLOAT,
	severity INT,
	start_time VARCHAR(256),
	end_time VARCHAR(256),
	start_lat FLOAT,
	start_lng FLOAT,
	end_lat FLOAT,
	end_lng FLOAT,
	distance FLOAT,
	description VARCHAR(256),
	number FLOAT,
	street VARCHAR(256),
	side CHAR(1),
	city VARCHAR(256),
	county VARCHAR(256),
	state CHAR(2),
	zipcode VARCHAR(256),
	country CHAR(2),
	timezone VARCHAR(256),
	airport_code VARCHAR(256),
	weather_timestamp VARCHAR(256),
	temperature FLOAT,
	wind_chill FLOAT,
	humidity FLOAT,
	pressure FLOAT,
	visibility FLOAT,
	wind_direct VARCHAR(256),
	wind_speed FLOAT,
	precipitation FLOAT,
	weather_condition VARCHAR(256),
	amenity BOOLEAN,
	bump BOOLEAN,
	crossing BOOLEAN,
	give_way BOOLEAN,
	junction BOOLEAN,
	no_exit BOOLEAN,
	railway BOOLEAN,
	roundabout BOOLEAN,
	station BOOLEAN,
	stop BOOLEAN,
	traffic_calming BOOLEAN,
	traffic_signal BOOLEAN,
	turning_loop BOOLEAN,
	sunrise_sunset VARCHAR(256),
	civil_twilight VARCHAR(256),
	nautical_twilight VARCHAR(256),
	astronomical_twilight VARCHAR(256)
);

LOAD DATA INFILE 'C:\\xampp\\mysql\\data\\data.csv'
INTO TABLE us_accidents
CHARACTER SET latin1
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;