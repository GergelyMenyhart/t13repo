//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

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

function DataTransformator(array) {
    let teamData = [];
    for (i = 0; i < array.length; i++) {
        let separateData = array[i].split(";")
        teamData.push({
            country: separateData[0],
            place: Number(separateData[1]),
            change: Number(separateData[2]),
            point: Number(separateData[3])
        })
    }
    return teamData
}

let teamData = DataTransformator(csapatAdat)

console.log(teamData)

// 1 Feladat Adja meg aktuálisan hány csapat szerepel a ranglistán

function TeamNumber(array) {
    return array.length
}

function TeamNumberWriteOut() {
    document.querySelector("#answer1").innerHTML = `A ranglistán ${TeamNumber(teamData)} csapat szerepel`
}

document.querySelector("#button1").addEventListener("click", TeamNumberWriteOut);

// 2 Feladat Írja ki mennyi a résztvevő csapatok átlagpontszáma

function TeamAveragePont(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) { sum += array[i].point }
    return sum / array.length
}

function TeamAveragePontWriteOut() {
    document.querySelector("#answer2").innerHTML = `A résztvevő csapatok átlagpontszáma:  ${TeamAveragePont(teamData)} pont`
}

document.querySelector("#button2").addEventListener("click", TeamAveragePontWriteOut);

// 3 Feladat Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!

function TeamAboveAverage(array) {
    let average = TeamAveragePont(teamData);
    let teamAboveAverage = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].point > average) {
            teamAboveAverage.push({
                country: array[i].country,
                averageDif: array[i].point - average
            })
        }
    }
    return teamAboveAverage
}

function TeamAboveAverageWriteOut() {
    let teamAboveAverage = TeamAboveAverage(teamData);
    let teamAboveAverageCountry = [];
    let teamAboveAverageDifference = [];
    for (i = 0; i < teamAboveAverage.length; i++) { teamAboveAverageCountry.push(teamAboveAverage[i].country) }
    for (i = 0; i < teamAboveAverage.length; i++) { teamAboveAverageDifference.push(teamAboveAverage[i].averageDif) }
    document.querySelector("#answer3").innerHTML = `Csapatok, amelyek átlagpontszám felettiek:<br>  ${teamAboveAverageCountry} (${teamAboveAverageDifference})`
}

document.querySelector("#button3").addEventListener("click", TeamAboveAverageWriteOut);

// 4. Feladat Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma

function TeamMaxChange(array) {
    let maxChangeIndex = 0;
    for (i = 1; i < array.length; i++) {
        if (array[i].change > array[maxChangeIndex].change) { maxChangeIndex = i }
    }
    return array[maxChangeIndex]
}
console.log(TeamMaxChange(teamData))

function TeamMaxChangeWriteOut() {
    let maxObject = TeamMaxChange(teamData);
    document.querySelector("#answer4").innerHTML = `A legtöbbet javító csapat: ${maxObject.place}. helyezett ${maxObject.country}, ${maxObject.point} pontszámmal`
}

document.querySelector("#button4").addEventListener("click", TeamMaxChangeWriteOut);

// 5. Feladat Határozza meg a adatok közöt megtalálható-e Magyarország csapata!

function TeamIncludeCountry(array) {
    let whichCountry = document.querySelector("#input5").value;
    let iter = false
    for (i = 0; i < array.length; i++) {
        if (array[i].country == whichCountry) { iter = true }
    }
    return iter
}

function TeamIncludeCountryWriteOut() {
    let iter = TeamIncludeCountry(teamData);
    let whichCountry = document.querySelector("#input5").value;
    if (iter == true) { document.querySelector("#answer5").innerHTML = `${whichCountry} szerepel a listában` }
    else { document.querySelector("#answer5").innerHTML = `${whichCountry} NEM szerepel a listában` }
}

document.querySelector("#button5").addEventListener("click", TeamIncludeCountryWriteOut);


// 6. Feladat Készítsen  sta�sz�kát  a  helyezések  változása  (Valtozas)  alapján  csoportosítva  a  csapatok számáról  a  minta  szerint!  Csak  azok  a  helyezésváltozások  jelenjenek  meg  a  képernyőn, amelyek esetében a csapatok száma több mint egy volt!

function ChangeType(array) {
    let changeType = [];
    for (i = 0; i < array.length; i++) {
        let iter = false;
        for (j = 0; j < changeType.length; j++) {
            if (array[i].change == changeType[j]) { iter = true }
        }
        if (iter == false) { changeType.push(array[i].change) }
    }
    return changeType.sort()
}
console.log(ChangeType(teamData));

function ChangeTypeSum(array) {
    let changeType = ChangeType(teamData);
    let changeTypeSum = [];
    for (i = 0; i < changeType.length; i++) { changeTypeSum.push(0) }
    for (i = 0; i < changeType.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (changeType[i] == array[j].change) { changeTypeSum[i]++ }
        }
    }
    return changeTypeSum
}
console.log(ChangeTypeSum(teamData));

function ChangeTypeCountry(array) {
    let changeType = ChangeType(teamData);
    let changeTypeCountry = [];
    for (i = 0; i < changeType.length; i++) { changeTypeCountry.push([]) }
    for (i = 0; i < changeType.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (changeType[i] == array[j].change) { changeTypeCountry[i].push(array[j].country) }
        }
    }
    return changeTypeCountry
}
console.log(ChangeTypeCountry(teamData));

function TableWriteOut() {
    let changeType = ChangeType(teamData);
    let changeTypeSum = ChangeTypeSum(teamData);
    let changeTypeCountry = ChangeTypeCountry(teamData);
    let table = document.querySelector("#answer6");
    for (i = 0; i < changeType.length; i++) {
        if (changeTypeSum[i] > 1) {
            let row = table.insertRow(1);
            let first = row.insertCell(0);
            let second = row.insertCell(1);
            let third = row.insertCell(2);
            first.innerHTML = changeType[i];
            second.innerHTML = changeTypeSum[i];
            third.innerHTML = changeTypeCountry[i];
        }
    }
}
console.log(TableWriteOut())

document.querySelector("#button6").addEventListener("click", TableWriteOut);
