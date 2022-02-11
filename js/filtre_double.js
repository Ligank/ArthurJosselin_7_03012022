"use strict";
import FiltreRechercheTags from "./filtre_recherche_tags.js";
import FiltreTag from "./filtre_tags.js";
export default class FiltreDouble {
    filtreDouble() {
        let recette = document.querySelectorAll(".actifrecherche2");
        let barreRecherche = document.querySelector(".recherche_barre");
        if (barreRecherche.value.length > 2) {
            const filtreTexte = (arr, requete) => {
                return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
            };
                //recherche de concordance entre les classes des recettes et l'input de la barre de recherche
            recette.forEach(element => {
                let elementclasses = element.classList.value;
                let classes = elementclasses.split(" ");
                let resultRecherche = filtreTexte(classes, barreRecherche.value.replace(/['\s%\s(\s)]/g, "").replace(/é/g, "e").replace(/è/g, "e").replace(/â/g, "a"));
                if (resultRecherche.length > 0) {
                    element.style.display = "block";
                    element.classList.add("actifrecherche");
                    element.classList.add("tagActif");
                    document.querySelector(".aucune_recette").style.display ="none";
                    new FiltreRechercheTags().cacherTag2();
                } else {
                    element.style.display = "none";
                    element.classList.remove("actifrecherche");
                    element.classList.remove("tagActif");
                    new FiltreRechercheTags().cacherTag2();
                }
                if (document.querySelectorAll(".tagActif").length == 0) {
                    document.querySelector(".aucune_recette").style.display ="block";
                }
            });
        } else {
            recette.forEach( element => {
                element.style.display = "block";
                element.classList.add("actifrecherche");
                element.classList.add("tagActif");
            });
            let recetteAll = document.querySelectorAll(".recette");
            recetteAll.forEach( element => {
                element.classList.add("actifrecherche");
            });
            new FiltreTag().filtreTag();
            document.querySelector(".aucune_recette").style.display ="none";
            new FiltreRechercheTags().cacherTag2();
        }
    }
}