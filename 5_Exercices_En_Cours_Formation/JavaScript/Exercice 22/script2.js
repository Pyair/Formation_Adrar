/*
Jeu de Dés (en Programmation Orienté Objet)

Les règles : 2 joueurs s'affrontent en lançant chacun un dé à 6 faces.
Celui qui fait le plus haut score marque 1 point.
En cas d'égalité, aucun point n'est gagné.
Le premier joueur qui marque 3 points remporte la partie.

1) Identifier les différents Objets que l'on va devoir simuler (indice : il y en a 3). On identifie par là même les Classes à implémenter.
2) Identifier les propriétés de nos Classes.
3) Ecrire en langage naturelle (celui qu'on utilise tous les jours) les grandes étapes d'une partie.
4) Affiner les grandes étapes en une série d'action à implémenter dans le code. (Exemple : "création des joueurs", "afficher le score", "comparer les scores", ...)?
5) Vérifier que l'on a oublié aucune propriété.
6) Identifier les méthodes de nos Classes permettant de mener à bien une partie.
7) Tester pour voir si tout se passe bien.

BONUS : Création de l'interface de jeu
1) Dans le HTML : créer des balises permettant de créer les 2 joueurs (ce sera un formulaire avec un input et un button pour chacun)
2) Placer une balise pour lancer chaque manche (un button pour lancer les dés)
3) Placer une zone pour chaque joueur qui affichera le score
4) Placer une zone pour chaque joueur qui affichera le résultat de chaque lancer
5) Placer une zone qui affichera la fin du jeu, ainsi que le nom du vainqueur
6) Reliser tout ça au Javascript pour faire fonctionner le jeu
*/

class Dice {
    constructor(nbrFace){
        this.nbrFace = nbrFace;
    }
}

class Player {
    constructor(nom, score, dice){
        this.nom = nom;
        this.score = score;
        this.dice = dice;
    }

    newPlayer() {
        console.log(`Voici le nom de l'utilisteur : ${this.nom}
        Voici le score : ${this.score}
        Voici le dé lancé : ${this.dice}`);
    }

    lanceDice(){
        console.log("Le résultat du dé est :")
        let resultat = 0;
        resultat = Math.floor(Math.random()*this.dice.nbrFace)+1;
        this.dice= resultat;
        return resultat;
    }
}

class Game {
    constructor(playerOne, playerTwo, point){
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.point = point;
    }

    displayGame(){
        console.log(`Voici le joueur 1 : ${this.playerOne.nom}
        Voici le joueur 2 : ${this.playerTwo.nom}
        Voici le nombre de points : ${this.point}`);
    }
    
}

const playerOne = new Player ("Pierre", 0, new Dice(6));
const playerTwo = new Player ("Kylian", 0, new Dice(6));

const Partie = new Game (playerOne, playerTwo, 3);

Partie.playerOne.newPlayer();
Partie.playerTwo.newPlayer();

Partie.displayGame();
console.log(Partie.playerOne.lanceDice());



//QUESTION 3
//Etape 1 : Définir les joueurs
//Etape 2 : Choisir le Premier joueur
//Etape 3 : Choisir les dés à lancer
//Etape 4 : Lancer les dés
//Etape 5 : Lire les résultats
//Etape 6 : Définir qui gagne la manche
//Etape 7 : Ajuster le score du vainqueur
//Etape 8 : Vérifier si l'un des joueurs remporte la partie. Si aucun n'a remporté la partie, recommencer à l'étape 4.


//QUESTION 4
//Etape 2 : Choisir le premier joueur
    //- Créer la partie en définissant le premier et le second joueur
        //Etape 1 : Définir les joueurs
            //- Créer les joueurs en donnant un nom
        //Etape 3 : Choisir les dés à lancer
            //- Créer les dés à lancer
        //- Afficher les joueurs
    //- Afficher la partie : afficher les joueurs et afficher leur score
//Etape 4 : Lancer les dés
    //- Appeler une méthode pour lancer les dés pour chaque joueur
//Etape 5 : Lire les résultats
    //- Afficher les résultat de chaque dé pour chaque joueur
//Etape 6 : Définir qui gagne la manche
    //- Appeler une méthode qui va comparer les résultats
//Etape 7 : Ajuster le score du vainqueur
    //- S'il y a un vainqueur, incrémenter le score du joueur vainqueur
    //- Afficher le nouveau score
//Etape 8 : Vérifier si l'un des joueurs remporte la partie. Si aucun n'a remporté la partie, recommencer à l'étape 4.
    //- Comparer le score du vainqueur avec la limite de point de la partie
    //- Si le vainqueur atteint la limite de point, mettre fin à la partie
    //- Et afficher le nom du vainqueur
    //- Sinon, on permet de recommencer à l'étape 4


//QUESTION 6
//- Créer la partie en définissant le premier et le second joueur : -> new Game() donc pas de méthode à définir dans une classe

//- Créer les joueurs en donnant un nom : -> new Player() donc pas de méthode à définir dans une classe

//- Créer les dés à lancer : -> new Dice() donc pas de méthode à définir dans une classe

//- Afficher les joueurs : -> afficherPlayer(), à définir dans la Classe Player

//- Afficher la partie : afficher les joueurs et afficher leur score : -> afficherGame(), à définir dans la Classe Game

//- Appeler une méthode pour lancer les dés pour chaque joueur : -> lancerDice(), à définir dans la Classe Player

//- Afficher les résultat de chaque dé pour chaque joueur : -> afficherDice(), à définir dans la Classe Player

//- Appeler une méthode qui va comparer les résultats : -> comparerDice(), à définir dans la Classe Game

//- S'il y a un vainqueur, incrémenter le score du joueur vainqueur : ajusterScore(), à définir dans la Classe Game

//- Afficher le nouveau score : -> afficherScore(), à définir dans la Classe  Game

//- Comparer le score du vainqueur avec la limite de point de la partie : -> comparerScore(), à définir dans la Classe Game

//- Et afficher le nom du vainqueur : -> afficherVainqueur(), à définir dans la Classe Game


