export default class FiltreRecherche {
    filtreTitre() {
        let barreRecherche = document.querySelector(".recherche_barre");
        barreRecherche.addEventListener('input', function() {
            if (barreRecherche.value.length > 2) {
                console.log("test");
            }
        })
    }
}