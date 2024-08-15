//INICIO

let bienvenida= document.getElementById("bienvenida")
let banner= document.getElementById("banner")
let text= document.getElementById("text")

//FORMULARIO
//nombre

let inputNombre= document.getElementById("nombre")

function retornarNombre () {
    inputNombre.addEventListener('input', () => { 
        inputNombre.value;
        localStorage.setItem("inputNombre", JSON.stringify(inputNombre))
    })
}
retornarNombre ()

//edad

let inputEdad= document.getElementById("edad")

function retornarProfe () {
    inputEdad.addEventListener ('input', () => { 
        let edad= inputEdad;
        if (edad <= 20) { ('Tu entrenador es Pedro.'); 
        }
        else if(edad <= 30) { ('Tu entrenadora es Viviana.');
        }
        else if (edad <= 35) { ('Tu entrenador es Ayelen.')
        inputEdad.value;
        } 
    })
    localStorage.setItem("inputEdad",JSON.stringify(inputEdad))
}
retornarProfe()

//altura

let inputAltura= document.getElementById("altura")

inputAltura.addEventListener('input', () => { 
    inputAltura.value;
    localStorage.setItem("inputAltura", JSON.stringify(inputAltura))
})

//peso

let inputPeso= document.getElementById("peso")
inputPeso.addEventListener('input', () => { 
    inputPeso.value;
    localStorage.setItem("inputPeso", JSON.stringify(inputPeso))
})

//asignar nutricionista 
let inputAlimentacion= document.getElementById("alimentacion")

function retornarNutricionista (){
    inputAlimentacion.onchange = () => {
        const mostrarAlimentacion = alimentacion.filter(alimentacion => alimentacion.nutricionista === 
        inputAlimentacion.value,
        localStorage.setItem("inputAlimentacion", JSON.stringify(inputAlimentacion)),
    )}
}
retornarNutricionista(alimentacion)

//dietas
//Plan Nutricionista de dieta Vegan-Federico 
let buttonVegan= document.getElementById("vegan")

buttonVegan.onclick = () => {
    const mostrarDietaVegan = dietaVegan.find (dietaVegan => dietaVegan==clicks++,   
        localStorage.setItem("buttonVegan", JSON.stringify(buttonVegan)),
)}

//Plan Nutricionista de dieta Veggie-Andrea
let buttonVeggie= document.getElementById("veggie")

buttonVeggie.onclick = () => {
    const mostrarDietaVeggie = dietaVeggie.find (dietaVeggie => dietaVeggie==clicks++,   
        localStorage.setItem("buttonVeggie", JSON.stringify(buttonVeggie)),
)}

//Plan Nutricionista de dieta Completa-Lucia
let buttonCompleta= document.getElementById("completa")

buttonCompleta.onclick = () => {
    const mostrarDietaCompleta = dietaCompleta.find (dietaCompleta => dietaCompleta==clicks++,   
        localStorage.setItem("buttonCompleta", JSON.stringify(buttonCompleta)),
)}

//Plan de entrenamineto-Pedro/Viviana/Ayelen
//Rutina de enfasis a un grupo muscular
let buttonEnfasis= document.getElementById("enfasis")

buttonEnfasis.onclick = () => {
    const mostrarRutinaEnfasis = rutinaEnfasis.find (rutinaEnfasis => rutinaEnfasis==clicks++ ,   
        localStorage.setItem("buttonEnfasis", JSON.stringify(buttonEnfasis)),
)}

//Rutina Clasica
let buttonClasica= document.getElementById("clasica")

buttonClasica.onclick = () => {
    const mostrarRutinaClasica = rutinaClasica.forEach (rutinaClasica => rutinaClasica==clicks++,   
        localStorage.setItem("buttonClasica", JSON.stringify(buttonClasica)),
)}

//Rutina avanzada
//Todos los días_Cuerpo completo
let buttonAvanzada= document.getElementById("avanzada")

buttonAvanzada.onclick = () => {
    const mostrarRutinaAvanzada = rutinaAvanzada.forEach (rutinaAvanzada => {(`El día ${rutinaAvanzada.dia} realiza ${rutinaAvanzada.ejercicio} de ${rutinaAvanzada.series} series y ${rutinaAvanzada.repetiones} repeticiones.`)},   
        localStorage.setItem("buttonAvanzada", JSON.stringify(buttonAvanzada)),
)}

//email
let inputEmail= document.getElementById("email")
inputEmail.addEventListener('input', () => { 
    inputEmail.value;
    localStorage.setItem("inputEmail", JSON.stringify(inputEmail))
})

//en este paso al momento que se presiona el boton de enviar agregar libreria sweet alert
//que confirme que se guardaron sus datos
//y adjuntar link de respuestas.html con la info de las dietas,rutinas y demas 

//button-enviar
let buttonGuardar = document.getElementById("guardar")
buttonGuardar.onclick = () => {click++}
localStorage.getItem(JSON.stringify(buttonGuardar))

//formulario
let miformulario = document.getElementById("formulario");
miformulario.addEventListener("Submit", validarFormulario);
    function validarFormulario (e) {
        e.preventDefault();
        localStorage.getItem("formulario", JSON.stringify(miformulario))
    }




