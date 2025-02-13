const klokkeEl = document.getElementById("klokke")



let sekunder = 10




function klokkeTikkNed() {
    sekunder = sekunder - 1
    klokkeEl.innerHTML = sekunder + "sek"

    if (sekunder <=0){
        clearInterval(klokkeRef)
        spillFerdig = true
    }
}