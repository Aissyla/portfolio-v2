// Sélectionne les éléments du carrousel, les items, les boutons et la modal
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
let currentIndex = 0;

const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const modal = document.getElementById('modal');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.querySelector('.close');
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const aboutSection = document.getElementById('about');

// Gestion du défilement du carrousel
// Lorsque l'on clique sur le bouton "Suivant", on incrémente l'index pour afficher l'image suivante.
// Si on dépasse le nombre total d'images, on revient à la première image.
nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= totalItems) {
    currentIndex = 0;
  }
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Lorsqu'on clique sur le bouton "Précédent", on décrémente l'index pour afficher l'image précédente.
// Si on est à la première image et qu'on clique, on revient à la dernière image.
prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  }
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
});

// Fonction pour afficher la modal avec la description récupérée de l'élément cliqué
function showModal(description) {
    modal.style.display = "block";
    modalDescription.innerHTML = description;
}

// Fonction pour fermer la modal
function closeModalFunction() {
    modal.style.display = "none";
}

// Ajout d'un événement "clic" sur chaque élément du carrousel
// Lorsqu'un élément est cliqué, on empêche son comportement par défaut et on affiche la modal avec sa description
items.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const description = item.getAttribute('data-description');
        showModal(description);
    });
});

// Fermeture de la modal quand on clique sur la croix
closeModal.addEventListener('click', closeModalFunction);

// Fermeture de la modal quand on clique à l'extérieur de celle-ci
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModalFunction();
    }
});

// Sélectionne tous les liens du menu
const menuLinks = document.querySelectorAll('#menu li a');

// Ajout d'un événement "clic" sur chaque élément du menu
menuLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Ajoute la classe active au lien cliqué
        menuLinks.forEach(l => l.parentElement.classList.remove('active'));
        this.parentElement.classList.add('active');

        // Ferme le menu après un délai
        setTimeout(() => {
            menu.classList.remove('show');
            aboutSection.classList.remove('menu-open');
            const barsIcon = menuToggle.querySelector('.fa-bars');
            const timesIcon = menuToggle.querySelector('.fa-times');
            barsIcon.style.display = 'inline';
            timesIcon.style.display = 'none';
        }, 300); // Délai de 300 ms
    });
});

// Basculer l'affichage du menu burger et modifier la disposition de la section about
menuToggle.addEventListener('click', function () {
  menu.classList.toggle('show'); 
  aboutSection.classList.toggle('menu-open'); 

  // Afficher ou cacher la croix
  const barsIcon = this.querySelector('.fa-bars');
  const timesIcon = this.querySelector('.fa-times');
  barsIcon.style.display = barsIcon.style.display === 'none' ? 'inline' : 'none';
  timesIcon.style.display = timesIcon.style.display === 'none' ? 'inline' : 'none';
});
