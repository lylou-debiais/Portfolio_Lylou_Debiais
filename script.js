function showPage(pageId) {
    // Cacher toutes les pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Afficher la page demandée
    document.getElementById(pageId).classList.add('active');
    
    // Mettre à jour les liens actifs
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => link.classList.remove('active'));
    
    // Fermer le menu mobile si ouvert
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('mobile-open');
    
    // Scroll en haut
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('mobile-open');
}

function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Message envoyé ! (fonctionnalité de démonstration)');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Veuillez remplir tous les champs');
    }
}

function downloadCV() {
    // Créer un lien de téléchargement
    const link = document.createElement('a');
    link.href = 'assets/CV-LylouDebiais.pdf'; // Chemin du fichier CV
    link.download = 'CV-LylouDebiais.pdf'; // Nom du fichier téléchargé
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
// --- Effet étoiles qui suivent la souris sur la page d'accueil ---
document.addEventListener("mousemove", function(e) {
    const star = document.createElement("span");
    star.classList.add("trail-star");
    star.textContent = "✦";

    // Position de l'étoile
    star.style.left = e.pageX + "px";
    star.style.top = e.pageY + "px";

    document.body.appendChild(star);

    // Suppression après l’animation
    setTimeout(() => {
        star.remove();
    }, 800);
});

// Fonction pour gérer les clics sur les cartes de projet
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', function() {
            // Mapping des index aux IDs des pages SAÉ
            const saePages = [
                'sae-3crea01', 'sae-302', 'sae-3crea03',
                'sae-4crea01', 'sae-4crea02'
            ];
            
            if (saePages[index]) {
                showPage(saePages[index]);
            }
        });
    });
});