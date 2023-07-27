// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
// PDV interne, écriture de la fonction
function lastNumberTab(a) {
    console.log(a[a.length-1]);
}

// PDV externe, test de la fonction

let tab1 = [5,8,46,5];
let tab2 = [96,8,2,34];
let tab3 = [656,12,-8,98,8,-57,20]
lastNumberTab(tab1);
lastNumberTab(tab2);


// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLastElement(a){
    return a[a.length-1];
}
console.log(returnLastElement(tab2));


// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function minimum(t){
    let minSoFar = t[0];
    for (let i=1; i<t.length; i++) {

        if(t[i]<minSoFar){
            minSoFar = t[i];
        }
    } 
    return minSoFar;
}

console.log(minimum(tab1));
console.log(minimum(tab2));
console.log(minimum(tab3));
// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function maximum(t){
    let maxSoFar = t[0];
    for (let i=1; i<t.length; i++) {

        if(t[i]>maxSoFar){
            maxSoFar = t[i];
        }
    } 
    return maxSoFar;
}
console.log(maximum(tab1));
console.log(maximum(tab2));
console.log(maximum(tab3));
// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function getNtimes(t,startingP){
  let NofTimes=0
  for (let i=0; i<t.length; i++){
      if (t[i] == startingP){

            NofTimes++;

      }
  } return NofTimes;
}
console.log(getNtimes(tab1,0));

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function getIfExist(tab,n) {
    for (let i=0; i<tab.length; i++){

        if (tab[i] == n ){
            return true;
        } else {
            return false;
        }
    }
}
console.log(getIfExist(tab1,9879588296));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tablo = [];
for (let i=1; i<=7777; i++){
    tablo.push(i);
}
console.log(tablo);

// Créer un tableau qui contient [10,20,30,...,77770].
let tablo2 = [];
for (let i=10; i<=77770; i+=10){
    tablo2.push(i);
}
console.log(tablo2);

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].
let tablo3 = [];
for (let i=10/2; i<=77770; i+=10/2){
    tablo3.push(i);
}
console.log(tablo3);    
// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12]); // doit afficher [1,45,88,54]