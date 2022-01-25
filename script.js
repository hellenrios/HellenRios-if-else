//1
let age = 23

if(age > 18){
    console.log("Você tem 18 anos e é maior de idade!")
} else {
    console.log("Você ainda não tem mais de 18 anos.")
}

//2

let human = true

if (age > 18 && human == true){
    console.log("Olá humano, você é maior de idade!")
} else {
    console.log("Os requisitos não foram preenchidos.")
}

//3

let anniversary = "novembro"

if ( anniversary === "janeiro" || anniversary === "dezembro"){
    console.log("Você faz aniversário em Janeiro ou Dezembro!")
} else {
    console.log(`Você faz aniversário no mês de ${anniversary}.`)
}

// EXERCÍCIOS BÔNUS
//4

let nome = "Hellen"

if (nome[0] === "R" || nome[0] === "r"){
    console.log("Seu nome começa com a letra R.")
} else {
    console.log("Seu nome não começa com a letra R.")
}

//5 

let surname = "Rios"

if (surname.length > 6 || surname[0] === "E"){
    console.log("Seu sobrenome possui mais de 6 letras ou começa com a letra E.")
} else {
    console.log("Seu sobrenome não possui mais de 6 letras ou não começa com a letra E.")
}









