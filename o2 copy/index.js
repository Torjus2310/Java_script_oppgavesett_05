const inpCash = document.querySelector ("#inpCash");
const Saldo = document.querySelector ("#Saldo");

Saldo.value = 1000

function SettInnPenger () {


     Saldo.innerText = (Number(`${Saldo.value}`) - `${inpCash.value}`);

     if (inpCash.value > 1000) {

        Saldo.innerText = "Så mye har du ikke :)";
        Saldo.style.backgroundColor="red";
     }


}


BtnTaUt.addEventListener("click", SettInnPenger);




