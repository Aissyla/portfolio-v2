// Sélectionne l'élément contenant toutes les images du carrousel
const carousel = document.querySelector('.carousel');

// Sélectionne toutes les images individuelles dans le carrousel
const items = document.querySelectorAll('.carousel-item');

// Calcule le nombre total d'images dans le carrousel
const totalItems = items.length;

// Variable qui garde une trace de l'image actuellement affichée
let currentIndex = 0;

// Ajoute un écouteur d'événement au bouton "Suivant"
document.querySelector('.next').addEventListener('click', () => {
  // Incrémente l'index pour passer à l'image suivante
  currentIndex++;
  
  // Si l'index dépasse la dernière image, on revient à la première image
  if (currentIndex >= totalItems) {
    currentIndex = 0;  // On boucle au début
  }
  
  // Déplace le carrousel pour afficher l'image correspondante
  // On utilise la propriété CSS 'transform' pour décaler horizontalement les images
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Ajoute un écouteur d'événement au bouton "Précédent"
document.querySelector('.prev').addEventListener('click', () => {
  // Décrémente l'index pour revenir à l'image précédente
  currentIndex--;
  
  // Si l'index devient inférieur à 0, on revient à la dernière image
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;  // On boucle à la fin
  }
  
  // Déplace le carrousel pour afficher l'image correspondante
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

