// Exercice all_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
// Exemple : position_biggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1

let tab = [4,85,113,23,36]

function getPosition(tab){
   let nMax = tab[0];
   for (let i=1; i<tab.length; i++){
       if(tab[i] > nMax){
           nMax = tab[i];
       }
   }
   return nMax;
}

console.log(getPosition(tab));

// Exercice all_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.

function sum(tab){
    let sum =0; 
    for (let i=0; i<tab.length; i++){
        sum += tab[i];
    } 
    return sum;
}

console.log(sum(tab));

// Exercice all_3 : écrire une fonction qui retourne la somme des valeurs positives d'une liste.
let tab2 = [-4,85,-113,23,36]
function sum(tab){
    let sum =0; 
    for (let i=0; i<tab.length; i++){
        
        if (tab[i] > 0)
            sum += tab[i];
    } 
    return sum;
}

console.log(sum(tab2));

// Exercice all_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'une liste.
let tab3 = [-4,85,-113,23,36,-554]
function sumN(tab){
    let sum =0; 
    for (let i=0; i<tab.length; i++){
        
        if (tab[i] < 0)
            sum += tab[i];
    } 
    return sum;
}

console.log(sumN(tab3));
