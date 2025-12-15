// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const linhas = input.split("\n");
const N = Number(linhas[0]);
const botoes = linhas[1].split(" ");

let A = 0;
let B = 0;

for (let i = 0; i < N; i = i + 1) {
    const botao = Number(botoes[i]);

    if (botao === 1) {
        if (A === 0) {
            A = 1;
        } else {
            A = 0;
        }
    } else {
        if (A === 0) {
            A = 1;
        } else {
            A = 0;
        }
        
        if (B === 0) {
            B = 1;
        } else {
            B = 0;
        }
    }
}

console.log(A);
console.log(B);
