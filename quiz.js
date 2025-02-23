
const alleSpørsmål = [
    { bilde: "bilder/country-flags-main/svg/andorra.svg", alternativer: ["Andorra", "Frankrike", "Spania", "Italia"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/norway.svg", alternativer: ["Danmark", "Sverige", "Finland", "Norge"], korrekt: 3 },
    { bilde: "bilder/country-flags-main/svg/japan.svg", alternativer: ["Kina", "Sør-Korea", "Japan", "Vietnam"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/brazil.svg", alternativer: ["Argentina", "Brasil", "Chile", "Peru"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/canada.svg", alternativer: ["USA", "Canada", "Australia", "Storbritannia"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/germany.svg", alternativer: ["Belgia", "Nederland", "Tyskland", "Sveits"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/uk.svg", alternativer: ["USA", "Australia", "Storbritannia", "New Zealand"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/sweden.svg", alternativer: ["Danmark", "Norge", "Sverige", "Finland"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/france.svg", alternativer: ["Italia", "Frankrike", "Belgia", "Spania"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/italy.svg", alternativer: ["Irland", "Mexico", "Italia", "Portugal"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/australia.svg", alternativer: ["New Zealand", "Australia", "USA", "Canada"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/usa.svg", alternativer: ["USA", "Canada", "Mexico", "Storbritannia"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/russia.svg", alternativer: ["Russland", "Ukraina", "Polen", "Hviterussland"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/china.svg", alternativer: ["Japan", "Sør-Korea", "Kina", "Taiwan"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/spain.svg", alternativer: ["Portugal", "Spania", "Italia", "Frankrike"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/portugal.svg", alternativer: ["Spania", "Brasil", "Portugal", "Argentina"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/india.svg", alternativer: ["India", "Pakistan", "Bangladesh", "Sri Lanka"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/mexico.svg", alternativer: ["Spania", "Mexico", "Argentina", "Peru"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/argentina.svg", alternativer: ["Chile", "Uruguay", "Brasil", "Argentina"], korrekt: 3 },
    { bilde: "bilder/country-flags-main/svg/south-korea.svg", alternativer: ["Kina", "Japan", "Nord-Korea", "Sør-Korea"], korrekt: 3 }
];

let spørsmål = [];
let nåværendeSpørsmål = 0;
let score = 0;
let tid = 10;
let nedtelling;
let quizStartet = false;
let tidUte = false; 


const flaggBilde = document.getElementById("flagg-image");
const knapper = document.querySelectorAll(".alternativ-btn");
const nesteBtn = document.getElementById("neste-btn");
const scoreTekst = document.getElementById("score");
const klokke = document.getElementById("klokke");


nesteBtn.textContent = "Start quiz";
nesteBtn.style.display = "block";


nesteBtn.addEventListener("click", () => {
    if (!quizStartet) {
        quizStartet = true;
        startNyQuiz();
    } else {
        nesteSpørsmål();
    }
});

function startNyQuiz() {
    spørsmål = [...alleSpørsmål].sort(() => Math.random() - 0.5).slice(0, 10);
    nåværendeSpørsmål = 0;
    score = 0;
    scoreTekst.textContent = score;
    visSpørsmål();
}

function visSpørsmål() {
    if (nåværendeSpørsmål >= spørsmål.length) {
        alert(`Quizen er ferdig! Du fikk ${score} poeng av 10!`);
        quizStartet = false;
        nesteBtn.textContent = "Start quiz";
        nesteBtn.style.display = "block";
        return;
    }

    clearInterval(nedtelling);
    tid = 10;
    tidUte = false;
    klokke.textContent = tid + " sek";
    nedtelling = setInterval(oppdaterTid, 1000);

    const spørsmålObjekt = spørsmål[nåværendeSpørsmål];
    flaggBilde.src = spørsmålObjekt.bilde;

    knapper.forEach((knapp, index) => {
        knapp.textContent = spørsmålObjekt.alternativer[index];
        knapp.disabled = false;
        knapp.style.background = "white";
    });

    nesteBtn.textContent = "Neste flagg"; 
    nesteBtn.style.display = "none";
}

function oppdaterTid() {
    tid--;
    klokke.textContent = tid + " sek";
    if (tid === 0) {
        clearInterval(nedtelling);
        disableButtons();
        klokke.textContent = "Tid ute!";
        tidUte = true; 
        nesteBtn.textContent = "Neste flagg"; 
        nesteBtn.style.display = "block";
    }
}

function sjekkSvar(valgtIndex) {
    if (tidUte) return; 

    clearInterval(nedtelling);
    const riktigIndex = spørsmål[nåværendeSpørsmål].korrekt;

    if (valgtIndex === riktigIndex) {
        score++;
        scoreTekst.textContent = score;
        knapper[valgtIndex].style.background = "lightgreen";
    } else {
        knapper[valgtIndex].style.background = "red";
        knapper[riktigIndex].style.background = "lightgreen";
    }

    disableButtons();
    nesteBtn.style.display = "block"; 
}

function disableButtons() {
    knapper.forEach(knapp => (knapp.disabled = true));
}

function nesteSpørsmål() {
    nåværendeSpørsmål++;
    visSpørsmål();
}


knapper.forEach((knapp, index) => {
    knapp.addEventListener("click", () => sjekkSvar(index));
});