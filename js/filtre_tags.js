export default class FiltreTags {
    //Choix du filtre-------------------------------------------------------------------
    filtreTag() {
        let recette = document.querySelectorAll(".recette");
    
        document.querySelector(".filtre_tag_ingredient").addEventListener("click", event => {
        
            event.target.classList.add("actif");

            this.cacherRecette(recette);
    
        });

        document.querySelector(".filtre_tag_appareil").addEventListener("click", event => {
        
            event.target.classList.add("actif");
    
            this.cacherRecette(recette);
    
        });

        document.querySelector(".filtre_tag_ustensile").addEventListener("click", event => {
        
            event.target.classList.add("actif");
    
            this.cacherRecette(recette);
    
        });

        this.cacherRecette(recette);
    }
    
    //rangement des filtres actifs dans un tableau
    filtresActifs() {
        let filtreActives = document.querySelectorAll(".actif");
        let filtreSelection = [];
    
        filtreActives.forEach(function(filtreActives) {
            filtreSelection.push(filtreActives.getAttribute("data-filter"));
        });
    
        return filtreSelection
    }

    //Compare avec les profils pour trouver ceux avec le même tag
    comparaisonFiltres(article) {
      let filtres = this.filtresActifs();
      let nomClasse = article.classList.value;
      let classes = nomClasse.split(" ");
      let intersection = filtres.filter(
          x => classes.includes(x)
      );

      return filtres.length == intersection.length;
  }

    //cache les profils qui ne comportent pas les tags actifs
    cacherRecette(recette) {
        recette.forEach((article) => {
            if (this.comparaisonFiltres(article)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    }
}