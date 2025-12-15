// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const linhas = input.split("\n");
const N = Number(linhas[0]);
let coposQuebrados = 0;

let i = 1;
while (i <= N) {
    const partes = linhas[i].split(" ");
    const L = Number(partes[0]);
    const C = Number(partes[1]);

    if (L > C) {
        coposQuebrados = coposQuebrados + C;
    }

    i = i + 1;
}

console.log(coposQuebrados);
