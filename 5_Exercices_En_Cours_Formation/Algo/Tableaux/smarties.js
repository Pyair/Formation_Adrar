// Le but de cet exercice est de répondre à quelques questions concernant mes derniers relevés de Smarties®.

// Dans une boîte de Smarties®, il y a des bonbons de 8 couleurs différentes : rose, rouge, orange, jaune, vert, bleu, violet, marron
// Dans ma première boîte, j'ai eu 3, 6, 7, 3, 6, 2, 2 et 1 bonbons de chaque couleur, respectivement
// Comment pourrais-je stocker cette information là en js ?

let smarties = [[3, 6, 7, 3, 6, 2, 2, 1], [2, 1, 12, 4, 2, 3, 4, 2], [3, 4, 8, 7, 4, 0, 1, 3], [3, 4, 5, 4, 4, 3, 5, 1], [2, 4, 6, 3, 3, 2, 5, 4], [3, 1, 9, 4, 3, 3, 1, 5], [2, 2, 6, 5, 5, 2, 1, 6], [4, 6, 7, 3, 1, 1, 3, 4], [6, 4, 4, 5, 1, 0, 4, 5], [3, 1, 3, 3, 4, 3, 4, 8], [4, 3, 6, 4, 2, 3, 6, 2], [4, 7, 3, 2, 5, 2, 5, 1], [1, 0, 13, 6, 2, 0, 5, 2], [5, 2, 1, 5, 6, 3, 3, 4], [2, 4, 3, 4, 7, 3, 2, 4], [8, 6, 3, 2, 1, 2, 1, 5], [6, 4, 3, 4, 4, 0, 3, 5], [6, 8, 2, 2, 4, 5, 2, 1], [3, 6, 2, 5, 5, 2, 3, 3], [4, 5, 4, 1, 6, 4, 2, 3], [2, 6, 2, 3, 4, 2, 6, 4], [3, 2, 5, 8, 2, 3, 4, 1], [3, 2, 3, 3, 6, 5, 3, 4], [2, 1, 1, 3, 4, 3, 7, 8], [2, 3, 2, 5, 2, 3, 6, 6], [1, 6, 6, 0, 5, 4, 2, 5], [2, 2, 6, 2, 3, 4, 4, 6], [4, 6, 7, 2, 3, 3, 3, 1], [3, 5, 0, 9, 1, 6, 3, 2], [3, 2, 5, 3, 3, 6, 3, 4], [4, 3, 4, 0, 6, 5, 4, 3], [6, 4, 4, 2, 6, 2, 1, 4], [6, 2, 2, 2, 5, 5, 4, 3], [2, 4, 4, 2, 6, 4, 3, 4], [8, 3, 8, 2, 2, 4, 0, 2], [2, 3, 8, 2, 3, 2, 1, 8], [3, 1, 7, 2, 2, 7, 4, 3]];


// Comment pourrais-je stocker toutes les informations du fichier smarties.data ?
<<<<<<< HEAD
=======



>>>>>>> 65483eb3a84f61cf648df721d0d25e3ae9257490
// Maintenant que j'ai ces données :
// Combien y a-t-il de Smarties® dans chaque boîte ?
let sum =0;

for (let i=0; i<smarties.length; i++){
    let smartiesBox = smarties[i]
    sum = 0;
    for (let j =0; j<smartiesBox.length; j ++){
        sum += smartiesBox[j];
<<<<<<< HEAD

    }
    console.log(sum);
}
console.log("\n\n\n\n\n")

=======
        
    }
    console.log(sum);
}

console.log("\n\n\n\n\n")


>>>>>>> 65483eb3a84f61cf648df721d0d25e3ae9257490
// Quel est le nombre minimum de Smarties® dans une boîte ?
let minSoFar= 500;
for (let i=0; i<smarties.length; i++){
    let smartiesBox = smarties[i];
    sum = 0;
    for (let j=0; j<smartiesBox.length; j++) {
        sum += smartiesBox[j];
    } 
    if(sum<minSoFar){
        minSoFar = sum;
    }
}
<<<<<<< HEAD
=======
console.log(minSoFar);


>>>>>>> 65483eb3a84f61cf648df721d0d25e3ae9257490
// Et le nombre maximum ?
let maxSoFar=0;
for (let i=0; i<smarties.length; i++){
    let smartiesBox = smarties[i];
    sum = 0;
    for (let j=0; j<smartiesBox.length; j++) {
        sum += smartiesBox[j];
    } 
    if(sum>maxSoFar){
        maxSoFar = sum;
    }
}
<<<<<<< HEAD

=======
>>>>>>> 65483eb3a84f61cf648df721d0d25e3ae9257490
console.log(maxSoFar);
// Combien y a-t-il de Smarties® bleus en tout ?
sum = 0;
for (let i = 0; i < smarties.length; i++){
    smartiesBox = smarties[i];
    smartiesBlue = smartiesBox[5];
    sum += smartiesBlue;
}

<<<<<<< HEAD
console.log(sum);
=======
console.log(sum);   
>>>>>>> 65483eb3a84f61cf648df721d0d25e3ae9257490
// Pour chaque couleur, compter le nombre de Smarties® de cette couleur.
// Quelle est la couleur la plus présente, en tout ?
// Quel est le nombre maximum de Smarties® d'une seule couleur, dans une boîte ?
// Dans combien de boîtes y' a-t-il 3 Smarties® bleues ?
// Dans combien de boîte une couleur est absente ?
// Dans combien de boîte les Smarties® oranges sont-ils les plus nombreux ?