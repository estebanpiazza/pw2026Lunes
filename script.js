/* 
variables
constnates
arrays
objetos
arrays de objetos
operadores logicos, aritmeticos
if
for
funciones: expresadas, declaradas y flecha
metodos de arrays
 */



/* variable: espacio en memoria reservado con un nombre, una caja con etiqueta */

let nombre = "Esteban";
let edad = 33;
let altura = 1.78
let profesor = true;
// let es la versión actual, antes se usaba var.
/* tipos de datos: string, Number, boolean */
console.log("Hola") // print
/* constante , no se puede cambiar */
const PI = 3.14

/* arrays */

const ARRAY = [0, "Esteban", true]

/* objetos */

let ayudante = {
    nombre: "Franco",
    edad: 24,
    enActividad: true,
    cumplirAnios: function () {
        if (date == "11/06") {
            this.edad += 1
        }
    }
}

console.log(ayudante.nombre)

let ayudante2 = {
    nombre: "Lucia",
    edad: 21,
    enActividad: true
}
let ayudante3 = {
    nombre: "Julian",
    edad: 20,
    enActividad: true
}

const AYUDANTES = [ayudante, ayudante2, ayudante3]

/* Operadores */
//Aritmeticos
console.log(2 + 1)
console.log(3 * 2)
console.log(3 - 2)
console.log(10 / 5)//cociente
console.log("1" + 1)
console.log("Esteban" + 1)
console.log("10" - 1)
console.log("Esteba" * 2)
console.log("22" * 2)
console.log(10 % 5)//resto
console.log(0.6 + 0.1)
console.log(0.7 + 0.1)

// Logicos
console.log(1 == 1)
console.log(1 == "1")
console.log(1 === "1")
console.log(1 != 2)
console.log(1 !== "1")
console.log(1 > 2)
console.log("1" <= 2)

// And y OR
console.log("si" && 1) // && AND
console.log(0 || 3) // || OR 



/* if */

let a = 1
let b = 2
let c = 3
if (a == b) {
    console.log("son iguales")
}

if (a > b) {
    if (a > c) {
        console.log("a es el mayor")
    }
} else if (b > c) {
    console.log("b es el mayor")
} else {
    console.log("c es el amyor")
}



if (a > b && a > c) {
    console.log("a es el mayor")
}else if (b > c) {
    console.log("b es el maoyr")
}else { 
    console.log("c es el amyor") }

if (a > b && a>c || a==b){
    console.log("algo")
}

if(AYUDANTES[0].nombre == "Franco"){
    console.log("cambiar ayudante")
}
/* if ternario */
let d = 10
let e = 11

let resultado = d > e ? "es mayor D" : "es mayor E"
console.log(resultado)
/*  For */
// for ( variable de iteración;condicion; variación  )
for ( let i = 0; i < AYUDANTES.length; i++  ){
    console.log(AYUDANTES[i].nombre)
}

for ( let i = 0; i < AYUDANTES.length; i++  ){
    AYUDANTES[i].edad += 1
}

console.log(AYUDANTES)

let acumulacion = 0
for ( let i = 0; i < AYUDANTES.length; i++  ){
    acumulacion = acumulacion + AYUDANTES[i].edad

}
console.log(acumulacion / AYUDANTES.length)

/* Functions */

saludar()

function saludar(){ //function declarada
    alert("hola")
}

function saludarConsola(){
    console.log("hola consola")
}

function saludarPersonalizado (nombre){
    console.log("Hola "+ nombre)
}

//funciones expresadas
sumar(1,2)
let sumar = function (a,b){
    console.log(a+b)
}

//function flecha

let restar = (a,b) => a-b
console.log(restar(10,4))

let duplicar = c => c*2
console.log(duplicar(5))

/* metodos de array */

const productos = [
    {nombre:"lapiz", precio:10}, {nombre:"goma", precio:5}, {nombre:"lapicera", precio: 15}
]

function aumentar(porcentaje, array){
    array.map (function(porcentaje){
        array.precio(array.precio + array.precio * porcentaje)
    })
}