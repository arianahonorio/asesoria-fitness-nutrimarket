//FORMULARIO
let formularioStorage = localStorage.getItem("formulario")
formularioStorage = JSON.parse(formularioStorage)

//BIENVENIDA
let bienvenida= document.getElementById("bienvenida")

let nombreStorage = localStorage.getItem("inputNombre")
nombreStorage = JSON.parse(nombreStorage)

function retornarBienvenida (retornarNombre) {
    retornarNombre.addEventListener (retornarNombre=> {
        const nombre = document.createElement("div")
        nombre.innerHTML = `<h2>Bienvenid@ <span>${retornarNombre}</span> a Asesoría Fitness</h3>`
    })
}
retornarBienvenida(nombreStorage)

//PESO
let mostarPeso= document.getElementById("peso-inicial")

let pesoStorage=localStorage.getItem("inputPeso")
pesoStorage=JSON.parse(pesoStorage)

function retornarPesoAlDia(retornarPeso){
    retornarPeso.addEventListener(retornarPeso=> {
        const peso=document.createElement("div")
        peso.innerHTML=`<p>Tu peso al día de hoy es <span>${retornarPeso}</span></p>`
    })
}
retornarPesoAlDia()

//RETORNO-OBJETIVO
let objetivoStorage = localStorage.getItem("cartObjetivo")
objetivoStorage = JSON.parse(objetivoStorage)

let mostarObjetivo = document.getElementById("retorno-objetivo")

function renderDelObjetivo (cartItems) {
    cartItems.forEach (producto => {
        const card = document.createElement("div")
        card.innerHTML = `<h3>${producto.nombre}</h3>
                        <p>${producto.precio}</p>`
        cartContainer.appendChild(card)
    })
}
renderCarrito(cartStorage)

//RETORNO-DIETA



//RETORNO-RUTINA

