create database if not exists jeucombat;

use jeucombat;

CREATE TABLE if not exists joueur(
   id_joueur int auto_increment not null,
   pseudo_joueur varchar(100),
   mail_joueur varchar(100),
   mdp_joueur varchar(100),
   PRIMARY KEY(id_joueur),
   UNIQUE(pseudo_joueur),
   UNIQUE(mail_joueur)
);

CREATE TABLE type(
   id_type int auto_increment not null,
   pdv_type char(4),
   attaque_type char(4),
   defense_type char(4),
   type_personnage VARCHAR(50),
   PRIMARY KEY(id_type),
   UNIQUE(type_personnage)
);

CREATE TABLE if not exists  item(
   id_item int auto_increment not null,
   nom_objet VARCHAR(50),
   bonus_pdv char(4),
   bonus_defense char(4),
   bonus_attaque char(4),
   PRIMARY KEY(id_item),
   UNIQUE(nom_objet)
);

CREATE TABLE if not exists arene(
   id_arene int auto_increment not null,
   nom_arene VARCHAR(50),
   PRIMARY KEY(id_arene),
   UNIQUE(nom_arene)
);

CREATE TABLE if not exists costume(
   id_boutique int auto_increment not null,
   nom_costume VARCHAR(50),
   PRIMARY KEY(id_boutique),
   UNIQUE(nom_costume)
);

CREATE TABLE if not exists personnage(
   id_perso int not null auto_increment,
   nom_perso varchar(100),
   id_joueur int NOT NULL,
   id_type int NOT NULL,
   PRIMARY KEY(id_perso),
   FOREIGN KEY(id_joueur) REFERENCES joueur(id_joueur),
   FOREIGN KEY(id_type) REFERENCES type(id_type)
);

CREATE TABLE obtenir(
   id_perso int not null auto_increment,
   id_item int not null,
   equipe bit,
   PRIMARY KEY(id_perso, id_item),
   FOREIGN KEY(id_perso) REFERENCES personnage(id_perso),
   FOREIGN KEY(id_item) REFERENCES item(id_item)
);

CREATE TABLE combat(
   id_perso_vainqueur int not null auto_increment,
   id_perso_vaincu int not null,
   id_arene int not null,
   date_combat DATE,
   PRIMARY KEY(id_perso_vainqueur, id_perso_vaincu, id_arene, date_combat),
   FOREIGN KEY(id_perso_vainqueur) REFERENCES personnage(id_perso),
   FOREIGN KEY(id_perso_vaincu) REFERENCES personnage(id_perso),
   FOREIGN KEY(id_arene) REFERENCES arene(id_arene)
);

CREATE TABLE achete(
   id_joueur int not null auto_increment,
   id_perso int not null,
   id_boutique int not null,
   PRIMARY KEY(id_joueur, id_perso, id_boutique),
   FOREIGN KEY(id_joueur) REFERENCES joueur(id_joueur),
   FOREIGN KEY(id_perso) REFERENCES personnage(id_perso),
   FOREIGN KEY(id_boutique) REFERENCES costume(id_boutique)
);

CREATE TABLE Asso_11(
   id_joueur_id_accepteur int not null auto_increment,
   id_joueur_id_demandeur int not null,
   PRIMARY KEY(id_joueur_id_accepteur, id_joueur_id_demandeur),
   FOREIGN KEY(id_joueur_id_accepteur) REFERENCES joueur(id_joueur),
   FOREIGN KEY(id_joueur_id_demandeur) REFERENCES joueur(id_joueur)
);

CREATE TABLE commmuniquer(
   id_joueur_id_destinataire int not null auto_increment,
   id_joueur_id_emetteur int not null,
   date_message DATE,
   sujet_message VARCHAR(50),
   message VARCHAR(300),
   PRIMARY KEY(id_joueur_id_destinataire, id_joueur_id_emetteur),
   FOREIGN KEY(id_joueur_id_destinataire) REFERENCES joueur(id_joueur),
   FOREIGN KEY(id_joueur_id_emetteur) REFERENCES joueur(id_joueur)
);


insert into type (type_personnage, pdv_type, defense_type, attaque_type)
value ("Barbare", 125, 5, 15),
("Guerrier", 100, 10, 10),
("Chevalier", 75, 15, 5);
 
insert into arene (nom_arene)
value ("Colisé"),
 ("Muraille"),
 ("Armurerie");
 
 Select * from type;
 Select * from arene;
 
insert into item (nom_objet, bonus_pdv, bonus_defense, bonus_attaque)
value ("Arme de base", 0, 0, 0),
("Bouclier de la Méduse", 25, 15, 10),
 ("Marteau de Thor", 25, 5, 20),
 ("Excalibur", 20, 10, 20),
 ("Egide", 20, 30, 0),
 ("Sainte Lance", 10, 10, 30);
 
 select * from item;
 
insert into costume (nom_costume)
value ("La Facheuse"),
("Le Lapin de Pâque"),
("La Banshee"),
("Jeane d'Arc"),
("Phénix");

select * from costume;
 
insert into joueur (pseudo_joueur, mdp_joueur, mail_joueur)
value ("Dark Schneider","12345","dark.s@gmail.com"),
 ("Perceval","Kaamelott31","alexast@sfr.fr"),
 ("Guts","berserker#666","ceska@orange.fr"),
 ("Broly","cacarot974","guillaume@gmail.com"),
 ("Suskiki666","NarutoIsTheBest","hinatainlove@sfr.fr");
 
 select * from joueur;
 
insert into personnage (nom_perso, id_joueur, id_type)
Value ("Power Killer",1,1),
 ("Mordred",2,3),
 ("Griffith",3,3),
 ("Vegeta",4,2),
 ("Kakashi",5,2),
 ("Bohort",2,1),
 ("Lars",1,3);
 
select * from personnage;

insert into combat (date_combat, id_arene, id_perso_vainqueur, id_perso_vaincu)
Value ("2022-06-23",1,1,2),
 ("2022-06-23",2,3,2),
 ("2022-07-01",3,6,5),
 ("2022-07-13",1,5,7),
 ("2022-07-15",1,4,1),
 ("2022-07-17",1,4,1);
 
select * from combat;

insert into inventaire (id_item, id_personnage, equipe)
Value (6,1,false),
 (6,2,false),
 (6,3,false),
 (6,4,false),
 (6,5,false),
 (6,6,true),
 (6,7,true),
 (1,1,true),
 (2,1,false),
 (3,2,true),
 (4,3,true);