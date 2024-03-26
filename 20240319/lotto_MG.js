// Lottó választás és fejléc


function LottoTipusValasztas() {
    let valasztas = document.querySelector("#lottoTipus").value;
    if (valasztas == 590) { return 590 }
    else if (valasztas == 645) { return 645 }
    if (valasztas == 735) { return 735 }
    if (valasztas == "alap") { return "alap" }
}


function LottoTipusInfo() {
    let infoszoveg = document.querySelector("#lottoLeiras");
    let lottoTipusValasztas = LottoTipusValasztas()
    if (lottoTipusValasztas == 590) {
        infoszoveg.innerHTML = "Az Ötös lottó esetén 90 számból kell ötöt helyesen megtippelni."
    }
    else if (lottoTipusValasztas == 645) {
        infoszoveg.innerHTML = "A Hatos lottó esetén 45 számból kell hatot helyesen megtippelni."
    }
    else if (lottoTipusValasztas == 735) {
        infoszoveg.innerHTML = "A Skandináv lottó esetén 35 számból kell hetet helyesen megtippelni."
    }
    else { infoszoveg.innerHTML = "Kérlek válassz egy lottó tipust!" }
}

document.querySelector("#lottoTipus").addEventListener("input", LottoTipusInfo);


function LottoNyeresiEsely(szamokDarab, tartomany) {
    let nyeresiEsely = [];
    let esely = 1;
    for (i = 0; i < szamokDarab; i++) {
        tartomany -= i;
        esely *= tartomany
        nyeresiEsely.push(esely)
        tartomany += i;
    }
    return nyeresiEsely
}


function JatekLapMutato(id) {
    document.querySelector("#otos").style.display = "none";
    document.querySelector("#hatos").style.display = "none";
    document.querySelector("#skandinav").style.display = "none";
    document.querySelector(`#${id}`).style.display = "block";
}


function LottoNyeresiEselyKiirato() {
    let eselyszoveg = document.querySelector("#lottoEselyek");
    let lottoTipusValasztas = LottoTipusValasztas()
    if (lottoTipusValasztas == 590) {
        let nyeresiEsely = LottoNyeresiEsely(5, 90);
        let eselyszovegLista = "";
        for (i = 0; i < nyeresiEsely.length; i++) {
            eselyszovegLista += `<li> találat esetén 1 : ${nyeresiEsely[i]}</li>`
        }
        eselyszoveg.innerHTML = eselyszovegLista;
        JatekLapMutato("otos");
        //HetVisszaAllito();
    }

    else if (lottoTipusValasztas == 645) {
        let nyeresiEsely = LottoNyeresiEsely(6, 45);
        let eselyszovegLista = "";
        for (i = 0; i < nyeresiEsely.length; i++) {
            eselyszovegLista += `<li> találat esetén 1 : ${nyeresiEsely[i]}</li>`
        }
        eselyszoveg.innerHTML = eselyszovegLista;
        JatekLapMutato("hatos");
        //HetVisszaAllito();
    }

    else if (lottoTipusValasztas == 735) {
        let nyeresiEsely = LottoNyeresiEsely(7, 35);
        let eselyszovegLista = "";
        for (i = 0; i < nyeresiEsely.length; i++) {
            eselyszovegLista += `<li> találat esetén 1 : ${nyeresiEsely[i]}</li>`
        }
        eselyszoveg.innerHTML = eselyszovegLista;
        JatekLapMutato("skandinav");
        //HetVisszaAllito();
    }
    else {
        eselyszoveg.innerHTML = "";
        JatekLapMutato("");
    }
}

document.querySelector("#lottoTipus").addEventListener("input", LottoNyeresiEselyKiirato);

// Univerzális rész

function UniverzalisLottoSzamHuzas(szamMennyiseg, tartomany) {
    let kihuzottSzamok = [];
    for (i = 0; i < szamMennyiseg; i++) {
        let szam = Math.round(Math.random() * (tartomany - 1)) + 1;
        if (!kihuzottSzamok.includes(szam)) { kihuzottSzamok.push(szam) }
        else i--
    }
    return kihuzottSzamok.sort(function (a, b) { return a - b })
}


function TalalatSzamlalo(tippeltTomb, huzottTomb) {
    let talalatTomb = [];
    for (i = 0; i < tippeltTomb.length; i++) {
        for (j = 0; j < huzottTomb.length; j++) {
            if (tippeltTomb[i] == huzottTomb[j]) { talalatTomb.push(tippeltTomb[i]) }
        }
    }
    return talalatTomb
}

let otosHet = 1;
let hatosHet = 1;
let skandinavHet = 1;

function HetVisszaAllito() {
    otosHet = 1;
    hatosHet = 1;
    skandinavHet = 1;
}

// Ötös lottó

function OtosTippeltSzamokBeolvasas() {
    let otosTippeltSzamok = [];
    let otosHibaUzenet = document.querySelector("#otosHibaUzenet")
    for (i = 1; i < 6; i++) {
        let szam = document.querySelector(`#otos${i}`).value;
        if (!otosTippeltSzamok.includes(szam) && szam >= 1 && szam <= 90) { otosTippeltSzamok.push(szam); otosHibaUzenet.innerHTML = "" }
        else {
            otosHibaUzenet.innerHTML = "Hibás számo(ka)t addtál meg!";
            otosHibaUzenet.classList.add("bg-danger");
            break
        }
    }

    if (otosTippeltSzamok.length == 5) { return otosTippeltSzamok.sort(function (a, b) { return a - b }) }
    else {
        otosHibaUzenet.innerHTML = "Hibás számo(ka)t addtál meg!";
        otosHibaUzenet.classList.add("bg-danger");
    }
}


function OtosLottoEredmenyKiirato() {
    let otosTippeltSzamok = OtosTippeltSzamokBeolvasas();
    let otosHuzottSzamok = UniverzalisLottoSzamHuzas(5, 90);
    let otosTalalatSzamok = TalalatSzamlalo(otosTippeltSzamok, otosHuzottSzamok);
    document.querySelector("#otosKihuzottSzamok").innerHTML = otosHuzottSzamok;
    let table = document.querySelector("#otosTabla");
    let sor = table.insertRow(1);
    sor.insertCell().innerHTML = otosHet
    sor.insertCell().innerHTML = otosTippeltSzamok
    sor.insertCell().innerHTML = otosHuzottSzamok
    sor.insertCell().innerHTML = otosTalalatSzamok.length
    sor.insertCell().innerHTML = otosHuzottSzamok[0]
    sor.insertCell().innerHTML = otosHuzottSzamok[otosHuzottSzamok.length - 1]
    sor.insertCell().innerHTML = otosHuzottSzamok[otosHuzottSzamok.length - 1] - otosHuzottSzamok[0]
    otosHet++
}

document.querySelector("#otosGomb").addEventListener("click", OtosLottoEredmenyKiirato)

// Hatos lottó rész

function HatosTippeltSzamokBeolvasas() {
    let hatosTippeltSzamok = [];
    let hatosHibaUzenet = document.querySelector("#hatosHibaUzenet")
    for (i = 1; i < 7; i++) {
        let szam = document.querySelector(`#hatos${i}`).value; console.log(szam);
        if (!hatosTippeltSzamok.includes(szam) && szam >= 1 && szam <= 45) { hatosTippeltSzamok.push(szam); hatosHibaUzenet.innerHTML = "" }
        else {
            hatosHibaUzenet.innerHTML = "Hibás számo(ka)t addtál meg!";
            hatosHibaUzenet.classList.add("bg-danger");
            break
        }
    }

    if (hatosTippeltSzamok.length == 6) { return hatosTippeltSzamok.sort(function (a, b) { return a - b }) }
    else {
        hatosHibaUzenet.innerHTML = "Hibás számo(ka)t addtál meg!";
        hatosHibaUzenet.classList.add("bg-danger");
    }
}

function HatosLottoEredmenyKiirato() {
    let hatosTippeltSzamok = HatosTippeltSzamokBeolvasas();
    let hatosHuzottSzamok = UniverzalisLottoSzamHuzas(6, 45);
    let hatosTalalatSzamok = TalalatSzamlalo(hatosTippeltSzamok, hatosHuzottSzamok);
    document.querySelector("#hatosKihuzottSzamok").innerHTML = hatosHuzottSzamok;
    let table = document.querySelector("#hatosTabla");
    let sor = table.insertRow(1);
    sor.insertCell().innerHTML = hatosHet
    sor.insertCell().innerHTML = hatosTippeltSzamok
    sor.insertCell().innerHTML = hatosHuzottSzamok
    sor.insertCell().innerHTML = hatosTalalatSzamok.length
    sor.insertCell().innerHTML = hatosHuzottSzamok[0]
    sor.insertCell().innerHTML = hatosHuzottSzamok[hatosHuzottSzamok.length - 1]
    sor.insertCell().innerHTML = hatosHuzottSzamok[hatosHuzottSzamok.length - 1] - hatosHuzottSzamok[0]
    hatosHet++
}

document.querySelector("#hatosGomb").addEventListener("click", HatosLottoEredmenyKiirato)

// Skandináv lottó rész

function SkandinavTippeltSzamokBeolvasas() {
    let skandinavTippeltSzamok = [];
    let skandinavHibaUzenet = document.querySelector("#skandinavHibaUzenet")
    for (i = 1; i < 8; i++) {
        let szam = document.querySelector(`#skandinav${i}`).value;
        if (!skandinavTippeltSzamok.includes(szam) && szam >= 1 && szam <= 35) { skandinavTippeltSzamok.push(szam); skandinavHibaUzenet.innerHTML = "" }
        else {
            skandinavHibaUzenet.innerHTML = "Hibás számo(ka)t addtál meg!";
            skandinavHibaUzenet.classList.add("bg-danger");
            break
        }
    }

    if (skandinavTippeltSzamok.length == 7) { return skandinavTippeltSzamok.sort(function (a, b) { return a - b }) }
    else {
        skandinavHibaUzenet.innerHTML = "Hibás számo(ka)t addtál meg!";
        skandinavHibaUzenet.classList.add("bg-danger");
    }
}

function SkandinavLottoEredmenyKiirato() {
    let skandinavTippeltSzamok = SkandinavTippeltSzamokBeolvasas();
    let skandinavHuzottSzamok = UniverzalisLottoSzamHuzas(7, 35);
    let skandinavTalalatSzamok = TalalatSzamlalo(skandinavTippeltSzamok, skandinavHuzottSzamok);
    document.querySelector("#skandinavKihuzottSzamok").innerHTML = skandinavHuzottSzamok;
    let table = document.querySelector("#skandinavTabla");
    let sor = table.insertRow(1);
    sor.insertCell().innerHTML = skandinavHet
    sor.insertCell().innerHTML = skandinavTippeltSzamok
    sor.insertCell().innerHTML = skandinavHuzottSzamok
    sor.insertCell().innerHTML = skandinavTalalatSzamok.length
    sor.insertCell().innerHTML = skandinavHuzottSzamok[0]
    sor.insertCell().innerHTML = skandinavHuzottSzamok[skandinavHuzottSzamok.length - 1]
    sor.insertCell().innerHTML = skandinavHuzottSzamok[skandinavHuzottSzamok.length - 1] - skandinavHuzottSzamok[0]
    skandinavHet++
}

document.querySelector("#skandinavGomb").addEventListener("click", SkandinavLottoEredmenyKiirato)

