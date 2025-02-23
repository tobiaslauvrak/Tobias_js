const alleSpørsmål = [
    { bilde: "bilder/country-flags-main/svg/albania.svg", alternativer: ["Makedonia", "Montenegro", "Albania", "Serbia"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/austria.svg", alternativer: ["Danmark", "Østerrike", "Latvia", "Polen"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/armenia.svg", alternativer: ["Moldova", "Armenia", "Georgia", "Aserbajdsjan"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/bangladesh.svg", alternativer: ["Pakistan", "India", "Bangladesh", "Japan"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/bahrain.svg", alternativer: ["Qatar", "Oman", "Saudi-Arabia", "Bahrain"], korrekt: 3 },
    { bilde: "bilder/country-flags-main/svg/belarus.svg", alternativer: ["Russland", "Litauen", "Hviterussland", "Bulgaria"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/botswana.svg", alternativer: ["Estland", "Namibia", "Tanzania", "Botswana"], korrekt: 3 },
    { bilde: "bilder/country-flags-main/svg/colombia.svg", alternativer: ["Ecuador", "Colombia", "Venezuela", "Bolivia"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/cyprus.svg", alternativer: ["Malta", "Kypros", "Hellas", "Libanon"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/dominican-republic.svg", alternativer: ["Panama", "Honduras", "Costa Rica", "Den dominikanske republikk"], korrekt: 3 },
    { bilde: "bilder/country-flags-main/svg/ecuador.svg", alternativer: ["Colombia", "Venezuela", "Ecuador", "Peru"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/estonia.svg", alternativer: ["Latvia", "Finland", "Estland", "Sverige"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/fiji.svg", alternativer: ["Tuvalu", "Fiji", "Samoa", "Vanuatu"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/georgia.svg", alternativer: ["England", "Georgia", "Malta", "Sveits"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/honduras.svg", alternativer: ["El Salvador", "Honduras", "Guatemala", "Nicaragua"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/indonesia.svg", alternativer: ["Indonesia", "Monaco", "Polen", "Singapore"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/jamaica.svg", alternativer: ["Bahamas", "Jamaica", "Barbados", "Saint Kitts og Nevis"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/kazakhstan.svg", alternativer: ["Kasakhstan", "Usbekistan", "Turkmenistan", "Aserbajdsjan"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/kenya.svg", alternativer: ["Tanzania", "Uganda", "Kenya", "Malawi"], korrekt: 2 },
    { bilde: "bilder/country-flags-main/svg/kosovo.svg", alternativer: ["Kosovo", "Serbia", "Makedonia", "Montenegro"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/laos.svg", alternativer: ["Thailand", "Kambodsja", "Myanmar", "Laos"], korrekt: 3 },
    { bilde: "bilder/country-flags-main/svg/latvia.svg", alternativer: ["Estland", "Latvia", "Litauen", "Polen"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/lebanon.svg", alternativer: ["Libanon", "Israel", "Jordan", "Syria"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/malaysia.svg", alternativer: ["Malaysia", "Brunei", "Indonesia", "Filippinene"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/mongolia.svg", alternativer: ["Mongolia", "Kasakhstan", "Russland", "Kina"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/morocco.svg", alternativer: ["Tunisia", "Algerie", "Libya", "Marokko"], korrekt: 3 },
    { bilde: "bilder/country-flags-main/svg/nepal.svg", alternativer: ["Nepal", "Bhutan", "Tibet", "India"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/paraguay.svg", alternativer: ["Uruguay", "Paraguay", "Bolivia", "Chile"], korrekt: 1 },
    { bilde: "bilder/country-flags-main/svg/senegal.svg", alternativer: ["Senegal", "Mali", "Kamerun", "Elfenbenskysten"], korrekt: 0 },
    { bilde: "bilder/country-flags-main/svg/slovakia.svg", alternativer: ["Slovakia", "Slovenia", "Tsjekkia", "Kroatia"], korrekt: 0 }
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

