const Storage = {
  // LIVRES
  getLivres() {
    return JSON.parse(localStorage.getItem("livres")) || [];
  },

  saveLivres(livres) {
    localStorage.setItem("livres", JSON.stringify(livres));
  },

  // AUTEURS
  getAuteurs() {
    return JSON.parse(localStorage.getItem("auteurs")) || [];
  },

  saveAuteurs(auteurs) {
    localStorage.setItem("auteurs", JSON.stringify(auteurs));
  }
};
