"use strict";
import FiltreRechercheTags from "./filtre_recherche_tags.js";
export default class FiltreRecherche {
    filtreTitre() {
        let recette = document.querySelectorAll(".recette");
        let barreRecherche = document.querySelector(".recherche_barre");
        barreRecherche.addEventListener('input', function() {
            if (barreRecherche.value.length > 2) {
                for(let i = 0; i < recette.length; i++) {
                    let elementclasses = recette[i].classList.value;
                    let classes = elementclasses.toLowerCase().split(" ");
                    let input = barreRecherche.value.toLowerCase().replace(/['\s\%\s\(\s\)]/g, "");
                    let arrayActive = [];

                    for (let j = 0; j < classes.length; j++) {
                        if (classes[j].indexOf(input) !== -1) {
                            arrayActive.push(classes[j]);
                        }
                        if (arrayActive.length > 0) {
                            recette[i].style.display = "block";
                            recette[i].classList.add("actifrecherche");
                            new FiltreRechercheTags().cacherTag();
                        } else {
                            recette[i].style.display = "none"; 
                            recette[i].classList.remove("actifrecherche");
                            new FiltreRechercheTags().cacherTag();
                        }
                        if (document.querySelectorAll(".actifrecherche").length == 0) {
                            document.querySelector(".aucune_recette").style.display ="block";
                        }
                    }
                }
            } else {
                for(let i = 0; i < recette.length; i++) {
                    recette[i].style.display = "block";
                    recette[i].classList.add("actifrecherche");
                }
                document.querySelector(".aucune_recette").style.display ="none";
                new FiltreRechercheTags().cacherTag();
            }
        });
    }
}