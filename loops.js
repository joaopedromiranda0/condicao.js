console.log(`\n Trabalhando com condicionais`);
console.log(`\n COMPRAS DE PACOTES DE VIAGEM`);
const listasDeDestinos = new Array(
    `BH`,
    `RJ`,
    `SP`,
);

listasDeDestinos.push(`PR`, `RS`);  

const idadeComprador = 14 ;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "BH";

console.log("\n Destinos possíveis");
console.log(listasDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 5 ){
    if(listasDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }else{
        console.log("Destino não existe");
    }
    contador += 1 ; 
}

console.log("Destino existe: " , destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa Viagem!!");
}else{
    console.log("Desculpe! Tivemos um erro");
}

for(let cont = 0; cont < 5 ; cont += 1 )   {
    if(listasDeDestinos[contador] == destino){
        destinoExiste = true;
    }
}
