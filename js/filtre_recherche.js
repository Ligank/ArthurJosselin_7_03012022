"use strict";
import FiltreRechercheTags from "./filtre_recherche_tags.js";
import FiltreDouble from "./filtre_double.js";

let barreRecherche = document.querySelector(".recherche_barre");
export default class FiltreRecherche {
    
    filtreRecherche() {
        if (document.querySelector(".tag_selectionne").childElementCount === 0 && barreRecherche.value.length === 0) {
            let reset = document.querySelectorAll(".actifrecherche2");
            reset.forEach(element => {
                element.classList.remove("actifrecherche2");
            });
            let reset2 = document.querySelectorAll(".tagActif");
            reset2.forEach(element => {
                element.classList.remove("tagActif");
            });
            let recette = document.querySelectorAll(".recette");
            recette.forEach(element => {
                element.classList.add("actifrecherche");
            });
        }
        else if (document.querySelector(".tag_selectionne").childElementCount === 0) {
            let recette = document.querySelectorAll(".recette");
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
                        element.classList.add("actifrecherche2");
                        document.querySelector(".aucune_recette").style.display ="none";
                        new FiltreRechercheTags().cacherTag();
                    } else {
                        element.style.display = "none";
                        element.classList.remove("actifrecherche");
                        element.classList.remove("actifrecherche2");
                        new FiltreRechercheTags().cacherTag();
                    }
                    if (document.querySelectorAll(".actifrecherche").length == 0) {
                        document.querySelector(".aucune_recette").style.display ="block";
                    }
                });
            } else {
                if (document.querySelector(".tag_selectionne").childElementCount === 0) {
                    recette.forEach( element => {
                        element.style.display = "block";
                        element.classList.add("actifrecherche");
                        element.classList.add("actifrecherche2");
                    });
                }
                
                document.querySelector(".aucune_recette").style.display ="none";
                new FiltreRechercheTags().cacherTag();
            }
        } else {
            new FiltreDouble().filtreDouble();
        }
        
    }
}