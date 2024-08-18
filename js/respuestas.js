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

fetch("./db/objetivos.json")
.then(response => response.json())
.then(data => {
    data.forEach(objetivo => {
        const cardObjetivo = document.createElement("div")
        cardObjetivo.innerHTML = `<p>Tu objetivo a lograr es 
                            <span>${objetivo.lograr}</span></p>`
        mostarObjetivo.appendChild(cardObjetivo)
    })
})

//RETORNO-DIETA
let alimentacionStorage=localStorage.getItem("cartDieta")
alimentacionStorage=JSON.parse(alimentacionStorage)

let mostrarDieta=document.getElementById("retorno-dieta")

fetch("./db/dieta.json")
.then (response=>response.json())
.then(data=>{
    data.forEach(dieta=>{
        const cardDietas=document.createElement("div")
        cardDietas.innerHTML=`<p>Tu nutricionista especializado en tu alimentación es
                            <span>${dieta.nutricionista}</span>.</p>
                            <p>Desayunos:</p>
                            <p>${dieta.desayuno1}</p>
                            <p>${dieta.desayuno2}</p>
                            <p>${dieta.desayuno3}</p>
                            <p>Almuerzos:</p>
                            <p>${dieta.almuerzo1}</p>
                            <p>${dieta.almuerzo2}</p>
                            <p>${dieta.almuerzo3}</p>
                            <p>Cenas</p>
                            <p>${dieta.cena1}</p>
                            <p>${dieta.cena2}</p>
                            <p>${dieta.cena3}</p>`
        mostrarDieta.appendChild(cardDietas)                
    })
})

//RETORNO-RUTINA
let rutinasStorage=localStorage.getItem("cartRutina")
rutinasStorage=JSON.parse(rutinasStorage)

let mostrarRutinas= document.getElementById("retorno-rutina")

fetch("./db/rutina.json")
.then (response=>response.json())
.then (data=>{
    data.forEach(rutina=>{
        const cardRutinas=document.createElement("div")
        cardRutinas.innerHTML=`<p>Tu entrenador es
                            <span>${rutina.entrenador}</span> para trabajar una rutina 
                            <span>${rutina.tipo}</span>.</p>
                            <p>Lunes:</p>
                            <p>${rutina.lunes}</p>
                            <p>${rutina.miercoles}</p>
                            <p>${rutina.viernes}</p>
                            <p>Realiza <span>${rutina.series}</span> de 
                            <span>${rutina.repeticiones}</span>por ejercicio.</p>`
        mostrarRutinas.appendChild(cardRutinas)
    })
})
