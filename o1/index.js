const inpPassord = document.querySelector("#inpPassord");
const inpGjentaPassord = document.querySelector("#inpGjentaPassord");
const txtBeskjed = document.querySelector("#txtBeskjed");


function sjekkPassord () {

    if(inpGjentaPassord.value === "") {
        txtBeskjed.innerText = "Fyll inn begge"
        return // Avslutte funksjoen
    } 
    if(inpPassord.value === "") {
        txtBeskjed.innerText = "Gjenta passordet"
        return //
    } 


    if (inpPassord.value === inpGjentaPassord.value) {
        txtBeskjed.innerText = "Passordene er like!";
        console.log("Passordene er like!");
    } else {
        txtBeskjed.innerText = "Passordene er ikke like"
    }




}

inpPassord.oninput = sjekkPassord;
inpGjentaPassord.oninput = sjekkPassord;
