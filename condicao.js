console.log(`Trabalhando com condicionais`);
const listasDeDestinos = new Array(
    `BH`,
    `RJ`,
    `SP`,
);

listasDeDestinos.push(`PR`, `RS`);  //push adiciona uma nova opição de destinos 
const idadeComprador = 21;
const estaAcompanhada = false;
const temPassagemComprada = false;

console.log("Destinos possíveis");
console.log(listasDeDestinos);

if (
    idadeComprador >= 18 || estaAcompanhada == true) {  // ou and = || 
    console.log("Comprador maior de idade");
    console.log("Boa Viagem!!!");
    listasDeDestinos.splice(2, 1); //removendo item
} else if (estaAcompanhada == true) {
    console.log("Comprador está acompanhado");
    listasDeDestinos.splice(2, 1);
} else {
    console.log("Não é maior de Idade e não posso vender");
}

console.log("Verificação de Embarque: \n\n");
if (idadeComprador > 18 && temPassagemComprada) {
    console.log("Boa Viagem!!");
} else {
    console.log("Você não pode embarcar");
}




console.log(listasDeDestinos);
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador ==18);

