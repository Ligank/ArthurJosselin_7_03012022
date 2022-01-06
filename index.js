"use strict";

window.onload = function() {
    pageIndex();
};

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
                let clock = document.createElement("i");
                clock.classList.add("far", "fa-clock");
                temps.classList.add("temps");
                temps.innerHTML = '<i class="far fa-clock" aria-hidden="true"></i>' + " " + element.time + " min";
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
                    let bold_ingredient = `<b>${element.ingredient}: </b>`;
                    if (element.quantity !== undefined) {
                        if (element.unit !== undefined) {
                            ingredient.innerHTML = bold_ingredient + element.quantity + " " + element.unit;
                        } else {
                            ingredient.innerHTML = bold_ingredient + element.quantity;
                        }
                    } else {
                        ingredient.innerHTML = bold_ingredient;
                    }
                    ingredients.appendChild(ingredient);
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
        .catch(function() {
        console.log("erreur");
        });
}


            