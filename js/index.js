"use strict";

import Liste from "./liste_filtre.js";
import Tag from "./tag.js";
import FiltreRecherche from "./filtre_recherche.js";

window.onload = function() {
    pageIndex();
};

//Creation des tableaux contentant les ingredients, appareils et ustensiles
let ingredientsArray = [];
let appareilArray = [];
let ustensileArray = [];

function pageIndex() {
    //recupération fichier json------------------------------------------
    fetch("recipes.json")
        .then((res) => res.json())
        .then(data => {
            let recipedata = data.recipes;
            recipedata.forEach(element => {
                //Creation contenant
                let recette = document.createElement("a");
                recette.classList.add("recette");
                recette.classList.add(element.name.replace(/['\s%\s(\s)]/g, ""));
                recette.href = "index.html";

                //insertion
                document.querySelector(".liste_recettes").appendChild(recette);

                //creation image
                let image = document.createElement("div");
                image.classList.add("image");
                recette.appendChild(image);

                //creation indications et ingredients
                let recette_indications = document.createElement("div");
                recette_indications.classList.add("recette_indications");
                recette.appendChild(recette_indications);

                //creation titre et temps
                let titre_temps = document.createElement("div");
                titre_temps.classList.add("titre_temps");
                recette_indications.appendChild(titre_temps);
                let titre = document.createElement("b");
                titre.innerHTML = element.name;
                titre_temps.appendChild(titre);
                let temps = document.createElement("b");
                temps.classList.add("temps");
                temps.innerHTML = "<i class=\"far fa-clock\" aria-hidden=\"true\"></i>" + " " + element.time + " min";
                titre_temps.appendChild(temps);

                //creation ingredients
                let ingredients_indications = document.createElement("div");
                ingredients_indications.classList.add("ingredients_indications");
                recette_indications.appendChild(ingredients_indications);
                let ingredients = document.createElement("div");
                ingredients.classList.add("ingredients");
                ingredients_indications.appendChild(ingredients);

                //creation pour chaque ingredients et verification si il y a une quantité et une unité
                element.ingredients.forEach(element => {
                    let ingredient = document.createElement("p");
                    let bold_ingredient = `<b>${element.ingredient}</b>`;
                    if (element.quantity !== undefined) {
                        if (element.unit !== undefined) {
                            ingredient.innerHTML = bold_ingredient + ": " + element.quantity + " " + element.unit;
                        } else {
                            ingredient.innerHTML = bold_ingredient + ": " + element.quantity;
                        }
                    } else {
                        ingredient.innerHTML = bold_ingredient;
                    }
                    ingredients.appendChild(ingredient);

                    //Ajout des ingredients dans un tableau
                    if (ingredientsArray.includes(element.ingredient) == false) {
                        ingredientsArray.push(element.ingredient);
                    }
                    recette.classList.add(element.ingredient.replace(/['\s%\s(\s)]/g, ""));
                });

                //Ajout des appareils dans un tableau
                if (appareilArray.includes(element.appliance) == false) {
                    appareilArray.push(element.appliance);
                }
                recette.classList.add(element.appliance.replace(/['\s%\s(\s)]/g, ""));

                //Ajout des ustensiles dans un tableau
                element.ustensils.forEach(element => {
                    if (ustensileArray.includes(element) == false) {
                        ustensileArray.push(element);
                    }
                    recette.classList.add(element.replace(/['\s%\s(\s)]/g, ""));
                });
                
                //creation indications
                let indications = document.createElement("div");
                indications.classList.add("indications");
                ingredients_indications.appendChild(indications);
                let texte_recette = document.createElement("p");
                indications.appendChild(texte_recette);
                texte_recette.innerHTML = element.description;
            });
        })
        //Creation des listes ingredients, appareils et ustensiles
        .then(function() {
            new Liste().ouvertureMenu();

            //Ajout des ingredients disponibles
            let filtre_tag_ingredient = document.querySelector(".filtre_tag_ingredient");
            ingredientsArray.forEach(element => {
                let filtre_tag_ingredient_li = document.createElement("li");
                filtre_tag_ingredient_li.classList.add("filtre_tag_ingredient_li", "filtre_tag_li", "ingredient", element.replace(/['\s%\s(\s)]/g, ""));
                filtre_tag_ingredient_li.innerHTML = element;
                filtre_tag_ingredient_li.setAttribute("data-filter", element.replace(/['\s%\s(\s)]/g, ""));
                filtre_tag_ingredient.appendChild(filtre_tag_ingredient_li);
            });

            //Ajout des appareils disponibles
            let filtre_tag_appareil = document.querySelector(".filtre_tag_appareil");
            appareilArray.forEach(element => {
                let filtre_tag_appareil_li = document.createElement("li");
                filtre_tag_appareil_li.classList.add("filtre_tag_appareil_li", "filtre_tag_li", "appareil", element.replace(/['\s%\s(\s)]/g, ""));
                filtre_tag_appareil_li.innerHTML = element;
                filtre_tag_appareil_li.setAttribute("data-filter", element.replace(/['\s%\s(\s)]/g, ""));
                filtre_tag_appareil.appendChild(filtre_tag_appareil_li);
            });

            //Ajout des ustensiles disponibles
            let filtre_tag_ustensile = document.querySelector(".filtre_tag_ustensile");
            ustensileArray.forEach(element => {
                let filtre_tag_ustensile_li = document.createElement("li");
                filtre_tag_ustensile_li.classList.add("filtre_tag_ustensile_li", "filtre_tag_li", "ustensile", element.replace(/['\s%\s(\s)]/g, ""));
                filtre_tag_ustensile_li.innerHTML = element;
                filtre_tag_ustensile_li.setAttribute("data-filter", element.replace(/['\s%\s(\s)]/g, ""));
                filtre_tag_ustensile.appendChild(filtre_tag_ustensile_li);
            });
            new Tag().ajoutTag();
            new FiltreRecherche().filtreTitre();
        })
        .catch(function() {
            console.log("erreur");
        });
}


            