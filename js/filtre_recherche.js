import FiltreRechercheTags from "./filtre_recherche_tags.js";
export default class FiltreRecherche {
    filtreTitre() {
        let barreRecherche = document.querySelector(".recherche_barre");
        barreRecherche.addEventListener('input', function() {
            if (barreRecherche.value.length > 2) {
                console.log("test");









            } else {
                recette.forEach( element => {
                    element.style.display = "block";
                    element.classList.add("actifrecherche");
                })
                document.querySelector(".aucune_recette").style.display ="none";
                new FiltreRechercheTags().cacherTag();
            }
        })
    }
}