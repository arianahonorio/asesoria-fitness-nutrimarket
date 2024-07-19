//INICIO
let bienvenida= document.getElementById("bienvenida")
let banner= document.getElementById("banner")
let text= document.getElementById("text")

//FORMULARIO
//nombre
let inputNombre= document.getElementById("nombre")
inputNombre.addEventListener('input', () => { 
    inputNombre.value;
    localStorage.setItem("inputNombre", JSON.stringify(inputNombre))
})




