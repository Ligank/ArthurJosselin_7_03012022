"use strict";

export default class Liste {
    ouvertureMenu() {
        const menu_ingredients_ferme = document.querySelector(".menu_ingredients_ferme");
        const menu_ingredients_ouvert = document.querySelector(".menu_ingredients_ouvert");
        const fermer_ingredient = document.querySelector(".fermer_ingredient");

        const menu_appareil_ferme = document.querySelector(".menu_appareil_ferme");
        const menu_appareil_ouvert = document.querySelector(".menu_appareil_ouvert");
        const fermer_appareil = document.querySelector(".fermer_appareil");

        const menu_ustensiles_ferme = document.querySelector(".menu_ustensiles_ferme");
        const menu_ustensiles_ouvert = document.querySelector(".menu_ustensiles_ouvert");
        const fermer_ustensile = document.querySelector(".fermer_ustensile");

        //Ouverture liste ingredients
        menu_ingredients_ferme.addEventListener("click", ouvertureIngredient);
        fermer_ingredient.addEventListener("click", fermetureIngredient);

        function ouvertureIngredient() {
            menu_ingredients_ferme.style.display = "none";
            menu_ingredients_ouvert.style.display= "flex";
            menu_appareil_ferme.style.display = "flex";
            menu_appareil_ouvert.style.display= "none";
            menu_ustensiles_ferme.style.display = "flex";
            menu_ustensiles_ouvert.style.display= "none";
        }
        function fermetureIngredient() {
            menu_ingredients_ferme.style.display = "flex";
            menu_ingredients_ouvert.style.display= "none";
        }

        //Ouverture liste appareils
        menu_appareil_ferme.addEventListener("click", ouvertureAppareil);
        fermer_appareil.addEventListener("click", fermetureAppareil);

        function ouvertureAppareil() {
            menu_appareil_ferme.style.display = "none";
            menu_appareil_ouvert.style.display= "flex";
            menu_ingredients_ferme.style.display = "flex";
            menu_ingredients_ouvert.style.display= "none";
            menu_ustensiles_ferme.style.display = "flex";
            menu_ustensiles_ouvert.style.display= "none";
        }
        function fermetureAppareil() {
            menu_appareil_ferme.style.display = "flex";
            menu_appareil_ouvert.style.display= "none";
        }

        //Ouverture liste ustensiles
        menu_ustensiles_ferme.addEventListener("click", ouvertureUstensile);
        fermer_ustensile.addEventListener("click", fermetureUstensile);

        function ouvertureUstensile() {
            menu_ustensiles_ferme.style.display = "none";
            menu_ustensiles_ouvert.style.display= "flex";
            menu_appareil_ferme.style.display = "flex";
            menu_appareil_ouvert.style.display= "none";
            menu_ingredients_ferme.style.display = "flex";
            menu_ingredients_ouvert.style.display= "none";
        }
        function fermetureUstensile() {
            menu_ustensiles_ferme.style.display = "flex";
            menu_ustensiles_ouvert.style.display= "none";
        }

    }
}