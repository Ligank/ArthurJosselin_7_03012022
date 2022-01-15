        let rechercheArray = [];
        let resultRechercheReduce = [];
export default class FiltreRecherche {
    creationArray(element) {
        
        //Ajout des ingredients dans un tableau
        element.ingredients.forEach(element => {
            if (rechercheArray.includes(element.ingredient)) {
            } else {
                rechercheArray.push(element.ingredient);
            }
        });

        //Ajout des appareils dans un tableau
        if (rechercheArray.includes(element.appliance)) {
        } else {
            rechercheArray.push(element.appliance);
        }

        //Ajout des ustensiles dans un tableau
        element.ustensils.forEach(element => {
            if (rechercheArray.includes(element)) {
                } else {
                    rechercheArray.push(element);
                }
        })
    }

    filtreRecherche() {
        let recette = document.querySelectorAll(".recette");
        let barreRecherche = document.querySelector(".recherche_barre");
            if (barreRecherche.value.length > 2) {
                const filtreTexte = (arr, requete) => {
                    return arr.filter(el =>  el.toLowerCase().indexOf(requete.toLowerCase()) !== -1);
                  }
                  let resultRecherche = filtreTexte(rechercheArray, barreRecherche.value);
                  if (resultRecherche.length > 0) {
                    resultRechercheReduce = [];
                    resultRecherche.forEach(element => {
                        resultRechercheReduce.push(element.replace(/['\s\%\s\(\s\)]/g, ""));
                    })
                    this.cacherRecette(recette);
                    
                  } else {
                    console.log("aucune recette");
                    document.querySelector(".liste_recettes").style.display = "none";
                  }
            } else {
                rechercheArray.forEach(element => {
                    resultRechercheReduce.push(element.replace(/['\s\%\s\(\s\)]/g, ""));
                })
                recette.forEach(recette => {
                    recette.classList.add("actifrecherche");
                })
                this.cacherRecette(recette);
            }
    }

    comparaisonFiltres(article) {
        let filtres = resultRechercheReduce;
        let nomClasse = article.classList.value;
        let classes = nomClasse.split(" ");
        let intersection = filtres.filter(
            x => classes.includes(x)
        );
  
        return intersection.length > 0;
    }

    cacherRecette(recette) {
        recette.forEach((article) => {
            if (this.comparaisonFiltres(article)) {
                article.style.display = "block";
                article.classList.add("actifrecherche");
            } else {
                article.style.display = "none";
                article.classList.remove("actifrecherche");
            }
        });
        this.cacherTag();
    }

    cacherTag() {
        let classes
        document.querySelectorAll(".actifrecherche").forEach(element => {
            let tagClasse = element.classList.value;
            classes = tagClasse.split(" ");
        })
        
    }

    
}