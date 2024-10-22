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

// Récupérer les éléments nécessaires
const carouselItems = document.querySelectorAll('.carousel-item');
const modal = document.getElementById('modal');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');

// Fonction pour afficher la modal
function showModal(description) {
    modal.style.display = "block"; // Afficher la modal
    modalDescription.innerHTML = description; // Mettre à jour le texte de la modal
}

// Fonction pour fermer la modal
function closeModalFunction() {
    modal.style.display = "none"; // Cacher la modal
}

// Boucle à travers chaque élément du carousel
carouselItems.forEach(item => {
    // Ajouter un événement clic sur chaque élément
    item.addEventListener('click', function(e) {
        e.preventDefault(); // Empêcher le comportement par défaut de l'élément <a>
        const description = item.getAttribute('data-description'); // Récupérer la description
        showModal(description); // Afficher la modal avec la description
    });
});

// Événement pour fermer la modal quand on clique sur la croix
closeModal.addEventListener('click', closeModalFunction);

// Événement pour fermer la modal quand on clique à l'extérieur de la modal
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModalFunction();
    }
});

document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('menu');
  const aboutSection = document.getElementById('about');
  menu.classList.toggle('show'); // Basculer la classe pour afficher/cacher le menu
  aboutSection.classList.toggle('menu-open'); // Ajouter ou retirer le padding-top
});
