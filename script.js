let affichage = document.getElementById("ecran");

function afficher(valeur) {
    affichage.value += valeur;
}

function effacer(){
    affichage.value = " ";
}

function pourcentage(){
    affichage.value = affichage.value / 100;
}
