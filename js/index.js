Para examinar el HTML de cualquier página con nuestro navegador, ¿Cuál es la herramienta que usamos?
2
¿Para qué se utiliza CSS?
3
¿Para qué se utiliza JavaScript?
4
¿Para qué sirve la función “alert” en JavaScript y cómo se invoca?
5
¿Cuál es la estructura básica de un archivo de HTML5?
6
¿Para qué sirve la etiqueta <p>?
7
¿Para qué sirve la etiqueta <strong>?
8
¿Para qué sirve console.log( )?
9
Es la forma en la que se invoca un archivo externo de JavaScript desde nuestro HTML:
10
Cuando quieres comenzar a dibujar en HTML ¿Qué etiqueta nos ayuda a crear un lienzo?
11
¿Qué objetivo cumple una función?
12
Si queremos declarar una variable llamada mensaje y asignarle el texto "Ya sé programar", lo hago con la opción:
13
¿Por qué debemos ubicar la etiqueta <script> justo antes de que se cierre el <body>?
14
¿Qué resultado obtenemos al tener z = Math.ceil(4.64);
15
Si tengo el siguiente código

declarar(); console.log(variable);
¿Qué se mostrará en la consola?

16
Si tengo el siguiente código

console.log(variable);
functiondeclarar() { variable = 12; }
¿Qué se mostrará en la consola?

17
¿Qué hace la función parseInt() ?
18
¿Qué es concatenar?
19
¿Para qué usamos la función prompt?
20
Si ejecutas el siguiente código, qué se mostrara en consola

varvariable; 
if(variable) { console.log("funciona"); 
} 
else{ console.log("no funciona"); 
}
21
¿Qué es el DOM?
22
Para el código:

var a = 10;
var b = "12";
var c = b + a;
¿Qué tipo de variable es c?
23
En el siguiente código, ¿Cuánto vale la variable vida?

function pakiman(vida)
{
    vida = vida + vida;
    vida++;
    return vida;
}
var vida = 2;
vida = pakiman(vida);
24
En el siguiente código, ¿Cuál es el resultado que se mostrará en la consola?

var billetes = [ [ 1 , 2 , 3 ] ,
              [ 4 , 5 , 6 ] ,
              [ 7 , 8 , 9 ] ];
console.log(billetes[1][2])
25
Al ejecutar el siguiente código:

var paki = {
    nombre: "Pakiman",
    ataque: 101
};
paki.ataque = paki.ataque * 2;


¿Cuánto equivale paki.ataque ?
26

Al ejecutar el siguiente código:

var contador = 2;
var na = "na";
while(contador)
{
    na += na;
    contador -= 1;
}
console.log(na + " Freddy ") ¿Qué se va a mostrar en consola? 

27
Es la forma de ejecutar la función "mover" cuando el usuario oprima cualquier tecla: 
28
 En HTML, la etiqueta:

<meta charset="utf-8" />
Se usa para:
29
En programación, Frontend es:
30
En programación, Backend es:








// const  url = 'img/cov.jpg';

// const img = document.getElementById('huge-image');
// const loadButton = document.getElementById('load');
// const stopButton = document.getElementById('stop');

// let controller

// function startLoading() {
// 	loadButton.disabled = true;
// 	loadButton.innerText = 'loading...';
// 	stopButton.disabled = false;
// }

// function stopleading() {
// 	loadButton.disabled = false;
// 	loadButton.innerText = 'Load HUGE Image';
// 	stopButton.disabled = true;
// }


// loadButton.onclick = async function() {
// 	startLoading();

//   controller = new AbortController()

//  const response = await fetch(url, {signal: controller.signal });
//  const blob = await response.blob();
//  const imgUrl = URL.createObjectURL(blob);
//  img.src = imgUrl;


// 	stopLoading();
//  };

// stopButton.onclick = function() {
// 	controller.abort();
//   stopLoading();
// };