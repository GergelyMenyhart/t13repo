const csapatAdat = [
    "Anglia;4;0;1662",
    "Argentína;10;0;1614",
    "Belgium;1;0;1752",
    "Brazília;3;-1;1719",
    "Chile;17;-3;1576",
    "Dánia;14;-1;1584",
    "Franciaország;2;1;1725",
    "Hollandia;13;3;1586",
    "Horvátország;8;-1;1625",
    "Kolumbia;9;-1;1622",
    "Mexikó;12;0;1603",
    "Németország;16;-1;1580",
    "Olaszország;15;1;1583",
    "Peru;19;0;1551",
    "Portugália;5;1;1643",
    "Spanyolország;7;2;1631",
    "Svájc;11;0;1604",
    "Svédország;18;0;1560",
    "Szenegál;20;0;1546",
    "Uruguay;6;-1;1639"
];

function adatAtalakito(adat) {
    let teamData = [];
    for (i = 0; i < adat.length; i++) {
        let csapatAdatSzetszedve = adat[i].split(";");
        teamData.push({
            nev: csapatAdatSzetszedve[0],
            helyezes: Number(csapatAdatSzetszedve[1]),
            valtozas: Number(csapatAdatSzetszedve[2]),
            pont: Number(csapatAdatSzetszedve[3])
        })
    }
    return teamData
}

let teamData = adatAtalakito(csapatAdat)

// 1.Adja meg aktuálisan hány csapat szerepel a ranglistán 

function CsapatSzamlalo(adat) {
    let sum = 0;
    for (i = 0; i < adat.length; i++) { if (adat[i].nev !== "") { sum++ } }
    return sum
}

document.write(`A csapatok száma: <b>${CsapatSzamlalo(teamData)}</b><hr>`);

// 2.Írja ki mennyi a résztvevő csapatok átlagpontszáma

function CsapatAtlag(adat) {
    let sum = 0;
    for (i = 0; i < adat.length; i++) { sum += adat[i].pont }
    return sum / adat.length
}

document.write(`A csapatok átlag pontszáma: <b>${CsapatAtlag(teamData)}</b><hr>`);

// 3.Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el! + Táblázatos forma

function CsapatAtlagFelett(adat) {
    let atlag = CsapatAtlag(teamData); let atlagFelett = []
    for (i = 0; i < adat.length; i++) { if (adat[i].pont > atlag) { atlagFelett.push(adat[i].nev) } }
    return atlagFelett
}

function listazo(adat, szoveg) {
    document.write(`${szoveg}<br><ul>`);
    for (i = 0; i < adat.length; i++) { document.write(`<li><b>${adat[i]}</b></li>`) }
    document.write(`</ul><hr>`)
}

document.write(`Csapatok az átlag pontszám felett: <b>${CsapatAtlagFelett(teamData)}</b><hr>`);

listazo(CsapatAtlagFelett(teamData), "Csapatok az átlag pontszám felett:");

// 4.Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma

function LegtobbetJavito(adat) {
    let maxJavitoIndex = 0;
    for (i = 1; i < adat.length; i++) { if (adat[i].valtozas > adat[maxJavitoIndex].valtozas) { maxJavitoIndex = i } }
    return document.write(`
    A legtöbbet javító ország: <b>${adat[maxJavitoIndex].helyezes}. helyezett 
    ${adat[maxJavitoIndex].nev} ${adat[maxJavitoIndex].pont} ponttal</b><hr>`)
}

LegtobbetJavito(teamData)

// 5.Határozza meg a adatok közöt megtalálható-e Magyarország csapata! Kereső a listában

function Hungary(adat) {
    let include = false;
    for (i = 1; i < adat.length; i++) { if (adat[i].nev == "Magyarorszag") { include = true } }
    return document.write(`Magyarország a listában van? ${include}<hr>`)
}

Hungary(teamData)

function orszagKereso(adat, orszag) {
    let include = false;
    for (i = 1; i < adat.length; i++) { if (adat[i].nev == orszag) { include = true } }
    return document.write(`${orszag} a listában van? ${include}<hr>`)
}

orszagKereso(teamData, "Uruguay")

// Készítsen  statisztikát  a  helyezések  változása  (Valtozas)  alapján  csoportosítva  a  csapatok számáról 

function valtozasCsoportositas(adat) {
    let csokken = []; let stagnal = []; let novekszik = [];
    for (i = 1; i < adat.length; i++) {
        if (adat[i].valtozas < 0) { csokken.push(adat[i].nev) }
        else if (adat[i].valtozas == 0) { stagnal.push(adat[i].nev) }
        else { novekszik.push(adat[i].nev) }
    }
    return listazo(csokken, "Csapatok, melyek visszzaestek a ranglistán:"), listazo(stagnal, "Csapatok, melyek nem változtak a ranglistán:"), listazo(novekszik, "Csapatok, melyek emelkedtek a ranglistán:")
}

valtozasCsoportositas(teamData)

