import FiltreRechercheTags from "./filtre_recherche_tags.js";
export default class FiltreRecherche {
    filtreTitre() {
        let recette = document.querySelectorAll(".recette");
        let barreRecherche = document.querySelector(".recherche_barre");
        barreRecherche.addEventListener('input', function() {
            if (barreRecherche.value.length > 2) {
                for(let i = 0; i < recette.length; i++) {
                    console.log("test")
                }









            } else {
                for(let i = 0; i < recette.length; i++) {
                    console.log(recette[i])
                    //recette[i].style.display = "block";
                    //recette[i].classList.add("actifrecherche");
                }
                document.querySelector(".aucune_recette").style.display ="none";
                new FiltreRechercheTags().cacherTag();
            }
        })
    }
}