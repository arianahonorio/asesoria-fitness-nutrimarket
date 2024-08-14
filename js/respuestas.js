//bienvenida
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

//retornar nutricionista




//dieta

//retornar entrenador
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



