//INICIO

let bienvenida= document.getElementById("bienvenida")
let banner= document.getElementById("banner")
let text= document.getElementById("text")

//FORMULARIO
let formulario= document.getElementById("form");
formulario.addEventListener('submit', validarFormulario)
function validarFormulario (e) {
    e.preventDefault ();
    localStorage.getItem("formulario", JSON.stringify(formulario))
    }

//NOMBRE
let inputNombre= document.getElementById("nombre")
function retornarNombre(inputNombre){
    inputNombre.addEventListener('onchange', () => {
    inputNombre.value;
    localStorage.setItem("inputNombre", JSON.stringify(inputNombre))
    })
}
retornarNombre ()

//PESO
let inputPeso= document.getElementById("peso")
function retornarPeso(inputPeso){
    inputPeso.addEventListener('onchange', () => {
    inputPeso.value;
    localStorage.setItem("inputPeso", JSON.stringify(inputPeso))
    })
}
retornarPeso()

//OBJETIVOS
const cartObjetivos = []
    
let objetivoContainer = document.getElementById("objetivo")
    
function renderObjetivo(objetivoArray){
    objetivoArray.forEach (objetivo => {
        const cardObj= document.createElement("div")
        cardObj.innerHTML= `<h7>${objetivo.lograr}</h7>
        <button class="elegirObj" id="${objetivo.lograr}">Seleccionar</button>`
        objetivoContainer.appendChild(cardObj)
    })
    addToCartButtonObj ()
}
renderObjetivo(objetivos)

function addToCartButtonObj () {
    addButtonObj=document.querySelectorAll(".elegirObj")
    addButtonObj.forEach (button => {
        button.onclick= (e) => {
            const definirObjetivo= e.currentTarget.lograr
            const selectedObj= objetivos.find (objetivo => objetivo.lograr == definirObjetivo)
            cartObjetivos.push(selectedObj)
            localStorage.setItem("cartObjetivo", JSON.stringify(cartObjetivos))
        }
    })
}

//DIETAS
const cartDieta =[]

let dietaContainer = document.getElementById("dieta")

function renderDieta(dietaArray){
    dietaArray.forEach(dieta => {
        const cardDieta= document.createElement("div")
        cardDieta.innerHTML= `<h7>${dieta.alimentacion}</h7>
        <button class="elegirDieta" id="${dieta.alimentacion}">Seleccionar</button>`
        dietaContainer.appendChild(cardDieta)
    })
    addToCartButtonDieta()
}
renderDieta(dietas)

function addToCartButtonDieta (){
    addButtonDieta= document.querySelectorAll(".elegirDieta")
    addButtonDieta.forEach(button => {
        button.onclick= (e) => {
            const elegirDieta= e.currentTarget.alimentacion
            const selectedDieta= dietas.find (dieta => dieta.alimentacion == elegirDieta )
            cartDieta.push(selectedDieta)
            console.log(cartDieta)
            localStorage.setItem("cartDieta",JSON.stringify(cartDieta))
        }
    })
}

//RUTINAS


const cartRutina=[]

let rutinaContainer= document.getElementById("rutina")

function renderRutina(rutinaArray){
    rutinaArray.forEach(rutina=> {
        const cardRuti=document.createElement("div")
        cardRuti.innerHTML=`<h7>${rutina.tipo}</h7>
        <button class="elegirRutina" id="${rutina.tipo}">Seleccionar</button>`
        rutinaContainer.appendChild(cardRuti)
    })
    addToCartButtonRutina()
}
renderRutina(rutinas)

function addToCartButtonRutina(){
    addButtonRuti=document.querySelectorAll(".elegirRutina")
    addButtonRuti.forEach (button => {
        button.onclick=(e)=>{
        const definirRutina= e.currentTarget.rutina
        const selectedRutina= rutinas.find (rutina=> rutina.tipo==definirRutina)
        cartRutina.push(selectedRutina)
        localStorage.setItem("cartRutina",JSON.stringify(cartRutina))
        }
        
    })
}

//BOTON ENVIAR
    let buttonGuardar = document.getElementById("guardar")
    buttonGuardar.onclick = () => {
        let mensaje= Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Se encontró, revisa los datos ingresados!",
        })
        try {
            if (formulario)  {
                Swal.fire({icon: "success",
                    title: "¡Se registraron tus datos con exito!",
                    imageUrl: "https://placeholder.pics/svg/300x500",
                    imageHeight: 500,
                    imageAlt: "A tall image",
                    footer: '<a href="./respuestas.html">¡Hacé click acá para ver tu dieta y rutina!</a>'
                    })
                }
            } catch(err) {
                mensaje ==err
            } finally {
                Swal.fire({icon: "success",
                    title: "¡Se registraron tus datos con exito!",
                    imageUrl: "https://placeholder.pics/svg/300x500",
                    imageHeight: 500,
                    imageAlt: "A tall image",
                    footer: '<a href="./respuestas.html">¡Hacé click acá para ver tu dieta y rutina!</a>'
                    })
            }
        }
            localStorage.getItem(JSON.stringify(buttonGuardar))
