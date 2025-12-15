// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");

// Seu código vai aqui
const linhas = input.split("\n")
let N = Number(linhas[0])
let soma = 0

for (let i = 1; i <= N; i++) {
  soma += Number(linhas[i])
  if (soma >= 1000000) {
    console.log(i)
    break
  }
}
