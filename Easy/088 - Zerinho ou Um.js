// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const partes = input.split(" ");
const A = Number(partes[0]);
const B = Number(partes[1]);
const C = Number(partes[2]);

if (A !== B && A !== C) {
    console.log("A");
} else if (B !== A && B !== C) {
    console.log("B");
} else if (C !== A && C !== B) {
    console.log("C");
} else {
    console.log("*");
}
