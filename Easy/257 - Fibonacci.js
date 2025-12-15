// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const N = parseInt(input.trim());

let a = 1, b = 1;
for (let i = 2; i <= N; i++) {
  [a, b] = [b, a + b];
}

console.log(b);
