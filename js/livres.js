const formLivre = document.getElementById("formLivre");
const tbody = document.getElementById("tbodyLivres");

let livres = Storage.getLivres();

formLivre.addEventListener("submit", ajouterLivre);

function ajouterLivre(e) {
  e.preventDefault();

  livres.push({
    id: Date.now(),
    titre: titre.value,
    auteur: auteur.value,
    annee: annee.value,
    genre: genre.value,
    disponible: true
  });

  Storage.saveLivres(livres);
  afficherLivres();
  formLivre.reset();
}

function afficherLivres() {
  tbody.innerHTML = "";
  livres.forEach(l => {
    tbody.innerHTML += `
      <tr>
        <td>${l.titre}</td>
        <td>${l.auteur}</td>
        <td>${l.annee}</td>
        <td>${l.genre}</td>
        <td>
          <button class="btn btn-danger btn-sm"
            onclick="supprimerLivre(${l.id})">🗑</button>
        </td>
      </tr>
    `;
  });
}

function supprimerLivre(id) {
  if (confirm("Supprimer ce livre ?")) {
    livres = livres.filter(l => l.id !== id);
    Storage.saveLivres(livres);
    afficherLivres();
  }
}

afficherLivres();
