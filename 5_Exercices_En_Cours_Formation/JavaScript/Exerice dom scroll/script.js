

// Écoute l'événement de défilement de la page
window.addEventListener('scroll', function(event) {
    // Console log de l'événement de défilement
    console.log('Événement de défilement :', event);

    // Calcule scrollMax (la hauteur maximale que l'on peut faire défiler)
    let scrollMax = document.body.scrollHeight - window.innerHeight;

    // Calcule le pourcentage de défilement (onEstOu)
    let onEstOu = (window.scrollY / scrollMax) * 100;

    // Met à jour la largeur de la div avec la classe "bar" en fonction du pourcentage de défilement
    let barDiv = document.querySelector('.bar');
    barDiv = onEstOu + '%';

    // Console log des variables
    console.log('scrollMax :', scrollMax);
    console.log('onEstOu :', onEstOu);

    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;
    var bodyHeight = document.body.scrollHeight;

    // Calculez le pourcentage de défilement
    var scrollPercentage = (scrollPosition / (bodyHeight - windowHeight)) * 100;

    // Mettez à jour la largeur de la barre de progression
    var progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = scrollPercentage + '%';
});

console.log(`
    Hauteur page : ${document.body.scrollHeight}
    Hauteur affichage : ${innerHeight}
    Scroll Position : ${scrollY}`
);

