let userName = prompt("Qual o seu nome?")
alert ("Olá, " + userName + ", você terá de digitar dois números.")

let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

let sum = firstNumber + secondNumber
let sub = firstNumber - secondNumber
let multi = firstNumber * secondNumber
let div = firstNumber / secondNumber
let restDiv = firstNumber % secondNumber

alert('A soma dos números digitados é: ' + sum)
alert('A subtração dos númros digitados é: ' + sub)
alert('A multiplicação dos números digitados é: ' + multi)
alert('A divisão dos números digitados é: ' + div)
alert('O resto da divisão dos números digitados é: ' + restDiv)


if (sum % 2 === 0) {
  alert('A soma dos números digitados é par: ' + sum);
} else {
  alert('A soma dos números digitados é ímpar: ' + sum);
}

if (firstNumber == secondNumber) {
  alert('Os números digitados são iguais.');
} else {
  alert('Os números digitados são diferentes. ');
}



