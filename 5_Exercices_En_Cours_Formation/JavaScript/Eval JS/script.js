/*C'est là que vous allez mettre votre code JS*/
// Étape 1: Créez une nouvelle div
let info = document.createElement("div");

// Étape 2: Ajoute un texte ou tout autre contenu à la div si nécessaire
info.textContent = "";

// Étape 3: Ajoute des propriétés CSS à la div
info.style.height = "300px";
info.style.width = "200px";
info.style.marginTop = "16px";
info.style.marginBottom = "16px";
info.style.border = "3px solid gray";
info.style.paddingTop = "16px";
info.style.paddingRight = "12px";
info.style.paddingBottom = "24px";
info.style.paddingLeft = "12px";

// Je n'arrive pas a l'ajouter avant le boutton et après l'image
let cardMeteo = document.querySelector('.cardMeteo');
const child = document.querySelector('button')
// document.getElementById('carte').insertBefore(info, cardMeteo.querySelector('#button'))

cardMeteo.insertBefore(info, child);


// Fonction pour ajouter du texte à la div nouvellement créée
function addInfo(texte) {
    info.textContent = texte;
}


addInfo("Nouveau texte");

cardMeteo.insertBefore(info, cardMeteo.querySelector('button'));


// Fonction pour ajouter la classe "button__cardMeteo" à un bouton HTML
function bouton() {
    // Sélectionne le bouton HTML
    let bouton = document.querySelector('button');

    // Ajoute la classe "button__cardMeteo" au bouton
    bouton.classList.add('button__cardMeteo');
}

// Appele la fonction pour ajouter la classe au bouton
bouton();



// Sélectionne le bouton HTML
let boutton = document.querySelector('button');

// Ajoute un écouteur d'événements pour l'événement "mousedown"
boutton.addEventListener('mousedown', function() {
    // Change la couleur de fond du bouton en orange
    boutton.style.backgroundColor = 'orange';
});

// Ajoute un écouteur d'événements pour l'événement "mouseup"
boutton.addEventListener('mouseup', function() {
    boutton.style.backgroundColor = ''; 
});

// Q12 pas finis......

// Fonction pour ajouter les informations météo dans la div
// function addInfo(condition, temperature, tempMax, tempMin) {
//     let weatherInfoDiv = document.getElementById('weather-info');
//     weatherInfoDiv = `Condition: ${condition}Température actuelle: ${temperature}°C
//     Température max: ${tempMax}°C
//     Température min: ${tempMin}°C`;
// }

// // Fonction appelée au moment où les informations météo sont affichées
// function bouton() {
    // Ajoutez ici les actions spécifiques à votre application après l'affichage des informations météo
// }

// // Ajoute un gestionnaire d'événements au bouton "charger"
// document.getElementById('charger').addEventListener('click', function () {
//     // Interroger l'API météo
//     fetch('https://prevision-meteo.ch/services/json/toulouse')
//         .then(response => response.json())
//         .then(data => {
//             // Récupérer les informations météo de la réponse JSON
//             const condition = data.current_condition.condition;
//             const temperature = data.current_condition.tmp;
//             const tempMax = data.fcst_day_0.tmax;
//             const tempMin = data.fcst_day_0.tmin;

//             // Appeler la fonction addInfo pour afficher les informations dans la div
//             addInfo(condition, temperature, tempMax, tempMin);

//             // Appeler la fonction bouton au moment où les informations météo sont affichées
//             bouton();
//         })
//         .catch(error => {
//             console.error('Erreur lors de la récupération des données météo', error);
//         });
// });

child.addEventListener("click", event => {
    fetch('https://prevision-meteo.ch/services/json/toulouse')
    .then(response => data.json())
    
    let string = `
    La condition actuelle : ${data.current_condition.condition}
    
    La temperature actuelle : ${data.current_contiditon.tmp}
    
    la température maximum : ${data.fsct_day_0.tmax}
    
    La température minimum : ${data.fsct_day_0.tmin}`;

    addInfo(string);

     
})
    .catch(error => {
                console.error('Erreur lors de la récupération des données météo', error);
            });


