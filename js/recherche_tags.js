"use strict";

export default class RechercheTag {

    rechercheTags() {
        let tag = document.querySelectorAll(".filtre_tag_li");
        let barreRecherche = document.querySelectorAll(".input_tag");
        barreRecherche.forEach(barre => {
            barre.addEventListener("input", () => {
                if (barre.value.length > 2) {
                    const filtreTexte = (arr, requete) => {
                        return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
                    };
                    //recherche de concordance entre les classes des recettes et l'input de la barre de recherche
                    tag.forEach(element => {
                        let elementclasses = element.classList.value;
                        let classes = elementclasses.split(" ");
                        let resultRecherche = filtreTexte(classes, barre.value.replace(/['\s%\s(\s)]/g, ""));
                        if (resultRecherche.length > 0) {
                            element.style.display = "block";
                        } else {
                            element.style.display = "none";
                        }
                    });
                } else {
                    tag.forEach( element => {
                        element.style.display = "block";
                    });
                }
            });
        });  
    }
}