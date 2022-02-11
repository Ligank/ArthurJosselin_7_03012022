let recetteActivesClasses = [];
export default class FiltreRechercheTags {

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
        let recetteActive = document.querySelectorAll(".actifrecherche2");
        recetteActivesClasses = [];
        recetteActive.forEach(element => {
            let nomClasse = element.classList.value;
            let classes = nomClasse.split(" ");
            classes.forEach(element => {
                recetteActivesClasses.push(element);
            });
        });
        
        
        let tags = document.querySelectorAll(".filtre_tag_li");
        tags.forEach((article) => {
            if (this.comparaisonTags(article)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    }

    cacherTag2() {
        let recetteActive = document.querySelectorAll(".tagActif");
        recetteActivesClasses = [];
        recetteActive.forEach(element => {
            let nomClasse = element.classList.value;
            let classes = nomClasse.split(" ");
            classes.forEach(element => {
                recetteActivesClasses.push(element);
            });
        });
        
        
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