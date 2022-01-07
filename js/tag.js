"use strict";

export default class Tag {
    ajoutTag(element) {
        const tag_selectionne = document.querySelector(".tag_selectionne");

        document.querySelectorAll(".filtre_tag_li").forEach(item => {
            item.addEventListener("click", function() {
                item.style.display = "none";
                if (item.classList.contains("ingredient")) {
                    let tag_ingredient = document.createElement("div");
                    tag_ingredient.classList.add("tag_ingredient", "tag");
                    let ingredientNom = document.createElement("p");
                    ingredientNom.innerHTML = item.innerHTML + " " + '<i class="far fa-times-circle close" aria-hidden="true"></i>';
                    tag_ingredient.appendChild(ingredientNom);
                    tag_selectionne.appendChild(tag_ingredient);

                } else if (item.classList.contains("appareil")) {
                    let tag_appareil = document.createElement("div");
                    tag_appareil.classList.add("tag_appareil", "tag");
                    let appareilNom = document.createElement("p");
                    appareilNom.innerHTML = item.innerHTML + " " + '<i class="far fa-times-circle close" aria-hidden="true"></i>';
                    tag_appareil.appendChild(appareilNom);
                    tag_selectionne.appendChild(tag_appareil);

                } else if (item.classList.contains("ustensile")) {
                    let tag_ustensile = document.createElement("div");
                    tag_ustensile.classList.add("tag_ustensiles", "tag");
                    let ustensileNom = document.createElement("p");
                    ustensileNom.innerHTML = item.innerHTML + " " + '<i class="far fa-times-circle close" aria-hidden="true"></i>';
                    tag_ustensile.appendChild(ustensileNom);
                    tag_selectionne.appendChild(tag_ustensile);
                }

                document.querySelectorAll(".close").forEach(item => {
                    item.addEventListener("click", function() {
                        item.parentElement.parentElement.parentElement.removeChild(item.parentElement.parentElement);
                        
                    })
                })
            })
        })

        
    }
}