/*1)  Determine o valor lógico para cada uma das expressões a seguir e escreva o resultado no console:
a.Dado que x = 5 e y = 8, valide se os valores e os tipos são iguais.
*/
var x = 5
var y = 8
var dif= (x!=y)
var tipo = (x===y)
console.log(dif)
console.log(tipo)

//b. Dado que x = 6 e y = “6”, valide se os valores e os tipos são diferentes.

var x=6
var y="6"
var valorIgual= (x==y)
var tipoIgual =(x!=y)
console.log("O Valor é igual?" + valorIgual)
console.log ( "O tipo do dado é igual?"+ tipoIgual)

//c.Dado que x = “7” e y = 7, valide se os valores são iguais.

var x ="7"
var y = 7
var resultado = (x==y)

console.log ('os valores são iguais?' + resultado)

/* 2)Declare uma variável chamada nome.
a)Atribua a ela o valor “Fulano”. 
b) Exiba no console a seguinte mensagem: “ Boa noite, Fulano! ”. */
  
let nome = "fulano"

console.log("Boa noite," + nome)

/* 3) Considere x = x + y, dado que x = 10 e y = 5.
a) Use o operador de atribuição correto que resultará em x = 15 numa expressão reduzida.*/

var x=10
var y=5

var soma = (x+=y)
console.log("soma,"+soma)

//b) Use o operador de atribuição correto que resultará em x = 50 numa expressão reduzida.
var x=10
var y=5
var multiplicar = (y*=x)
console.log("multiplicação,"+multiplicar)

//c) Use o operador de atribuição correto que resultará em x = 0 numa expressão reduzida.

var x=10
var y=5
var modulo = (x%=y)
console.log ("Modulo,"+ modulo)

//d) Use o operador de atribuição correto que resultará em x = 2 numa expressão reduzida.
var x=10
var y=5
var divisao = (x/=y)
console.log ("divisão,"+ divisao)

//e) Use o operador de atribuição correto que resultará em x = 5 numa expressão reduzida.
var x=10
var y=5
var subtracao = (x-=y)
console.log ("Subtração,"+ subtracao)