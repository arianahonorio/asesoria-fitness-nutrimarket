//bienvenida
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

//peso inicial hasta la fecha con luxon
let pesoALaFecha= document.getElementById("peso-inicial")

//retornar nutricionista
let nutricionista= document.getElementById("nutricionista")

let nutricionistaStorage = localStorage.getItem("inputAlimentacion")
nutricionistaStorage = JSON.parse(nutricionistaStorage)

fetch("./db/alimetacion.json")
.then(response => response.json())
.then(data => {
        data.filter(alimentacion => {
        const cardAlimentacion = document.createElement("div")
        cardAlimentacion.innerHTML = `<h3>Tu tipo de alimentación es <span>${alimentacion.tipo}</span>.</h3>
                        <h3>Tu nutricionista recomendado es <span>${alimentacion.nutricionista}</span>.</h3>`
            container.appendChild(cardAlimentacion)
        })
    })

//dietas
let comidas= document.getElementById("lista-comidas")

//dieta-vegan
let veganStorage = localStorage.getItem("vegan")
veganStorage = JSON.parse(veganStorage)

fetch("./db/dieta-vegan.json")
.then(response => response.json())
.then(data => {
        data.forEach(dietaVegan => {
        const cardVegan = document.createElement("div")
        cardVegan.innerHTML = `<h2>Dieta a seguir: </h2>
                            <h3>Comida: ${dietaVegan.comida}</h3>
                            <h3>Receta: ${dietaVegan.receta}</h3>`
        container.appendChild(cardVegan)
        })
    })

//dieta-veggie
let veggieStorage = localStorage.getItem("veggie")
veggieStorage = JSON.parse(veggieStorage)

fetch("./db/dieta-veggie.json")
.then(response => response.json())
.then(data => {
        data.forEach(dietaVeggie => {
        const cardVeggie = document.createElement("div")
        cardVeggie.innerHTML = `<h2>Dieta a seguir: </h2>
                        <h3>Comida: ${dietaVeggie.comida}</h3>
                        <h3>Receta: ${dietaVeggie.receta}</h3>`
        container.appendChild(cardVeggie)
        })
    })

//dieta-completa
let completaStorage = localStorage.getItem("completa")
completaStorage = JSON.parse(completaStorage)

fetch("./db/dieta-completa.json")
.then(response => response.json())
.then(data => {
        data.forEach(dietaCompleta => {
        const cardCompleta = document.createElement("div")
        cardCompleta.innerHTML = `<h2>Dieta a seguir: </h2>
                        <h3>Comida: ${dietaCompleta.comida}</h3>
                        <h3>Receta: ${dietaCompleta.receta}</h3>`
        container.appendChild(cardCompleta)
        })
    })

//retornar entrenador
let entrenador= document.getElementById("retorno-entrenador")

let edadStorage = localStorage.getItem("inputEdad")
edadStorageStorage = JSON.parse(edadStorage)

function retornarProfe () {
    inputEdad.addEventListener ('input', () => { 
        let edad= inputEdad;
        if (edad <= 20) { ('Tu entrenador es Pedro.'); 
        }
        else if(edad <= 30) { ('Tu entrenadora es Viviana.');
        }
        else if (edad <= 35) { ('Tu entrenador es Ayelen.')
        }
        inputEdad.value;
        const nombre = document.createElement("div")
        nombre.innerHTML = `<h3>Tu entrenador asignado es <span>${retornarProfe}</h3>`
        } 
    )
    localStorage.setItem("inputEdad",JSON.stringify(inputEdad))
}
retornarProfe()

//rutina
let rutinas= document.getElementById("lista-rutinas")

//rutina-enfasis
let rutinaEnfasisStorage = localStorage.getItem("enfasis")
rutinaEnfasisStorage = JSON.parse(rutinaEnfasisStorage)

fetch("./db/rutina-enfasis.json")
.then(response => response.json())
.then(data => {
        data.forEach(rutinaEnfasis => {
        const cardRutiEnfasis = document.createElement("div")
        cardRutiEnfasis.innerHTML = `<h2>Tu rutina a seguir: </h2>
                        <div><li><h3>Día: ${rutinaEnfasis.dia}</h3>
                        <h3>Ejercicio: ${rutinaEnfasis.ejercicio}</h3>
                        <h3>Hacer <span>${rutinaEnfasis.series}</span> de <span>${rutinaEnfasis.repeticiones}</span>.</h3>
                        </li></div>`
        container.appendChild(cardRutiEnfasis)
        })
    })

//rutina-clasica
let rutinaClasicaStorage = localStorage.getItem("clasica")
rutinaClasicaStorage = JSON.parse(rutinaClasicaStorage)

fetch("./db/rutina-clasica.json")
.then(response => response.json())
.then(data => {
        data.forEach(rutinaClasica => {
        const cardRutiClasica = document.createElement("div")
        cardRutiClasica.innerHTML = `<h2>Tu rutina a seguir: </h2>
                        <div><li><h3>Día: ${rutinaClasica.dia}</h3>
                        <h3>Ejercicio: ${rutinaClasica.ejercicio}</h3>
                        <h3>Hacer <span>${rutinaClasica.series}</span> de <span>${rutinaClasica.repeticiones}</span>.</h3>
                        </li></div>`
        container.appendChild(cardRutiClasica)
        })
    })

//rutina-avanzada

