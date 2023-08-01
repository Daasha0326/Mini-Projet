const compdteEdit: HTMLInputElement = document.querySelector("#inputCompteE");
const nomEdit: HTMLInputElement = document.querySelector("#inputNomE");
const montant: HTMLInputElement = document.querySelector("#inputMontant");
const fournisseur: HTMLInputElement = document.querySelector("#idFrs");
const transfert: HTMLInputElement = document.querySelector("#idTrs");
const compdteDest: HTMLInputElement = document.querySelector("#inputCompteD");
const nomDest: HTMLInputElement = document.querySelector("#inputNomD");
const bouton: HTMLElement = document.querySelector(".button");
const expediteur: HTMLElement = document.querySelector(".expedit");
const as = document.querySelectorAll(".a");

let chemin: string = "http://127.0.0.1:8000/api/transactions/3";

console.log('coucou')

bouton.addEventListener('click', () => {
    fetch(chemin, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            montant: montant.value,
        })
    })

        .then(res => res.json())
        .then((data) => {
            console.log(data);
        })

    console.log("coucou");


})
