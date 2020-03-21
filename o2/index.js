const inpCash = document.querySelector ("#inpCash");
const saldo = document.querySelector ("#saldo");



function SettInnPenger () {

  //  document.body.innerHTML += `<h2> Saldo: ${inpCash.value}</h2>`;

    saldo.innerText = "Saldo: " + `${inpCash.value}`;
}




BtnSettInn.addEventListener("click", SettInnPenger);




