// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const X = Number(input);
let i = 1;
let resposta = "";

while (i <= X) {
    if (X % i === 0) {
        resposta = resposta + i + " ";
    }
    i = i + 1;
}

console.log(resposta.trim());
