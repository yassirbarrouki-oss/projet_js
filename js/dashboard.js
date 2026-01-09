function chargerKPI() {
  const livres = Storage.getLivres();
  const auteurs = Storage.getAuteurs();

  kpiLivres.textContent = livres.length;
  kpiAuteurs.textContent = auteurs.length;
  kpiDispo.textContent = livres.filter(l => l.disponible).length;
}
