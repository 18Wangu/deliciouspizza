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


/****************** Afficher au clic Pizza / Drink / Burger / Pates ******************/
// Sélection des éléments du DOM
const pizzasButton = document.querySelector('button.chooseMenu:nth-child(1)');
const drinksButton = document.querySelector('button.chooseMenu:nth-child(2)');
const burgerButton = document.querySelector('button.chooseMenu:nth-child(3)');
const pastaButton = document.querySelector('button.chooseMenu:nth-child(4)');
const pizzasArticle = document.getElementById('pizzas');
const drinksArticle = document.getElementById('drinks');
const burgerArticle = document.getElementById('burger');
const pastaArticle = document.getElementById('pasta');

// Fonction pour afficher l'article "Pizza"
function showPizzasArticle() {
  pizzasArticle.style.display = 'flex';
  drinksArticle.style.display = 'none';
  pastaArticle.style.display = 'none';
  burgerArticle.style.display = 'none';

  // Ajouter la classe active au bouton "Pizza"
  pizzasButton.classList.add('active');

  // Supprimer la classe active des autres boutons
  burgerButton.classList.remove('active');
  drinksButton.classList.remove('active');
  pastaButton.classList.remove('active');
}

// Fonction pour afficher l'article "Drink"
function showDrinksArticle() {
  pizzasArticle.style.display = 'none';
  drinksArticle.style.display = 'flex';
  pastaArticle.style.display = 'none';
  burgerArticle.style.display = 'none';

  // Ajouter la classe active au bouton "Drink"
  drinksButton.classList.add('active');

  // Supprimer la classe active des autres boutons
  pizzasButton.classList.remove('active');
  burgerButton.classList.remove('active');
  pastaButton.classList.remove('active');
}

// Fonction pour afficher l'article "Burger"
function showBurgerArticle() {
  pizzasArticle.style.display = 'none';
  drinksArticle.style.display = 'none';
  pastaArticle.style.display = 'none';
  burgerArticle.style.display = 'flex'; 

  // Ajouter la classe active au bouton "Burger"
  burgerButton.classList.add('active');

  // Supprimer la classe active des boutons
  pizzasButton.classList.remove('active');
  drinksButton.classList.remove('active');
  pastaButton.classList.remove('active');
}

// Fonction pour afficher l'article "Pasta"
function showPastaArticle() {
  pizzasArticle.style.display = 'none';
  drinksArticle.style.display = 'none';
  pastaArticle.style.display = 'flex';
  burgerArticle.style.display = 'none';

  // Ajouter la classe active au bouton "Pasta"
  pastaButton.classList.add('active');

  // Supprimer la classe active des boutons
  pizzasButton.classList.remove('active');
  drinksButton.classList.remove('active');
  burgerButton.classList.remove('active');
}
// Par défaut, afficher l'article "Drink" et ajouter la classe active au bouton "Drink"
showDrinksArticle();

// Écouteurs d'événements pour les boutons de choix de menu
pizzasButton.addEventListener('click', showPizzasArticle);
drinksButton.addEventListener('click', showDrinksArticle);
burgerButton.addEventListener('click', showBurgerArticle);
pastaButton.addEventListener('click', showPastaArticle);




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






/************************************* Bandeau contact *************************************/
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
var elements = document.getElementsByClassName('contactDetail');

// Ajout de la classe CSS pour cacher les éléments au départ
for (var i = 0; i < elements.length; i++) {
  elements[i].classList.add('invisible');
}

// Appel de la fonction pour afficher les éléments au défilement de la page
window.addEventListener('scroll', function() {
  afficherElements(elements);
});



/************************************* History et our services *************************************/
// Fonction pour vérifier si un élément est visible à l'écran
function estVisible(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom <= windowHeight;
}

// Fonction pour afficher les éléments progressivement avec décalage vertical
function afficherElements(elements, decalageY) {
  var i = 0;
  var interval = setInterval(function() {
    if (i >= elements.length) {
      clearInterval(interval);
      return;
    }
    if (estVisible(elements[i])) {
      elements[i].classList.add('visible');
      elements[i].style.transform = 'translateY(0)';
      i++;
    }
  }, 200);
}

// Récupération des éléments à afficher progressivement dans la section "history"
var h1ElementHistory = document.querySelector('#history h1');
var pElementHistory = document.querySelector('#history p');

// Récupération des éléments à afficher progressivement dans la section "ourServices"
var h1ElementOurServices = document.querySelector('#ourServices h1');
var pElementOurServices = document.querySelector('#ourServices p');
var articleElementOurServices = document.querySelector('#ourServices article');

// Ajout de la classe CSS pour cacher les éléments au départ et les décaler verticalement
h1ElementHistory.classList.add('invisible');
pElementHistory.classList.add('invisible');
h1ElementHistory.style.transform = 'translateY(50px)';
pElementHistory.style.transform = 'translateY(50px)';

h1ElementOurServices.classList.add('invisible');
pElementOurServices.classList.add('invisible');
articleElementOurServices.classList.add('invisible');
h1ElementOurServices.style.transform = 'translateY(50px)';
pElementOurServices.style.transform = 'translateY(50px)';
articleElementOurServices.style.transform = 'translateY(50px)';

// Appel de la fonction pour afficher les éléments de la section "history" au défilement de la page
window.addEventListener('scroll', function() {
  afficherElements([h1ElementHistory, pElementHistory], 50);
});

// Appel de la fonction pour afficher les éléments de la section "ourServices" au défilement de la page
window.addEventListener('scroll', function() {
  afficherElements([h1ElementOurServices, pElementOurServices, articleElementOurServices], 50);
});




/************************************* meals et menu pricing *************************************/
// Fonction pour vérifier si un élément est visible à l'écran
function estVisible(element) {
  var rect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  return rect.bottom <= windowHeight;
}

// Fonction pour afficher les éléments progressivement avec décalage vertical
function afficherElements(elements, decalageY) {
  var i = 0;
  var interval = setInterval(function() {
    if (i >= elements.length) {
      clearInterval(interval);
      return;
    }
    if (estVisible(elements[i])) {
      elements[i].classList.add('visible');
      elements[i].style.transform = 'translateY(0)';
      i++;
    }
  }, 200);
}

// Récupération des éléments de la section "Meals" à afficher progressivement
var mealsH1Element = document.querySelector('#meals h1');
var mealsH3Element = document.querySelector('#meals h3');
var mealsArticleElement = document.querySelector('#meals article');

// Ajout de la classe CSS pour cacher les éléments au départ et les décaler verticalement
mealsH1Element.classList.add('invisible');
mealsH3Element.classList.add('invisible');
mealsArticleElement.classList.add('invisible');

mealsH1Element.style.transform = 'translateY(50px)';
mealsH3Element.style.transform = 'translateY(50px)';
mealsArticleElement.style.transform = 'translateY(50px)';

// Récupération des éléments de la section "Menu pricing" à afficher progressivement
var menuPricingH1Element = document.querySelector('#menuPricing h1');
var dividerCubeElement = document.querySelector('#menuPricing .dividerCube');
var menuPricingH3Element = document.querySelector('#menuPricing h3');
var menuPricingArticleElement = document.querySelector('#menuPricing article');

// Ajout de la classe CSS pour cacher les éléments au départ et les décaler verticalement
menuPricingH1Element.classList.add('invisible');
dividerCubeElement.classList.add('invisible');
menuPricingH3Element.classList.add('invisible');
menuPricingArticleElement.classList.add('invisible');

menuPricingH1Element.style.transform = 'translateY(50px)';
dividerCubeElement.style.transform = 'translateY(50px)';
menuPricingH3Element.style.transform = 'translateY(50px)';
menuPricingArticleElement.style.transform = 'translateY(50px)';

// Appel de la fonction pour afficher les éléments au défilement de la page
window.addEventListener('scroll', function() {
  afficherElements([mealsH1Element, mealsH3Element, mealsArticleElement, menuPricingH1Element, dividerCubeElement, menuPricingH3Element, menuPricingArticleElement], 50);
});



/************************************* menu_clic *************************************/






/************************************* contact *************************************/




