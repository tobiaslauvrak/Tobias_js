const alleSpørsmål = [
        { bilde: "bilder/country-flags-main/svg/ax.svg", alternativer: ["Færøyene", "Åland", "Grønland", "Island"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/bt.svg", alternativer: ["Nepal", "Mongolia", "Bhutan", "Bangladesh"], korrekt: 2 },
        { bilde: "bilder/country-flags-main/svg/cf.svg", alternativer: ["Den sentralafrikanske republikk", "Kamerun", "Tsjad", "Gabon"], korrekt: 0 },
        { bilde: "bilder/country-flags-main/svg/km.svg", alternativer: ["Madagaskar", "Komorene", "Mauritius", "Seychellene"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/ws.svg", alternativer: ["Tonga", "Fiji", "Samoa", "Vanuatu"], korrekt: 2 },
        { bilde: "bilder/country-flags-main/svg/gq.svg", alternativer: ["Guinea-Bissau", "Ekvatorial-Guinea", "Gabon", "Republikken Kongo"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/tj.svg", alternativer: ["Tadsjikistan", "Turkmenistan", "Usbekistan", "Kirgistan"], korrekt: 0 },
        { bilde: "bilder/country-flags-main/svg/er.svg", alternativer: ["Sudan", "Etiopia", "Eritrea", "Djibouti"], korrekt: 2 },
        { bilde: "bilder/country-flags-main/svg/ls.svg", alternativer: ["Botswana", "Swaziland", "Malawi", "Lesotho"], korrekt: 3 },
        { bilde: "bilder/country-flags-main/svg/pg.svg", alternativer: ["Papua Ny-Guinea", "Salomonøyene", "Vanuatu", "Tonga"], korrekt: 0 },
        { bilde: "bilder/country-flags-main/svg/mh.svg", alternativer: ["Kiribati", "Nauru", "Tuvalu", "Marshalløyene"], korrekt: 3 },
        { bilde: "bilder/country-flags-main/svg/bi.svg", alternativer: ["Burundi", "Rwanda", "Uganda", "Tanzania"], korrekt: 0 },
        { bilde: "bilder/country-flags-main/svg/sr.svg", alternativer: ["Guyana", "Fransk Guyana", "Venezuela", "Surinam"], korrekt: 3 },
        { bilde: "bilder/country-flags-main/svg/ml.svg", alternativer: ["Burkina Faso", "Guinea", "Mali", "Senegal"], korrekt: 2 },
        { bilde: "bilder/country-flags-main/svg/ne.svg", alternativer: ["Tsjad", "India", "Niger", "Benin"], korrekt: 2 },
        { bilde: "bilder/country-flags-main/svg/sc.svg", alternativer: ["Mauritius", "Maldivene", "Komorene", "Seychellene"], korrekt: 3 },
        { bilde: "bilder/country-flags-main/svg/st.svg", alternativer: ["Kapp Verde", "São Tomé og Príncipe", "Ekvatorial-Guinea", "Guinea-Bissau"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/tv.svg", alternativer: ["Nauru", "Tuvalu", "Kiribati", "Marshalløyene"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/to.svg", alternativer: ["Fiji", "Samoa", "Tonga", "Vanuatu"], korrekt: 2 },
        { bilde: "bilder/country-flags-main/svg/bn.svg", alternativer: ["Brunei", "Malaysia", "Indonesia", "Filippinene"], korrekt: 0 },
        { bilde: "bilder/country-flags-main/svg/ci.svg", alternativer: ["Irland", "Elfenbenskysten", "Italia", "Kambodsja"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/kg.svg", alternativer: ["Kasakhstan", "Tadsjikistan", "Kirgistan", "Usbekistan"], korrekt: 2 },
        { bilde: "bilder/country-flags-main/svg/fm.svg", alternativer: ["Mikronesia", "Marshalløyene", "Kiribati", "Palau"], korrekt: 0 },
        { bilde: "bilder/country-flags-main/svg/vc.svg", alternativer: ["Grenada", "Barbados", "Dominica", "Saint Vincent og Grenadinene"], korrekt: 3 },
        { bilde: "bilder/country-flags-main/svg/mw.svg", alternativer: ["Mozambique", "Zambia", "Zimbabwe", "Malawi"], korrekt: 3 },
        { bilde: "bilder/country-flags-main/svg/gw.svg", alternativer: ["Ekvatorial-Guinea", "Guinea-Bissau", "Guinea", "Sierra Leone"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/mr.svg", alternativer: ["Mali", "Mauritania", "Burkina Faso", "Tsjad"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/ss.svg", alternativer: ["Sudan", "Sør-Sudan", "Uganda", "Etiopia"], korrekt: 1 },
        { bilde: "bilder/country-flags-main/svg/tl.svg", alternativer: ["Indonesia", "Øst-Timor", "Filippinene", "Papua Ny-Guinea"], korrekt: 1 }
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
        knapper[valgtIndex].style.background = "ligthgreen";
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


