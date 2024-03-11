1) Observe o trecho de código abaixo:

int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);

O valor da variável SOMA será igual a 91

2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
  

function fibonacciCheck(number) {
  let firstValue = 0;
  let secondValue = 1;
  let sum = firstValue + secondValue;
  
  while (sum < number) {
    firstValue = secondValue;
    secondValue = sum;
    sum = firstValue + secondValue;
  }
  
  let answer = '';
  sum === number ? answer = 'Este número faz parte da sequência de Fibonacci' : answer = 'Este número não faz parte da sequência de Fibonacci';
  
  return answer;
}

console.log(fibonacciCheck(13));


3) Descubra a lógica e complete o próximo elemento:


a) 1, 3, 5, 7, 9, 11, 13 //soma 2 para cada valor

b) 2, 4, 8, 16, 32, 64, 128, 256 // vezes 2 para cada valor

c) 0, 1, 4, 9, 16, 25, 36, 49, 64 //Elevar o índice ao quadrado 0^2, 1^2, 2^2 ....

d) 4, 16, 36, 64, 100, 144 //Números pares ao quadrado 2^2, 4^2, 6^2 ....

e) 1, 1, 2, 3, 5, 8, 13, 21 //Fibonacci

f) 2,10, 12, 16, 17, 18, 19, ____

4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?
  
a) O primeiro interruptor eu ligaria e desligaria várias vezes, deixando-o desligado no final para esquentar a lâmpada. 
O segundo interruptor apenas ligaria, deixando-a acessa, e o terceiro interruptor deixaria desligado.

b) Iria até duas salas diferentes, analisando três casos. Se a luz estiver acesa, então é do interruptor que eu deixei acessa. 
Se a luz estiver apagada, há dois casos: encostaria a mão na lâmpada para ver se está quente. Se estiver quente, é do interruptor que desliguei e liguei várias vezes. 
Se estiver frio, é do interruptor que não liguei.

c) Descobrindo dois interruptores por eliminação, o último que sobraria eu já saberia qual é também.

5) Escreva um programa que inverta os caracteres de um string.


IMPORTANTE:

a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;

b) Evite usar funções prontas, como, por exemplo, reverse;

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("String invertida:", reverseString('testando123'));
