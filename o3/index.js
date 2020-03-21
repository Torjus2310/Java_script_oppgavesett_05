
const Lyd1 = document.querySelector("#Lyd1");
const Lyd2 = document.querySelector("#Lyd2");
const Lyd3 = document.querySelector("#Lyd3");


Lyd1.volume = 0.05;
Lyd2.volume = 0.05;
Lyd3.volume = 0.05;


function spillLyd1() {
  Lyd1.play();
  
}
function spillLyd2() {
  Lyd2.play();
}
function spillLyd3() {
  Lyd3.play();

}

btnLyd1.onclick = spillLyd1; 
btnLyd2.onclick = spillLyd2; 
btnLyd3.onclick = spillLyd3; 







