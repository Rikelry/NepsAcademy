// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const R = Number(input);
const pi = 3.1416;
const area = pi * R * R;

console.log(area.toFixed(2));
