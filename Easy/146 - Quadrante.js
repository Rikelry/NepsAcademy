// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const linhas = input.split("\n");
const X = Number(linhas[0]);
const Y = Number(linhas[1]);

if (X === 0 || Y === 0) {
    console.log("eixos");
} else if (X > 0 && Y > 0) {
    console.log("Q1");
} else if (X < 0 && Y > 0) {
    console.log("Q2");
} else if (X < 0 && Y < 0) {
    console.log("Q3");
} else if (X > 0 && Y < 0) {
    console.log("Q4");
}
