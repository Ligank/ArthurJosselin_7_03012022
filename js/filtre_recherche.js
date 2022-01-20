"use strict";
import FiltreRechercheTags from "./filtre_recherche_tags.js";
export default class FiltreRecherche {
    
    filtreRecherche() {
        let recette = document.querySelectorAll(".recette");
        let barreRecherche = document.querySelector(".recherche_barre");
            if (barreRecherche.value.length > 2) {
                const filtreTexte = (arr, requete) => {
                    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
                  }
                  //recherche de concordance entre les classes des recettes et l'input de la barre de recherche
                  recette.forEach(element => {
                      let elementclasses = element.classList.value;
                      let classes = elementclasses.split(" ")
                        let resultRecherche = filtreTexte(classes, barreRecherche.value.replace(/['\s\%\s\(\s\)]/g, ""));
                        if (resultRecherche.length > 0) {
                            element.style.display = "block";
                            element.classList.add("actifrecherche");
                            document.querySelector(".aucune_recette").style.display ="none";
                            new FiltreRechercheTags().cacherTag();
                        } else {
                            element.style.display = "none";
                            element.classList.remove("actifrecherche");
                            new FiltreRechercheTags().cacherTag();
                        }
                        if (document.querySelectorAll(".actifrecherche").length == 0) {
                            document.querySelector(".aucune_recette").style.display ="block";
                        }
                })
            } else {
                recette.forEach( element => {
                    element.style.display = "block";
                    element.classList.add("actifrecherche");
                })
                document.querySelector(".aucune_recette").style.display ="none";
                new FiltreRechercheTags().cacherTag();
            }
    }
}