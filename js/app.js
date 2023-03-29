// Ejercicio 1


let num1 = parseInt(prompt("Ingrese un numero"));
let num2 = parseInt(prompt("Ingrese un segundo numero"));


document.write(`La resta de ambos numero es ${num1 - num2}<br>`);
document.write(`La multiplicacion de ambos numero es ${num1 * num2}<br>`);

// Ejercicio 2

let nombre = prompt(`Ingrese su nombre`);
let apellido = prompt(`Ingrese su apellido`);

nombre=nombre.toLowerCase();
apellido=apellido.toLowerCase();

console.log(nombre.includes(`a`));
console.log(nombre.includes(`m`));
console.log(apellido.includes(`a`));
console.log(apellido.includes(`m`));

// Ejercicio 3

let frase = (' Pablito-clavo-un-clavito');
console.log(frase);
let frase2 = frase.replaceAll("-"," ");
console.log(frase2);


