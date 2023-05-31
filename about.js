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



/********************************** history + bandeau **********************************/
// Fonction pour animer un élément avec un délai spécifié
function animateElement(element, delay) {
    setTimeout(function() {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }, delay);
  }
  
  // Sélection des éléments à animer
  const h1Element = document.querySelector('#history h1');
  const pElement = document.querySelector('#history p');
  const contactDetails = document.querySelectorAll('.contactDetail');
  const socialLinks = document.querySelectorAll('.reseauSociaux a');
  
  // Application de l'animation aux éléments avec des délais différents
  animateElement(h1Element, 500);
  animateElement(pElement, 1000);
  
  contactDetails.forEach(function(contact, index) {
    const delay = 1500 + (index * 300);
    animateElement(contact, delay);
  });
  
  socialLinks.forEach(function(link, index) {
    const delay = 2500 + (index * 300);
    animateElement(link, delay);
  });  
  


/********************************** our chef au scroll **********************************/
// Fonction pour vérifier si un élément est visible à l'écran
function estVisible(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.bottom <= windowHeight;
  }
  
  // Fonction pour afficher les éléments progressivement
  function afficherElements(elements) {
    var i = 0;
    var interval = setInterval(function() {
      if (i >= elements.length) {
        clearInterval(interval);
        return;
      }
      if (estVisible(elements[i])) {
        elements[i].classList.add('visible');
        i++;
      }
    }, 200);
  }
  
  // Récupération des éléments à afficher progressivement
  var chefTitle = document.querySelector('#ourChef h1');
  var dividerCube = document.querySelector('.dividerCube');
  var chefDescription = document.querySelector('#ourChef h3');
  var chefArticles = document.querySelectorAll('#ourChef .chef');
  
  // Ajout de la classe CSS pour cacher les éléments au départ
  chefTitle.classList.add('invisible');
  dividerCube.classList.add('invisible');
  chefDescription.classList.add('invisible');
  chefArticles.forEach(function(element) {
    element.classList.add('invisible');
  });
  
  // Appel de la fonction pour afficher les éléments au défilement de la page
  window.addEventListener('scroll', function() {
    afficherElements([chefTitle, dividerCube, chefDescription]);
    afficherElements(chefArticles);
  });
  


/****************** Incrementation chiffe ******************/
// Fonction pour vérifier si un élément est visible à l'écran
function estVisible(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom <= windowHeight;
}

// Fonction pour afficher un élément progressivement
function afficherElementProgressivement(element, targetScore, duration) {
  var score = 0;
  var interval = duration / targetScore;

  var increment = setInterval(function() {
    score++;
    element.textContent = score;

    if (score >= targetScore) {
      clearInterval(increment);
    }
  }, interval);
}

// Récupération des éléments des chiffres
var scoreElement1 = document.querySelector('.premierChiffre');
var scoreElement2 = document.querySelector('.deuxiemeChiffre');
var scoreElement3 = document.querySelector('.troisiemeChiffre');
var scoreElement4 = document.querySelector('.quatriemeChiffre');

// Ajout de la classe CSS pour cacher les éléments au départ
scoreElement1.classList.add('invisible');
scoreElement2.classList.add('invisible');
scoreElement3.classList.add('invisible');
scoreElement4.classList.add('invisible');

// Variable pour indiquer si les animations ont déjà été jouées
var animationJouee1 = false;
var animationJouee2 = false;
var animationJouee3 = false;
var animationJouee4 = false;

// Fonction pour gérer l'animation des éléments une seule fois
function jouerAnimationUneSeuleFois() {
  if (!animationJouee1 && estVisible(scoreElement1)) {
    scoreElement1.classList.add('visible');
    afficherElementProgressivement(scoreElement1, 100, 1500);
    animationJouee1 = true;
  }
  
  if (!animationJouee2 && estVisible(scoreElement2)) {
    scoreElement2.classList.add('visible');
    afficherElementProgressivement(scoreElement2, 35, 1500);
    animationJouee2 = true;
  }
  
  if (!animationJouee3 && estVisible(scoreElement3)) {
    scoreElement3.classList.add('visible');
    afficherElementProgressivement(scoreElement3, 458, 1500);
    animationJouee3 = true;
  }
  
  if (!animationJouee4 && estVisible(scoreElement4)) {
    scoreElement4.classList.add('visible');
    afficherElementProgressivement(scoreElement4, 53, 1500);
    animationJouee4 = true;
  }
}

// Appel de la fonction pour afficher les éléments au défilement de la page
window.addEventListener('scroll', jouerAnimationUneSeuleFois);
