let a = Number(prompt(`Add meg a értékét`));
let b = Number(prompt(`Add meg b értékét`));
let c = Number(prompt(`Add meg c értékét`));
if (a == 0) { document.write(`Az egyenlet NEM másodfokú`) }
else {
    let d = (b * b) - (4 * a * c);
    if (d < 0) { document.write(`Az egyenletnek NINCS megoldása`) }
    else {
        if (d == 0) { document.write(`Az egyenletnek egy megoldása van: x<sub>1</sub> = ${-b / (2 * a)} `) }
        else { document.write(`Az egyenletnek két megoldása van:<br> x<sub>1</sub> = ${(-b + Math.sqrt(d)) / (2 * a)} <br> x<sub>2</sub> = ${(-b - Math.sqrt(d)) / (2 * a)} `) }
    }
}