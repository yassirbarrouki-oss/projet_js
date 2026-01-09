const formAuteur = document.getElementById("formAuteur");
const liste = document.getElementById("listeAuteurs");

let auteurs = Storage.getAuteurs();

formAuteur.addEventListener("submit", e => {
  e.preventDefault();

  auteurs.push({
    id: Date.now(),
    nom: nomAuteur.value,
    nationalite: nationalite.value
  });

  Storage.saveAuteurs(auteurs);
  afficherAuteurs();
  formAuteur.reset();
});

function afficherAuteurs() {
  liste.innerHTML = "";
  auteurs.forEach(a => {
    liste.innerHTML += `
      <li class="list-group-item d-flex justify-content-between">
        ${a.nom} (${a.nationalite})
        <button class="btn btn-sm btn-danger"
          onclick="supprimerAuteur(${a.id})">X</button>
      </li>
    `;
  });
}

function supprimerAuteur(id) {
  auteurs = auteurs.filter(a => a.id !== id);
  Storage.saveAuteurs(auteurs);
  afficherAuteurs();
}

afficherAuteurs();
