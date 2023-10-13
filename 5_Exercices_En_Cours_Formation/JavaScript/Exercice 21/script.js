console.log("Hello World !");

console.error("FATAL ERROR !");

let maVoiture = {
    couleur : "rouge",
    vitesse : 90,
}

console.log(maVoiture);


let P = new Object(undefined);
let Q = new Object(null);
let R = new Object(true);
let S = new Object(Boolean);

let string = "Ceci est une chaîne";
let nombre = 5428;
let dec = 15.547;
// parseFloat(dec);
let tableaux = [15,24,35,45];
let maZinzo ={
    Prénom : "Emma",
    iq : "négatif",
    Taille : "1m12",
    Personnalité : "Fucked up",
    Beauté : "INCOMMENSURABLE"
} 

console.log(string,nombre,dec,tableaux,maZinzo);

// CORRECTION 
//? Les types de variables (JS utilise un typage dynamique)
let uneString = 'MDR';
let unNombreu = 11;
let uneDecimale = 8.5;
let unBooleen = true;
let unTableau = [1,2,3,'Hello'];
let unObjet = {
propriete1 : 22,
propriete2:'LOL'
};

console.log(uneString);
console.log(unNombreu);
console.log(uneDecimale);
console.log(unBooleen);
console.log(unTableau);
console.log(unObjet);

let compteur = 0;

compteur += 10; 
console.log(compteur);

compteur += 5;
console.log(compteur);

compteur++;
console.log(compteur);

compteur -= 5;
console.log(compteur);

compteur--;
console.log(compteur);

// Exercice 3

let monEntier =8;
let monDecimal= 12.2;
monEntier *= 5;
console.log(monEntier);
monEntier /= 2;
console.log(monEntier);
monDecimal *= 5;
console.log(monDecimal);
monEntier = monEntier**9;
console.log(monEntier);

function monDecimale(a) {
    result = a*=5
    return result;
};

console.log(monDecimale(25));

// Correction ex3
console.log(42*675);
let unChiffre = 9;
let unNombre = 33;

console.log(unChiffre*unNombre);

let resultat = unChiffre*unNombre;
console.log(resultat);

console.log(2,9+1,3);

console.log(2.9+1.3);

console.log((1+1)-(2*3)/2);

console.log(10%2);


let unCompteur = 0;
console.log(unCompteur+1);
unCompteur = 0;
unCompteur = unCompteur+1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur = unCompteur + 1
unCompteur +=1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur + 1
unCompteur ++;
console.log(unCompteur);
//* unCompteur - 1
unCompteur --;
console.log(unCompteur);
//* unCompteur = unCompteur + 10
unCompteur +=10;
console.log(unCompteur);
//* unCompteur = unCompteur x 10
unCompteur *=10;
console.log(unCompteur);
//* unCompteur = unCompteur / 10
unCompteur /=10;
console.log(unCompteur);
//* unChiffre puissance 9
console.log(unChiffre**9);

// Pokemon
let Pierre = "onyx";
let Sacha = "pikachu";
[Pierre, Sacha] = [Sacha , Pierre]

console.log(Pierre);
console.log(Sacha);
// Correction Pokpok
// let sacha = "pikachu";
// let pierre = "onyx";
console.log(Sacha, Pierre);
let temp = Sacha;
Sacha = Pierre;
Pierre = temp;
console.log(Sacha, Pierre);

let maPhrase = `Bonjour mr."GINGLE"`;
let ma2ndPhrase = `Bonjour, j'aime la quiche`;

console.log(maPhrase);
console.log(ma2ndPhrase);

let nom = "Idil"
let age = 21;
let phrase = `Bonjour je m'appelle ${nom} j'ai ${age}`;

console.log(phrase);

let phrase2 = `Bonjour ${nom} tu as ${age} Aujourd'hui on pète le champomy`
console.log(phrase2);

// Correction 

//Solution 1 : utilisaer le caractère d'échappement \
console.log("Bonjour mr\"GINGLE\"");
console.log('Bonjour j\'aime la quiche');

//Solution 2 : utliser le simple quote pour conserver les guillemets
// utiliser les doubles quote pour conserver les aspostrophe
console.log('Bonjour mr."GINGLE"');
console.log("Bonjour j'aime la quiche");

//Solution 3 : utiliser les Templates strings
console.log(`Bonjour mr."GINGLE"`);
console.log(`Bonjour j'aime la quiche`);

// let nom = "Jean-Jacques";
// let age = 42;
// let phrase;

phrase = "Bonjour (la variable pour le nom) tu as (la variable pour l'âge) ans aujourd'hui, c'est la fiesta !";

//solution 1 : concaténation
phrase = "Bonjour " + nom +" tu as " + age+" ans aujourd'hui, c'est la fiesta !";
console.log(phrase);

//solution 2 : template string
phrase = `Bonjour ${nom} tu as ${age} ans aujourd'hui, c'est la fiesta !`;
console.log(phrase);

// Exo 6

let prenom = "Kako";
let kAge = 25;
let passion = ["cinema","photographie"];
let tabUser = [prenom, kAge, passion];
console.log(tabUser);
console.log(tabUser[2]);
console.log(tabUser[2][1]);

// Exo 7 :

let tab = [12,65,25,"blabla"];
tab.push(12);
console.log(tab);

console.log(tab.unshift("Moon", "Light"));
console.log(tab.pop());
console.log(tab.pop());
console.log(tab);
console.log(tab.shift());
console.log(tab)


// Exo 8 
let varr = "Sheesh";
console.log(varr.length);
console.log(varr[1]);
console.log(varr[5]);
console.log(varr[varr.length-1]);

// Exo 9
let leNom = "BRUNOWO";
let lePrenom = "EMOWOOOO";
let laPhrase = [];
let lesInitiales = leNom[0] + lePrenom[0];
laPhrase.push(leNom,lePrenom,lesInitiales);
console.log(laPhrase);

// Exo 10
let user = {
    prenom : "Kakao",
    age : 25,
    passions : {
    passion1 : "cinema",
    passion2 : "photographie",
    }
}

console.log(user);
console.log(user.passions);
console.log(user.passions.passion2);

// Exo 11 
let tablo = [16,4,0]
function teb(tabb) {
    let result = (tabb[0] + tabb[1] + tabb[2])/3
    if (result >= 15) {
        return "Très bien"
    }
    else if (result >= 10) {
        return "Assez bieng"
    }
    else {
        return "refus"
    }
}

console.log(teb(tablo));

let lesTxt = document.getElementsByTagName("p");

console.log(lesTxt);

// Exo 13
let textesTab = Array.from(lesTxt);;
console.log(textesTab);

// Ex 14 
function temporary(p) {
    console.log(p.innerHTML);
    p.innerText = "Salut c'est cool";

}

textesTab.map((x) => temporary(x));

// Exo 15
let tabEleves = [[10,16,5],[20,18,16],[5,8,9],[12,13,14],[15,16,13]];

tabEleves.forEach((element) => (element.forEach((note)=> console.log(note))));

// Correction Exercice 15 :
// const tabEleves = [[10,16,5],[20,18,16],[5,8,9],[12,13,14],[15,16,13]];

// //Exemple avec forEach()
// tabEleves.forEach((eleve) => {
//     eleve.forEach(note => console.log(note))
// })

// //Exemple avec For Of
// for(let eleve of tabEleves){``
//     for(let note of eleve){
//         console.log("FOR OF : "+note);
//     }
// }

// //Exemple avec Map()
// tabEleves.map(eleve => {
//     eleve.map(note => console.log("MAP : "+note))
// })

// Exo 16

tabEleves = [
    {nom : "Norauto", ninjutsu : 10, chakra : 16, math : 5},{nom : "Suskiki", ninjutsu : 20, chakra : 18, math : 16},{nom : "Horiblemaru", ninjutsu : 5, chakra : 8, math : 9},{nom : "Gros Sourcil", ninjutsu : 12, chakra : 13, math : 14},{nom : "Sakusaku", ninjutsu : 15, chakra : 16, math : 13}
]

tabEleves.forEach((element) => console.log(element.nom,element.ninjutsu, element.chakra, element.math));

// Correction Exercice 16 :
//Dans le cas où on connait l'objet en question => pas très bien
// tabEleves2.map(eleve => {
//     console.log("nom : "+eleve.nom);
//     console.log("ninjutsu : "+eleve.ninjutsu);
//     console.log("chakra : "+eleve.chakra);
//     console.log("math : "+eleve.math);
// });

// //Dans le cas où on ne connait pas à l'avance les détails de notre objet  => Meilleur choix
// tabEleves2.map(eleve => {
//     for(let element in eleve){
//         console.log(`FOR IN  - ${element} : ${eleve[element]}`);
//     }
// }); 

const userData = {
    name: 'John delavega',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true,
    img:"https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg"
    };


    document.body.onload = addElement;

function addElement() {
  // crée un nouvel élément div
  let newH1 = document.createElement("h1");
  // et lui donne un peu de contenu
  newH1.innerText = userData.name;
  document.body.append(newH1);


    let newImage = document.createElement("img");
    newImage.src = userData.img;

    document.body.append(newImage);
}


    let monImage = "image";
    monImage.src ="https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg";
    let elementImage = document.createElement(monImage);
    monImage.src = 
    
    document.body.append(monImage);

    // elementImage = document.getElementsByTagName(monImage);
    // document.body.append(image);
