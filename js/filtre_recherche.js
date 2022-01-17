"use strict";
let recetteActivesClasses = [];
export default class FiltreRecherche {
    
    filtreRecherche() {
        let recette = document.querySelectorAll(".recette");
        let barreRecherche = document.querySelector(".recherche_barre");
            if (barreRecherche.value.length > 2) {
                const filtreTexte = (arr, requete) => {
                    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
                  }
                  recette.forEach(element => {
                      let elementclasses = element.classList.value;
                      let classes = elementclasses.split(" ")
                        let resultRecherche = filtreTexte(classes, barreRecherche.value);
                        if (resultRecherche.length > 0) {
                            element.style.display = "block";
                            element.classList.add("actifrecherche");
                            this.cacherTag();
                            
                        } else {
                            element.style.display = "none";
                            element.classList.remove("actifrecherche");
                            this.cacherTag();
                        }
                })
                  
            } else {
                recette.forEach( element => {
                    element.style.display = "block";
                    element.classList.add("actifrecherche");
                })
                this.cacherTag();
            }
    }

    //Cacher les tags
    comparaisonTags(article) {
        let filtres = recetteActivesClasses;
        let nomClasse = article.classList.value;
        let classes = nomClasse.split(" ");
        let intersection = filtres.filter(
            x => classes.includes(x)
        );
  
        return intersection.length > 0;
    }

    cacherTag() {
        let recetteActive = document.querySelectorAll(".actifrecherche");
        recetteActivesClasses = [];
        recetteActive.forEach(element => {
            let nomClasse = element.classList.value;
            let classes = nomClasse.split(" ");
            classes.forEach(element => {
                recetteActivesClasses.push(element);
            })
        })
        
        let tags = document.querySelectorAll(".filtre_tag_li");
        tags.forEach((article) => {
            if (this.comparaisonTags(article)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    }
}