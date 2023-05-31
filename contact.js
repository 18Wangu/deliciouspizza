// Récupération de tous les liens dans la barre de navigation
var navLinks = document.querySelectorAll('.navbar ul li a');

// Gestionnaire d'événement pour les liens
function handleClick(event) {
    // Suppression de la classe "active" de tous les liens
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('active');
    }

    // Ajout de la classe "active" au lien cliqué
    event.target.classList.add('active');

    // Stockage de l'état actif dans le stockage local
    localStorage.setItem('activeLink', event.target.href);
}

// Ajout du gestionnaire d'événement aux liens
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', handleClick);

    // Vérification de l'état actif lors du chargement de la page
    var activeLink = localStorage.getItem('activeLink');
    if (activeLink && navLinks[i].href === activeLink) {
        navLinks[i].classList.add('active');
    }
}

/*********************************** animation au chargement de la page ***********************************/


