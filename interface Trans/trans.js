const fournisseurs = [
    { id: 1, nom: 'Orange Money' },
    { id: 2, nom: 'Wave' },
    { id: 3, nom: 'Wari' },
    { id: 4, nom: 'Compte Bancaire' },
];

const types = [
    { id: 1, nom: 'Depot' },
    { id: 2, nom: 'Retrait' },
    { id: 3, nom: 'Transfert' },
];

const data = { fournisseurs, types };

const compdteEdit = document.querySelector("#inputCompteE");
const nomEdit = document.querySelector("#inputNomE");
const montant = document.querySelector("#inputMontant");
const fournisseur = document.querySelector("#idFrs");
const transfert = document.querySelector("#idTrs");
const compdteDest = document.querySelector("#inputCompteD");
const nomDest = document.querySelector("#inputNomD");
const bouton = document.querySelector(".btn");
const expediteur = document.querySelector(".expedit");
const as = document.querySelectorAll(".a");


function chargerSelect(data, select, label = 'Selectionner') {
    select.innerHTML = '';
    const option = creatingElement('option');
    option.innerHTML = label;
    select.appendChild(option);
    data.forEach(d => {
        const option = creatingElement('option');
        option.innerHTML = d.nom;
        option.value = d.nom;
        select.appendChild(option);
    });
}
function creatingElement(elName) {
    return document.createElement(elName);
}
as.forEach(a => {
    a.addEventListener('click', (e) => {
        // var selectedFournisseur = fournisseur.value;
        const boxTitle = a.classList;
        if (boxTitle.contains('form-control')) {
            chargerSelect(fournisseurs, fournisseur, 'selectionner un fournisseur');
        }
        if (boxTitle.contains('form-control')) {
            chargerSelect(types, transfert, 'selectionner  un type');
        }
    })
});

console.log(data);

document.addEventListener("DOMContentLoaded", function () {

    fournisseur.addEventListener("change", function () {
        var selectedFournisseur = fournisseur.value;

        if (selectedFournisseur === "Orange Money") {
            expediteur.style.color = "orange";
        }
        else if (selectedFournisseur === "Wave") {
            expediteur.style.color = "blue";
        }
        else if (selectedFournisseur === "Wari") {
            expediteur.style.color = "green";
        }
        else if (selectedFournisseur === "Compte Bancaire") {
            expediteur.style.color = "yellow";
        }
        else {
            expediteur.style.color = "black";
        }
    });
});

bouton.addEventListener('submit', () => {
// console.log(data);


})