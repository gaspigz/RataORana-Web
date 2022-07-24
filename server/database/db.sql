CREATE TABLE imagenes (
    id INT(6) AUTO_INCREMENT PRIMARY KEY,
    imgurl VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    ratavotes INT(255) NOT NULL default(0),
    ranavotes INT(255) NOT NULL default(0),
    valido INT(1) NOT NULL default(0)

);

INSERT INTO imagenes (imgurl,name,ratavotes,ranavotes, valido) VALUES ('https://media.theobjective.com/app/uploads/2022/07/112451/Brad-Pitt-1024x714.jpg','Bradd Pitt',0,0,1);