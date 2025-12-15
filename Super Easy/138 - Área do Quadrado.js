// Lendo a entrada do exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

let L = parseInt(input.split("\n")[0]);
// Seu código vai aqui
let area = L * L;

console.log(area);
