USE avi;

DROP PROCEDURE IF EXISTS populate;
DROP TABLE IF EXISTS state_cases;
CREATE TABLE IF NOT EXISTS state_cases(
	name VARCHAR(2),
	cases INT
);
SET FOREIGN_KEY_CHECKS = 0;
SET @listOfStates = 'AK,AL,AR,AZ,CA,CO,CT,DE,FL,GA,HI,IA,ID,IL,IN,KS,KY,LA,MA,MD,ME,MI,MN,MO,MS,MT,NC,ND,NE,NH,NJ,NM,NV,NY,OH,OK,OR,PA,RI,SC,SD,TN,TX,UT,VA,VT,WA,WI,WV,WY';


SET FOREIGN_KEY_CHECKS = 0;



DELIMITER //

CREATE PROCEDURE populate(states VARCHAR(1000)) 
BEGIN
    
	SET @i=0;
    SET @SubStrLen = 0;
    label1: LOOP
	SET @i = @i+1;
        SET @strLen = LENGTH(states);
        SET @item = SUBSTRING_INDEX(states, ',', 1); 
	
        SELECT COUNT(*) INTO @itemValue FROM us_accidents u WHERE u.state LIKE @item;
 	
	
        INSERT INTO state_cases (name, cases) VALUES (@item, @itemValue);
	
        SET @SubStrLen = LENGTH(SUBSTRING_INDEX(states, ',', 1)) + 2;
         
        SET states =  SUBSTRING(states, @SubStrLen);
	


	IF @i>49 THEN
		LEAVE label1;
	END IF;
     
	
    END LOOP label1;
	
END; 

//


DELIMITER ; 


call populate(@listOfStates);
	
