"use strict";
import FiltreRechercheTags from "./filtre_recherche_tags.js";
import FiltreTag from "./filtre_tags.js";

export default class Tag {
    ajoutTag() {
        const tag_selectionne = document.querySelector(".tag_selectionne");

        document.querySelectorAll(".filtre_tag_li").forEach(item => {
            item.addEventListener("click", function() {
                item.style.display = "none";
                

                //verification du type d'objet et creation du tag avec la bonne couleur
                if (item.classList.contains("ingredient")) {
                    let tag_ingredient = document.createElement("div");
                    item.classList.add(item.innerHTML.replace(/\s/g, "").replace(/['\s%\s(\s)]/g, ""));
                    tag_ingredient.classList.add("tag_ingredient", "tag");
                    let ingredientNom = document.createElement("p");
                    ingredientNom.innerHTML = item.innerHTML + " " + "<i class=\"far fa-times-circle close\" aria-hidden=\"true\"></i>";
                    tag_ingredient.appendChild(ingredientNom);
                    tag_selectionne.appendChild(tag_ingredient);
                } 
                else if (item.classList.contains("appareil")) {
                    let tag_appareil = document.createElement("div");
                    item.classList.add(item.innerHTML.replace(/\s/g, "").replace(/['\s%\s(\s)]/g, ""));
                    tag_appareil.classList.add("tag_appareil", "tag");
                    let appareilNom = document.createElement("p");
                    appareilNom.innerHTML = item.innerHTML + " " + "<i class=\"far fa-times-circle close\" aria-hidden=\"true\"></i>";
                    tag_appareil.appendChild(appareilNom);
                    tag_selectionne.appendChild(tag_appareil);
                } 
                else if (item.classList.contains("ustensile")) {
                    let tag_ustensile = document.createElement("div");
                    item.classList.add(item.innerHTML.replace(/\s/g, "").replace(/['\s%\s(\s)]/g, ""));
                    tag_ustensile.classList.add("tag_ustensiles", "tag");
                    let ustensileNom = document.createElement("p");
                    ustensileNom.innerHTML = item.innerHTML + " " + "<i class=\"far fa-times-circle close\" aria-hidden=\"true\"></i>";
                    tag_ustensile.appendChild(ustensileNom);
                    tag_selectionne.appendChild(tag_ustensile);
                }

                new FiltreTag().filtreTag();

                //Retrait du tag et réapparition dans la liste
                document.querySelectorAll(".close").forEach(item => {
                    item.addEventListener("click", function() {
                        let get_tag_class = item.parentElement.innerHTML.replace(/\s/g, "").replace("<iclass=\"farfa-times-circleclose\"aria-hidden=\"true\"></i>","").replace(/['\s%\s(\s)]/g, "");
                        let tag_inactif = document.querySelector("." + get_tag_class);
                        tag_inactif.style.display = "block";
                        tag_inactif.classList.remove("actif");
                        new FiltreTag().filtreTag();
                        item.parentElement.parentElement.parentElement.removeChild(item.parentElement.parentElement);
                        new FiltreRechercheTags().cacherTag();
                    });
                });
            });
        });
    }
}