// alert("Hola")

/*
DOM avanzado: selección (query, queryAll), eventos (listeners, delegación), validación de formularios, render dinámico, llamadas HTTP
*/

let nombre = prompt("Ingrese su nombre")

let botonUnico = document.getElementById("botonUnico")

//getElementByClassName 

botonUnico.addEventListener("click", function () {
    alert("hola")
})


document.getElementById("otroBoton").addEventListener("click", function () { alert("holis") })

let textoSaludo = document.getElementById("textoSaludo")

textoSaludo.innerText = "Hola " + nombre

// {nombre:"Esteban", apellido:"Piazza", experiencia:"asdadasda"}


let botonQuery = document.querySelector("#botonQuery")
console.log(botonQuery)

let listas = document.querySelectorAll(".elementosListaPrincipal")
console.log(listas)
console.log(listas[1].outerText)

botonQuery.style.backgroundColor = "yellow"
/* background-color:  */


let textoDinamico = document.querySelector("#textoDinamico")

textoDinamico.innerHTML = `<h1> Hola ${nombre}, ${"1" - 1} </h1> <p> soy un parrafo </p>`

let textoIngresado = document.querySelector("#textoIngresado")

textoIngresado.addEventListener("change", function () {
    console.log(textoIngresado.value)
})


localStorage.setItem("nombre", nombre)
localStorage.setItem("pais", "ARgentina")
alert(localStorage.getItem("pais"))


let carrito = [
    { nombre: "a", precio: 1 }, 
    { nombre: "b", precio: 2 }, 
    { nombre: "c", precio: 3 }
]

let carritoListo = JSON.stringify(carrito)

console.log(carrito)
console.log(carritoListo)

let carritoConvertido = JSON.parse(carritoListo)

console.log(carritoConvertido)

console.log(fetch('https://dolarapi.com/v1/dolares/oficial'))