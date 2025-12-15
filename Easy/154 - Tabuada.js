// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const X = Number(input);

// Seu código vai aqui
function tabuada(multiplicando) {
  for (let i = 1; i <= 10; i++) {
    let produto = multiplicando * i;
    console.log(`${multiplicando} * ${i} = ${produto}`);
  }
}

tabuada(X);