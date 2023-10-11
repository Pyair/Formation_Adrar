CREATE DATABASE jeudecombat;
USE jeudecombat;

/************************
TABLE SANS CLE ETRANGERE
*************************/
CREATE TABLE IF NOT EXISTS joueurs(
id_joueurs int primary key not null auto_increment,
pseudo_joueur varchar(100) not null unique,
mdp_joueur varchar(150) not null,
mail_joueur varchar(250) not null unique
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS costume(
id_costume int primary key not null auto_increment,
nom_costume varchar(100) not null unique
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS item(
id_item int primary key not null auto_increment,
nom_item varchar(100) not null unique,
bonus_point_de_vie int(10) not null,
bonus_defense int(10) not null,
bonus_attaque int(10) not null
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS type_personnage(
id_type_personnage int primary key not null auto_increment,
type_personnage varchar(100) not null unique,
attaque int(10) not null,
point_de_vie int(10) not null,
defense int(10) not null
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS arene(
id_arene int primary key not null auto_increment,
nom_arene varchar(100) not null unique
)ENGINE=innoDB;

/************************
TABLE AVEC CLE ETRANGERE
*************************/
CREATE TABLE IF NOT EXISTS personnage(
id_personnage int primary key not null auto_increment,
nom_personnage varchar(100) not null unique,
id_joueurs int,
id_type_personnage int,
CONSTRAINT fk_id_joueurs FOREIGN KEY (id_joueurs) REFERENCES joueurs(id_joueurs),
CONSTRAINT fk_id_type_personnage FOREIGN KEY (id_type_personnage) REFERENCES type_personnage(id_type_personnage)
)ENGINE=innoDB;


/************************
TABLE D'ASSOCIATION
*************************/
CREATE TABLE IF NOT EXISTS lier(
id_demandeur int not null,
id_accepteur int not null,
CONSTRAINT fk_id_demandeur FOREIGN KEY (id_demandeur) REFERENCES joueurs(id_joueurs),
CONSTRAINT fk_id_accepteur FOREIGN KEY (id_accepteur) REFERENCES joueurs(id_joueurs),
PRIMARY KEY (id_demandeur, id_accepteur)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS communiquer(
id_emetteur int not null,
id_destinataire int not null,
date_message date not null,
sujet_message varchar(250) not null,
message longtext not null,
CONSTRAINT fk_id_emetteur FOREIGN KEY (id_emetteur) REFERENCES joueurs(id_joueurs),
CONSTRAINT fk_id_destinataire FOREIGN KEY (id_destinataire) REFERENCES joueurs(id_joueurs),
PRIMARY KEY (id_emetteur, id_destinataire, date_message)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS acheter(
id_costume int not null,
id_joueurs int not null,
id_personnage int not null,
CONSTRAINT fk_id_costume_achat FOREIGN KEY (id_costume) REFERENCES costume(id_costume),
CONSTRAINT fk_id_joueurs_achat FOREIGN KEY (id_joueurs) REFERENCES joueurs(id_joueurs),
CONSTRAINT fk_id_personnage_achat FOREIGN KEY (id_personnage) REFERENCES personnage(id_personnage),
PRIMARY KEY (id_costume, id_joueurs, id_personnage)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS obtenir(
id_item int not null,
id_personnage int not null,
equipe tinyint not null,
CONSTRAINT fk_id_item_inventaire FOREIGN KEY (id_item) REFERENCES item(id_item),
CONSTRAINT fk_id_personnage_inventaire FOREIGN KEY (id_personnage) REFERENCES personnage(id_personnage),
PRIMARY KEY (id_item, id_personnage)
)ENGINE=innoDB;

CREATE TABLE IF NOT EXISTS combattre(
id_vaincu int not null,
id_vainqueur int not null,
id_arene int not null,
date_combat date not null,
CONSTRAINT fk_id_vaincu FOREIGN KEY (id_vaincu) REFERENCES personnage(id_personnage),
CONSTRAINT fk_id_vainqueur FOREIGN KEY (id_vainqueur) REFERENCES personnage(id_personnage),
CONSTRAINT fk_id_arene FOREIGN KEY (id_arene) REFERENCES arene(id_arene),
PRIMARY KEY (id_vaincu, id_vainqueur, id_arene, date_combat)
)ENGINE=innoDB;

INSERT INTO type_personnage (type_personnage, point_de_vie, defense, attaque)
VALUES ("Barbare", 125, 5, 15),
    	("Guerrier", 100, 10, 10),
    	("Chevalier", 75, 15, 5);
        
INSERT INTO arene (nom_arene)
VALUES ("Colisé"),
    	("Muraille"),
    	("Armurerie");
        
INSERT INTO item (nom_item, bonus_point_de_vie, bonus_defense, bonus_attaque)
VALUES ("Arme de base", 0, 0, 0),
		("Bouclier de la Méduse", 25, 15, 10),
    	("Marteau de Thor", 25, 5, 20),
    	("Excalibur", 20, 10, 20),
    	("Egide", 20, 30, 0),
    	("Sainte Lance", 10, 10, 30);
        
INSERT INTO costume (nom_costume)
VALUES ("La Facheuse"),
    	("Le Lapin de Pâque"),
		("La Banshee"),
		("Jeane d'Arc"),
    	("Phénix");
        
INSERT INTO joueurs(pseudo_joueur, mdp_joueur, mail_joueur)
VALUES ("Dark Schneider","12345","dark.s@gmail.com"),
    	("Perceval","Kaamelott31","alexast@sfr.fr"),
    	("Guts","berserker#666","ceska@orange.fr"),
    	("Broly","cacarot974","guillaume@gmail.com"),
    	("Suskiki666","NarutoIsTheBest","hinatainlove@sfr.fr");
        
INSERT INTO personnage(nom_personnage, id_joueurs, id_type_personnage)
VALUES ("Power Killer",1,1),
    	("Mordred",2,3),
    	("Griffith",3,3),
    	("Vegeta",4,2),
    	("Kakashi",5,2),
    	("Bohort",2,1),
    	("Lars",1,3);
        
INSERT INTO combattre(date_combat, id_arene, id_vainqueur, id_vaincu)
VALUES ("2022-06-23",1,1,2),
    	("2022-06-23",2,3,2),
    	("2022-07-01",3,6,5),
    	("2022-07-13",1,5,7),
    	("2022-07-15",1,4,1),
		("2022-07-17",1,4,1);
    
INSERT INTO obtenir(id_item, id_personnage, equipe)
VALUES(6,1,0),
    	(6,2,0),
    	(6,3,0),
    	(6,4,0),
    	(6,5,0),
    	(6,6,1),
    	(6,7,1),
    	(1,1,1),
    	(2,1,0),
    	(3,2,1),
    	(4,3,1),
    	(5,4,1),
    	(1,5,1),
    	(3,3,0),
    	(4,1,0);

INSERT INTO lier(id_demandeur, id_accepteur)
VALUES (3,1),
    	(3,2),
		(1,4),
    	(4,5),
    	(5,2),
		(5,3);
        
INSERT INTO communiquer(id_emetteur, id_destinataire, date_message, sujet_message, message)
VALUES (1,3, "2022-06-21","Hey","Salut bro ! Comment tu vas ?"),
    	(3,1, "2022-06-21", "Re:Hey","Salut poto ! Ca va super. C'est l'éclate ce jeu. :D"),
    	(1,3, "2022-06-22", "ReRe:Hey","Ha ha, t'as vu, je te l'avais dis. Heureusement que je t'ai bassiné avec pendant des plombes. ;)"),
    	(3,1, "2022-06-22", "ReReRe:Hey","J'avoue XD  Au passage, je viens de me payer la tenue de Jeane D'Arc. Tu sais, la version Fate Apocryphe"),
    	(1,2, "2022-06-23", "Salut","Coucou toi. Je savais que t'étais sur le jeu. Comment tu vas"),
    	(2,3, "2022-06-23", "Dis, t'aurais pas gaffé","Hé toi, par hasard, t'aurai pas dit à ton pote que j'étais sur le jeu. Non parce que ce relou vient de m'envoyer un message.");
        
alter table costume
add prix_costume int;


alter table costume
modify prix_costume float;

update costume 
set prix_costume = 20 where nom_costume = "La Facheuse";

update costume
set prix_costume = 35 where nom_costume = "Le lapin de Pâque" or nom_costume = "Phénix"; 

update costume 
set prix_costume = 15.50 where nom_costume = "La Banshee";

update costume 
set prix_costume = 29.50 where nom_costume = "Jeanne d'Arc";

update costume 
set prix_costume = 29.50 where nom_costume = "Jeane d'Arc";

select * from costume;

insert into acheter (id_joueurs, id_costume, id_personnage)
value (1,1,1),
(1,2,7),
(3,4,3),
(1,3,1),
(3,5,3),
(5,1,5);

select * from acheter;

select pseudo_joueur from joueurs; 