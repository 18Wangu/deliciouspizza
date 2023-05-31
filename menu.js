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
    afficherElements([menuPricingH1Element, dividerCubeElement, menuPricingH3Element, menuPricingArticleElement], 50);
  });
  

/************************************* menu clic + footer *************************************/
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
var menuClicButtons = document.querySelectorAll('#menu_clic .chooseMenu');
var drinks_Article = document.querySelectorAll('#drinks div');
var footerTitles = document.querySelectorAll('footer article h1');
var memeLignes = document.querySelectorAll('.memeLigne');

// Ajout de la classe CSS pour cacher les éléments au départ
menuClicButtons.forEach(function(element) {
  element.classList.add('invisible');
});
drinks_Article.forEach(function(element) {
  element.classList.add('invisible');
});
footerTitles.forEach(function(element) {
  element.classList.add('invisible');
});
memeLignes.forEach(function(element) {
  element.classList.add('invisible');
});

// Appel de la fonction pour afficher les éléments au défilement de la page
window.addEventListener('scroll', function() {
  afficherElements(menuClicButtons);
  afficherElements(drinks_Article);
  afficherElements(footerTitles);
  afficherElements(memeLignes);
});


