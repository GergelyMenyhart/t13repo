// 1 feladat:
document.write("Menyhárt Gergely <br>");
document.write("#Team 13 <br>");
document.write("HTML: 85 <br>");
document.write("CSS: 80 <br>");
document.write("Javascript: 90 <br>");

// 2 feladat:
let alap = Number(prompt("Add meg az alapot"));
let kitevo = Number(prompt("Add meg a kitevőt"));
let hatvany = alap ** kitevo;
document.write(`${alap}<sup>${kitevo}</sup> = ${hatvany} `);

// 3 feladat:
let alsohatar = Number(prompt("Add meg az alsó határt"));
let felsohatar = Number(prompt("Add meg az felső határt"));
let intervallum = felsohatar - alsohatar;
if (alsohatar % 2 == 0) { for (alsohatar; alsohatar <= felsohatar; alsohatar = alsohatar + 2) { document.write(alsohatar + " ") } }
if (alsohatar % 2 !== 0) { alsohatar = alsohatar + 1; for (alsohatar; alsohatar <= felsohatar; alsohatar = alsohatar + 2) { document.write(alsohatar + " ") } }

// 4 feladat:
let eletkor = Number(prompt("Add meg az életkorodat"));
if (eletkor < 0 || eletkor > 120) { document.write('Az életkor nem helyes') }
else if (eletkor >= 0 && eletkor <= 6) { document.write(`Kisgyermekkor`) }
else if (eletkor > 6 && eletkor <= 12) { document.write(`Gyermekkor`) }
else if (eletkor > 12 && eletkor <= 16) { document.write(`Serdülőkor`) }
else if (eletkor > 16 && eletkor < 20) { document.write(`Ifjúkor`) }
else if (eletkor > 20 && eletkor <= 30) { document.write(`Fiatal felnőtt kor`) }
else if (eletkor > 30 && eletkor <= 60) { document.write(`Felnőtt kor`) }
else if (eletkor > 60) { document.write(`Aggkor`) }

// 5 feladat:
let osztando = Number(prompt(`Add meg az oszandót`));
let oszto = Number(prompt(`Add meg az osztót`));
if (osztando % oszto == 0) { document.write(`Az ${oszto} osztja az ${osztando}-t`) }
else { document.write(`Az ${oszto} NEM osztja az ${osztando}-t`) }

// 6 feladat:
for (let i = 1; i <= 10; i++) { document.write(`${i ** 2} `) }
