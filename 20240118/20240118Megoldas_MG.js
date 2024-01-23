// Prím eljárás
function PrimEljaras() {
    number = Number(prompt(`Adj meg egy egész számot:`));
    let div = false
    for (let i = 2; i < number; i++) { if (number % i == 0) { div = true } }
    if (div == true) { document.write(`A ${number} szám NEM PRÍM<hr>`) }
    else { document.write(`A ${number} szám PRÍM<hr>`) }
}

//PrimEljaras()

// Koordináta eljárás
function Koordinata(x, y) {
    if (x == 0 && y == 0) { return `A pont az ORIGO` }
    if (x == 0 && y !== 0) { return `A pont az Y tengelyen van` }
    if (x !== 0 && y == 0) { return `A pont az X tengelyen van` }
    if (x > 0 && y > 0) { return `A pont az I. síknegyedben van` }
    if (x < 0 && y > 0) { return `A pont az II. síknegyedben van` }
    if (x < 0 && y < 0) { return `A pont az III. síknegyedben van` }
    if (x > 0 && y < 0) { return `A pont az IV. síknegyedben van` }
}
document.write(Koordinata(0, -5) + "<hr>")

// Melyik a nagyobb függvény
function MelyikANagyobb(szamEgy, szamKetto, szamHarom) {
    if (szamEgy > szamKetto && szamEgy > szamHarom) { return `A legnagyobb szám: ${szamEgy}` }
    if (szamEgy < szamKetto && szamKetto > szamHarom) { return `A legnagyobb szám: ${szamKetto}` }
    if (szamEgy < szamHarom && szamKetto < szamHarom) { return `A legnagyobb szám: ${szamHarom}` }
}
document.write(MelyikANagyobb(99, -9, 0) + "<hr>");

// Szorgalom Szöveges Értékelés eljárás
function SzorgalomSzovegesErtekeles(jegy) {
    if (jegy == 2) { return `Szorgalma: HANYAG` }
    else if (jegy == 3) { return `Szorgalma: VÁLTOZÓ` }
    else if (jegy == 4) { return `Szorgalma: JÓ` }
    else if (jegy == 5) { return `Szorgalma: PÉLDÁS` }
    else { return `Helytelen adat` }
}
document.write(SzorgalomSzovegesErtekeles(2) + "<hr>");

// 18Plusz függvény
function TizennyolcPlusz(kor) {
    if (kor < 18) { return false } else { return true }
}
document.write(TizennyolcPlusz(2) + "<hr>");

// LNKO függvény
function LNKO(szamEgy, szamKetto) {
    lower = szamEgy; upper = szamKetto; if (szamEgy > szamKetto) { lower = szamKetto; upper = szamEgy }
    LNKO = 1;
    for (let i = 2; i <= lower; i++) { if (lower % i == 0 && upper % i == 0) { LNKO = i } }
    return LNKO
}
document.write(LNKO(12240, 3345) + "<hr>");

// Számtani Sorozat Generátor függvény
function SzamtaniSorozatGenerator(elsoElem, kulonbseg, elemszam) {
    let szamtaniSorozat = [];
    for (let i = 0; i < elemszam; i++) { szamtaniSorozat.push(elsoElem + (kulonbseg * i)) }
    return szamtaniSorozat
}
document.write(SzamtaniSorozatGenerator(7, 10, 10) + "<hr>")

// Prim függvény
function primfuggveny(vizsgaltSzam) {
    let primfuggveny = true;
    for (let i = 2; i <= Math.sqrt(vizsgaltSzam); i++) { if (vizsgaltSzam % i == 0) { primfuggveny = false } }
    return primfuggveny
}
document.write(primfuggveny(97) + "<hr>")

// Páros szám generátor intervallumban
function parosGenerator(alsoHatar, felsoHatar) {
    let paros = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
    if (paros % 2 == 1 && paros < felsoHatar) { paros++ }
    if (paros % 2 !== 0 && paros == felsoHatar) { paros-- }
    return paros
}
document.write(parosGenerator(6, 8) + "<hr>")

// 2 hatványai
function kettoHatvanyai(elemSzam) {
    let kettoHatvanyai = [];
    for (let i = 0; i < elemSzam; i++) { kettoHatvanyai.push(2 ** i) }
    return kettoHatvanyai
}
document.write(`A 2 hatványai: ${kettoHatvanyai(15)}` + "<hr>");

// Szerkeszthető-e háromszög
function szerkeszthetoHaromszog(elsoOldal, masodikOldal, harmadikOldal) {
    let szerkeszthetoHaromszog = false;
    if (elsoOldal < masodikOldal + harmadikOldal && masodikOldal < elsoOldal + harmadikOldal && harmadikOldal < elsoOldal + masodikOldal) { szerkeszthetoHaromszog = true }
    return szerkeszthetoHaromszog
}
document.write(szerkeszthetoHaromszog(7, 5, 1) + "<hr>");

// Négyzet Kerülete és Területe
function eredmenyKiirato() {
    let aOldal = 5;
    function negyzetKerulet(aOldal) { return 4 * aOldal }
    function negyzetTerulet(aOldal) { return aOldal * aOldal }
    return document.write(`Az ${aOldal} oldalú négyzet Kerülete: ${negyzetKerulet(aOldal)}, Területe: ${negyzetTerulet(aOldal)}<hr>`)
}
eredmenyKiirato()

// LNKO LKKT v2

function LNKOv2(number1, number2) {
    number1prim = []; number2prim = []; LNKOv2prim = [1]; number1w = number1; number2w = number2;
    number1primw = []; number2primw = []; LNKOv2 = 1;
    for (let i = 2; i <= number1w; i++) { if (number1w % i == 0) { number1prim.push(i); number1primw.push(i); number1w /= i; i = 1 } }
    for (let i = 2; i <= number2w; i++) { if (number2w % i == 0) { number2prim.push(i); number2primw.push(i); number2w /= i; i = 1 } }
    for (let i = 0; i < number1primw.length; i++) {
        for (let j = 0; j < number2primw.length; j++) { if (number1primw[i] == number2primw[j]) { LNKOv2prim.push(number1primw[i]); number1primw.splice(i, 1); number2primw.splice(j, 1); j--; i--; break } }
    }
    let LKKTv2prim = []; let LKKTv2 = 1;
    for (let i = 0; i < LNKOv2prim.length; i++) { LKKTv2prim.push(LNKOv2prim[i]) }
    for (let i = 0; i < number1primw.length; i++) { LKKTv2prim.push(number1primw[i]) }
    for (let i = 0; i < number2primw.length; i++) { LKKTv2prim.push(number2primw[i]) }
    for (let i = 0; i < LNKOv2prim.length; i++) { LNKOv2 = LNKOv2 * LNKOv2prim[i] }
    for (let i = 0; i < LKKTv2prim.length; i++) { LKKTv2 = LKKTv2 * LKKTv2prim[i] }

    return document.write(`A <b>${number1}</b> (=${number1prim.join(`*`)}) és <b>${number2}</b> (=${number2prim.join("*")}) számok<br>Legnagyobb Közös Osztója: ${LNKOv2prim.join("*")} = <b>${LNKOv2}</b><br>Legkisebb Közös Töbszöröse: ${LKKTv2prim.join("*")} = <b>${LKKTv2}</b><hr>`)
}
LNKOv2(4357367300, 345235735)
