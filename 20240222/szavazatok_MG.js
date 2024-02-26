const szavazatok = [
    { korzet: 5, szavazat: 19, nev: "Ablak Antal", part: "-" },
    { korzet: 1, szavazat: 120, nev: "Alma Dalma", part: "GYEP" },
    { korzet: 7, szavazat: 162, nev: "Bab Zsuzsanna", part: "ZEP" },
    { korzet: 2, szavazat: 59, nev: "Barack Barna", part: "GYEP" },
    { korzet: 6, szavazat: 73, nev: "Birs Helga", part: "GYEP" },
    { korzet: 1, szavazat: 154, nev: "Bors Botond", part: "HEP" },
    { korzet: 5, szavazat: 188, nev: "Brokkoli Gyula", part: "ZEP" },
    { korzet: 6, szavazat: 29, nev: "Ceruza Zsombor", part: "-" },
    { korzet: 4, szavazat: 143, nev: "Fasirt Ferenc", part: "HEP" },
    { korzet: 8, szavazat: 157, nev: "Gomba Gitta", part: "TISZ" },
    { korzet: 3, szavazat: 13, nev: "Halmi Helga", part: "-" },
    { korzet: 2, szavazat: 66, nev: "Hold Ferenc", part: "-" },
    { korzet: 7, szavazat: 34, nev: "Hurka Herold", part: "HEP" },
    { korzet: 5, szavazat: 288, nev: "Joghurt Jakab", part: "TISZ" },
    { korzet: 4, szavazat: 77, nev: "Kajszi Kolos", part: "GYEP" },
    { korzet: 2, szavazat: 187, nev: "Kapor Karola", part: "ZEP" },
    { korzet: 6, szavazat: 13, nev: "Karfiol Ede", part: "ZEP" },
    { korzet: 6, szavazat: 187, nev: "Kefir Ilona", part: "TISZ" },
    { korzet: 7, szavazat: 130, nev: "Kupa Huba", part: "-" },
    { korzet: 8, szavazat: 98, nev: "Languszta Auguszta", part: "-" },
    { korzet: 1, szavazat: 34, nev: "Lila Lilla", part: "-" },
    { korzet: 1, szavazat: 56, nev: "Medve Rudolf", part: "-" },
    { korzet: 5, szavazat: 67, nev: "Meggy Csilla", part: "GYEP" },
    { korzet: 3, szavazat: 45, nev: "Moly Piroska", part: "-" },
    { korzet: 4, szavazat: 221, nev: "Monitor Tibor", part: "-" },
    { korzet: 8, szavazat: 288, nev: "Narancs Edmond", part: "GYEP" },
    { korzet: 2, szavazat: 220, nev: "Oldalas Olga", part: "HEP" },
    { korzet: 3, szavazat: 185, nev: "Pacal Kata", part: "HEP" },
    { korzet: 1, szavazat: 199, nev: "Petrezselyem Petra", part: "ZEP" },
    { korzet: 8, szavazat: 77, nev: "Pokol Vidor", part: "-" },
    { korzet: 8, szavazat: 67, nev: "Ragu Ida", part: "HEP" },
    { korzet: 3, szavazat: 156, nev: "Retek Etelka", part: "ZEP" },
    { korzet: 7, szavazat: 129, nev: "Sajt Hajnalka", part: "TISZ" },
    { korzet: 4, szavazat: 38, nev: "Simon Simon", part: "-" },
    { korzet: 3, szavazat: 87, nev: "Szilva Szilvia", part: "GYEP" },
    { korzet: 3, szavazat: 187, nev: "Tejes Attila", part: "TISZ" },
    { korzet: 2, szavazat: 65, nev: "Tejfel Edit", part: "TISZ" },
    { korzet: 4, szavazat: 39, nev: "Uborka Ubul", part: "ZEP" },
    { korzet: 6, szavazat: 288, nev: "Vadas Marcell", part: "HEP" },
    { korzet: 5, szavazat: 68, nev: "Vagdalt Edit", part: "HEP" },
];

// 1 Feladat: Hány képviselőjelölt indult a helyhatósági választáson?

function KepvielokSzama() {
    return szavazatok.length
}

function KepvielokSzamaKiiarto() {
    let valasz = document.querySelector("#answer1");
    if (valasz.style.display == "none") { valasz.innerHTML = `A helyhatósági választáson ${KepvielokSzama()} jelölt indult.`; valasz.style.display = "block" }
    else { valasz.style.display = "none" }
}

document.querySelector("#button1").addEventListener("click", KepvielokSzamaKiiarto)

// 2 Feladat: Készítsen egy legördülő menüt, amiben kiválaszthatunkegy pártot, vagy a független jelzőt, és a választás után lekérdezhetjük, az adott párt/függetlenként hány képviselőt indított a választáson


function Kiolvaso(id) {
    return document.querySelector(`#${id}`).value
}
//console.log(Kiolvaso("party"));

function PartNev(rovidites) {
    if (rovidites == "GYEP") { return "Gyümölcsevők Pártja" }
    else if (rovidites == "HEP") { return "Húsevők Pártja" }
    else if (rovidites == "ZEP") { return "Zöldségevők Pártja" }
    else if (rovidites == "TISZ") { return "Tejivók Szövetsége" }
    else { return "Független jelöltek" }
}

function PartKepviselok(array) {
    let party = Kiolvaso("party");
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i].part == party) { sum++ }
    }
    return sum
}

function PartKepviselokKiiratas() {
    let valasz = document.querySelector("#answer2");
    if (valasz.style.display == "none") { valasz.innerHTML = `A ${PartNev(Kiolvaso("party"))} képviselőinek száma: ${PartKepviselok(szavazatok)}`; valasz.style.display = "block" }
    else { valasz.style.display = "none" }
}

document.querySelector("#button2").addEventListener("click", PartKepviselokKiiratas);

// 3 Feladat:  Kérje be egy képviselőjelölt vezetéknevét és utónevét, majd írja ki a képernyőre, hogyaz illető hány szavazatot kapott!

function KepviseloInfo(array) {
    let kepviselo = Kiolvaso("kepviselo");
    for (i = 0; i < array.length; i++) {
        if (array[i].nev.includes(kepviselo) == true) {
            return i//array[i].szavazat
        }
    }
    return -1
}

function KepviseloInfoKiirato() {
    //let kepviselo = Kiolvaso("kepviselo");
    let index = KepviseloInfo(szavazatok);
    let valasz = document.querySelector("#answer3");
    if (valasz.style.display == "none") {
        if (index == -1) { valasz.innerHTML = `Ilyen nevű képviselőjelölt nem szerepel a nyilvántartásban!` }
        else { valasz.innerHTML = `${szavazatok[index].nev} szavazatainak száma: ${szavazatok[index].szavazat}` }
        valasz.style.display = "block"
    }
    else { valasz.style.display = "none" }
}

document.querySelector("#button3").addEventListener("click", KepviseloInfoKiirato)

// 4. Feladat: Határozza meg, hányan adták le szavazatukat, és mennyi volt a részvételi arány!(A részvételi arány azt adja meg, hogy a jogosultak hány százaléka    vett    részta  szavazáson.)  A  részvételi  arányt  két  tizedesjegy pontossággal, százalékos formában írjaki a képernyőre!

function SzavazokSum(array) {
    let szavazokSum = 0;
    for (i = 0; i < array.length; i++) { szavazokSum += array[i].szavazat }
    return szavazokSum;
}

function SzavazatokAranya() {
    let jogosultak = 12345;
    let szavazokSum = SzavazokSum(szavazatok);
    let valasz = document.querySelector("#answer4");
    if (valasz.style.display == "none") {
        valasz.innerHTML = `A választáson ${szavazokSum} állampolgár, a jogosultak ${Math.round(szavazokSum / jogosultak * 10000) / 100}%-a vett részt.`;
        valasz.style.display = "block"
    }
    else { valasz.style.display = "none" }
}

document.querySelector("#button4").addEventListener("click", SzavazatokAranya)

// 5. Feladat [SzavazatokMennyisege] Határozza  meg  és  írassa  ki  táblázatos  formában, Bootstrap segítségével, az adott pártokra leadott szavazatok mennyiségét, a táblázatban  szerepel jen a  párt  neve  és  a  szavazatok  mennyisége, amit a 8 körzeten belül összesen szereztek.

function PartLista(array) {
    let partLista = [];
    for (i = 0; i < array.length; i++) {
        let iter = false;
        for (j = 0; j < partLista.length; j++) {
            if (array[i].part == partLista[j]) { iter = true }
        }
        if (iter == false) { partLista.push(array[i].part) }
    }
    return partLista.sort()
}

function PartListaSzavazatok(array) {
    let partListaSzavazatok = [];
    let partLista = PartLista(szavazatok);
    for (i = 0; i < partLista.length; i++) {
        let sum = 0;
        for (j = 0; j < array.length; j++) {
            if (partLista[i] == array[j].part) { sum += array[j].szavazat }
        }
        partListaSzavazatok.push(sum)
    }
    return partListaSzavazatok
}

function SzavazatokMennyisege() {
    let partLista = PartLista(szavazatok);
    let partListaSzavazatok = PartListaSzavazatok(szavazatok);
    let table = document.querySelector("#table");
    for (i = 0; i < partLista.length; i++) {
        let row = table.insertRow(1);
        row.insertCell(0).innerHTML = PartNev(partLista[i])
        row.insertCell(1).innerHTML = partListaSzavazatok[i]
    }
}

SzavazatokMennyisege()

function TablazatMutat() {
    let valasz = document.querySelector("#answer5");
    if (valasz.style.display == "none") { valasz.style.display = "block" }
    else { valasz.style.display = "none" }
}

document.querySelector("#button5").addEventListener("click", TablazatMutat)

// 6. Feladat: [LegtobbSzavazat]Melyik jelölt kapta a legtöbb szavazatot? Jelenítse meg a képernyőn a képviselő vezeték  és utónevét, valamint az őt támogató párt rövidítését, vagyazt, hogyfüggetlen! Ha többilyen képviselő is van, akkor mindegyik adatai jelenjenek meg!


function LegtobbSzavazat(array) {
    let maxIndex = 0;
    let legtobbSzavazatIndex = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].szavazat > array[maxIndex].szavazat) { maxIndex = i }
    }
    for (i = 0; i < array.length; i++) {
        if (array[i].szavazat == array[maxIndex].szavazat) {
            legtobbSzavazatIndex.push(i)
        }
    }
    return legtobbSzavazatIndex
}

function LegtobbSzavazatKiirato() {
    let legtobbSzavazatIndex = LegtobbSzavazat(szavazatok);
    let valasz = "A legtöbb szavazatot kapott jelölt(ek):<br>";
    let mutat = document.querySelector("#answer6");
    for (i = 0; i < legtobbSzavazatIndex.length; i++) {
        valasz += `${szavazatok[legtobbSzavazatIndex[i]].nev} ${PartNev(szavazatok[legtobbSzavazatIndex[i]].part)} ${szavazatok[legtobbSzavazatIndex[i]].szavazat} szavazattal<br>`
    }
    if (mutat.style.display == "none") { mutat.innerHTML = valasz; mutat.style.display = "block" }
    else { mutat.style.display = "none" }
}

document.querySelector("#button6").addEventListener("click", LegtobbSzavazatKiirato)

// 7.Feladat: [Nyertesek]Határozza meg, hogy az egyes választókerületekben kik lettek a képviselők! Írja ki a választókerület sorszámát, a győztes vezeték-   és utónevét,valamint  az  őt  támogató párt   rövidítését,   vagy   azt,   hogy   független,  és  a megszerzett szavazatok     számát,táblázatos formában!  Az  adatok  a választókerületek száma szerintisorrendben jelenjenek meg! Minden sorba egy képviselő adatai kerüljenek!

function ValasztoKeruletek(array) {
    let valasztoKeruletek = [];
    for (i = 0; i < array.length; i++) {
        let iter = false;
        for (j = 0; j < valasztoKeruletek.length; j++) {
            if (array[i].korzet == valasztoKeruletek[j]) { iter = true }
        }
        if (iter == false) { valasztoKeruletek.push(array[i].korzet) }
    }
    return valasztoKeruletek.sort().reverse()
}

function Nyertesek(array) {
    let keruletek = ValasztoKeruletek(szavazatok);
    let nyertesekIndex = [];
    for (i = 0; i < keruletek.length; i++) {
        let maxIndex = 0
        for (j = 0; j < array.length; j++) {
            if (keruletek[i] == array[j].korzet && array[j].szavazat > array[maxIndex].szavazat) {
                maxIndex = j
            }
        }
        nyertesekIndex.push(maxIndex)
    }
    return nyertesekIndex
}

function NyertesekKiiratas() {
    let nyertesekIndex = Nyertesek(szavazatok);
    let table = document.querySelector("#table1");
    for (i = 0; i < nyertesekIndex.length; i++) {
        let row = table.insertRow(1);
        let j = nyertesekIndex[i];
        row.insertCell(0).innerHTML = szavazatok[j].korzet;
        row.insertCell(1).innerHTML = szavazatok[j].nev;
        row.insertCell(2).innerHTML = PartNev(szavazatok[j].part);
        row.insertCell(3).innerHTML = szavazatok[j].szavazat;
    }

}

NyertesekKiiratas()

function NyertesekKiiratasMutat() {
    let valasz = document.querySelector("#answer7");
    if (valasz.style.display == "none") { valasz.style.display = "block" }
    else { valasz.style.display = "none" }
}

document.querySelector("#button7").addEventListener("click", NyertesekKiiratasMutat)
