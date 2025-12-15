// A variável input contém a entrada descrita no exercício
const fs = require("fs");
const input = fs.readFileSync(0, "utf8");
const N1 = parseInt(input.split("\n")[0])
const N2 = parseInt(input.split("\n")[1])

// Seu código vai aqui
let mediaPonderada = ((N1*2)+(N2*3))/(2+3);

if (mediaPonderada >= 7) {
    console.log("Aprovado");
} else if (mediaPonderada < 3) {
    console.log("Reprovado");
} else {
    console.log("Final");
}
