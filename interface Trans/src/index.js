var compdteEdit = document.querySelector("#inputCompteE");
var nomEdit = document.querySelector("#inputNomE");
var montant = document.querySelector("#inputMontant");
var fournisseur = document.querySelector("#idFrs");
var transfert = document.querySelector("#idTrs");
var compdteDest = document.querySelector("#inputCompteD");
var nomDest = document.querySelector("#inputNomD");
var bouton = document.querySelector(".button");
var expediteur = document.querySelector(".expedit");
var as = document.querySelectorAll(".a");
var chemin = "http://127.0.0.1:8000/api/transactions/3";
console.log('coucou');
bouton.addEventListener('click', function () {
    fetch(chemin, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            montant: montant.value
        })
    })
        .then(function (res) { return res.json(); })
        .then(function (data) {
        console.log(data);
    });
    console.log("coucou");
});
