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

//edad

function retornarProfe () {
    inputEdad= document.getElementById("edad")
    inputEdad.addEventListener ('input', () => { 
        let edad= inputEdad;
        if (edad <= 20) { ('Tu entrenador es Pedro.'); 
        }
        else if(edad <= 30) { ('Tu entrenadora es Viviana.');
        }
        else if (edad <= 35) { ('Tu entrenador es Ayelen.')
        }
        inputEdad.value;
        }  
    )
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

//alimentacion
const alimentacion= [
    {
        tipo: 'Vegan',
        nutricionista: 'Federico',
    },
    {
        tipo: 'Veggie',
        nutricionista: 'Andrea',
    },
    {
        tipo: 'Completa',
        nutricionista: 'Lucia',
    },
]
//asignar nutricionista
let inputAlimentacion= document.getElementById("alimentacion")
inputAlimentacion.onchange = () => {
    const mostrarAlimentacion = alimentacion.filter(alimentacion => alimentacion.nutricionista === 
    inputAlimentacion.value,
    localStorage.setItem("inputAlimentacion", JSON.stringify(inputAlimentacion)),
)}

//dietas
//Plan Nutricionista de dieta Vegan-Federico
const dietaVegan= [{
    comida: 'desayuno',
    receta: 'chocolatada de leche vegetal, tostadas con palta y tomate, fruta',
},
{
    comida:'desayuno',
    receta:'cafe, yogur de soja con avena, fruta',
},
{
    comida: 'desayuno',
    receta: 'batido de frambuesa con leche vegetal, pan integral con tomate y semillas, galleta de avena y pasas'
},
{
    comida:'almuerzo',
    receta:'wrap de ensalada de garbanzos y palta',
},
{
    comida:'almuerzo',
    receta:'sopa de albahaca y tomates asados',
},
{
    comida:'almuerzo',
    receta:'quinoa con verduras, ensalada de garbanzos',
},
{
    comida:'cena',
    receta:'pasta con hummus cremoso y vegetales',
},
{
    comida:'cena',
    receta:'wok de verduras, albondigas de berenjena',
},
{
    comida:'cena',
    receta:'tortilla rellena de espinaca, sopa de verduras',
},
]

let buttonVegan= document.getElementById("vegan")
buttonVegan.click = () => {
    const mostrarDietaVegan = dietaVegan.forEach (dietaVegan => {(`Tu comida para ${dietaVegan.comida} es ${dietaVegan.receta}.`)},   
        localStorage.setItem("buttonVegan", JSON.stringify(buttonVegan)),
)}

//Plan Nutricionista de dieta Veggie-Andrea
const dietaVeggie= [{
    comida: 'desayuno',
    receta: 'cafe con bebida vegetal, tostada de pan integral, huevos revueltos, tomate troceado',
},
{
    comida:'desayuno',
    receta:'batido de banana con leche vegetal, tortitas de avena, nueces y chocolate',
},
{
    comida: 'desayuno',
    receta: 'yogur deslactosado con avena y frutos secos, fruta',
},
{
    comida:'almuerzo',
    receta:'mini tartas de calabacín y risotto con champiñones',
    postre: 'fruta de estación',
},
{
    comida:'almuerzo',
    receta:'ensalada de tomates cherry, pimiento rojo y verde, cebolla y quinoa',
    postre: 'fruta de estación',
},
{
    comida:'almuerzo',
    receta:'tallarines integrales, dados de tofu, con salteado de brócoli, zanahoria, berenjena, cebolla y semillas de sésamo',
    postre: 'frutas de estación',
},
{
    comida:'cena',
    receta:'ensalada verde, tortilla de patatas',
    postre: 'fruta de estación',
},
{
    comida:'cena',
    receta:'ensalada de tomate, cebolla, pepino, aguacate, maíz y mozzarella, caldo de verduras con fideos',
    postre: 'fruta de estación',
},
{
    comida:'cena',
    receta:'Pizza de coliflor',
    postre: 'fruta de estación',
},
]
let buttonVeggie= document.getElementById("veggie")
buttonVeggie.click = () => {
    const mostrarDietaVeggie = dietaVeggie.forEach (mostrarDietaVeggie => {(`Tu comida para ${dietaVeggie.comida} es ${dietaVeggie.receta}.`)},   
        localStorage.setItem("buttonVeggie", JSON.stringify(buttonVeggie)),
)}

//Plan Nutricionista de dieta Completa-Lucia
const dietaCompleta= [
{
    comida: 'desayuno',
    receta: 'cafe, tostadas con huevo revuelto, palta y tomate, porción de fruta',
},
{
    comida:'desayuno',
    receta:'tortitas de avena, porción de frutos secos',
},
{
    comida: 'desayuno',
    receta: 'insufión a elección, wok de yogur con avena, frutos secos y fruta',
},
{
    comida:'almuerzo',
    receta:'pollo a la plancha, arroz y verduras',
    postre: 'flan',
},
{
    comida:'almuerzo',
    receta:'ensalada de cuscus con manzana y pollo',
    postre: 'fruta de estación',
},
{
    comida:'almuerzo',
    receta:'albondigas de soja, quinoa con verduras',
    postre: 'frutas de estación',
},
{
    comida:'cena',
    receta:'salteado de verdura, ternera',
    postre:'fruta de estación',
},
{
    comida:'cena',
    receta:'tortilla de espinaca con cebolla y queso',
    postre:'fruta de estación',
},
{
    comida:'cena',
    receta:'pasta con verduras, pollo',
    postre:'fruta de estación',
},
]

let buttonCompleta= document.getElementById("completa")
buttonCompleta.click = () => {
    const mostrarDietaCompleta = dietaCompleta.forEach (dietaCompleta => {(`Tu comida para ${dietaCompleta.comida} es ${dietaCompleta.receta}.`)},   
        localStorage.setItem("buttonCompleta", JSON.stringify(buttonCompleta)),
)}

//Plan de entrenamineto-Pedro/Viviana/Ayelen
//Rutina de enfasis a un grupo muscular
const rutinaEnfasis=[
{
    dia:'lunes',
    ejercicio:'press banca',
    series:'4',
    repeticiones:'6',
}, {
    dia:'lunes',
    ejercicio:'aperturas inclinadas',
    series: '4',
    repeticiones: '10, 8, 8, 6',
}, {
    dia:'lunes',
    ejercicio:'sentadilla profunda',
    series: '3',
    repeticiones: '10, 8, 6',
},{
    dia:'lunes',
    ejercicio:'dominadas lastradas',
    series: '4',
    repeticiones: '10, 8, 8, 6',
},{
    dia:'lunes',
    ejercicio:'press militar barra',
    series: '3',
    repeticiones: '10, 8, 8',
},{
    dia:'miercoles',
    ejercicio:'sentadillas en cajón',
    series: '4',
    repeticiones: '10, 10, 8, 8',
},{
    dia:'miercoles',
    ejercicio:'prensa 45°',
    series: '4',
    repeticiones: '8, 8, 6, 6',
},{
    dia:'miercoles',
    ejercicio:'press banca inclinado con mancuernas',
    series: '3',
    repeticiones: '8, 6, 6',
},{
    dia:'miercoles',
    ejercicio:'remo gironda',
    series: '4',
    repeticiones: '10, 8, 8, 6',
},{
    dia:'miercoles',
    ejercicio:'elevaciones frontales',
    series: '3',
    repeticiones: '10, 10, 8',
},{
    dia:'miercoles',
    ejercicio:'elevaciones de talones de pie',
    series: '5',
    repeticiones: '20',
},{
    dia:'viernes',
    ejercicio:'dominadas neutras lastradas',
    series: '4',
    repeticiones: '6',
},{
    dia:'viernes',
    ejercicio:'remo en punta',
    series: '4',
    repeticiones: '10, 8, 8, 6',
},{
    dia:'viernes',
    ejercicio:'extensiones de cuadriceps',
    series: '4',
    repeticiones: '10, 10, 8, 6',
},{
    dia:'viernes',
    ejercicio:'curl femoral',
    series: '4',
    repeticiones: '10, 10, 8, 8',
},{
    dia:'viernes',
    ejercicio:'flexiones de suelo',
    series: '4',
    repeticiones: 'hasta el fallo',
},{
    dia:'viernes',
    ejercicio:'fondos paralelas',
    series: '4',
    repeticiones: 'hasta el fallo',
},{
    dia:'viernes',
    ejercicio:'encogimientos dobles',
    series: '4',
    repeticiones: '20',
},{
    dia:'viernes',
    ejercicio:'elevacion de piernas',
    series: '4',
    repeticiones: '20',
},
]

let buttonEnfasis= document.getElementById("enfasis")
buttonEnfasis.click = () => {
    const mostrarRutinaEnfasis = rutinaEnfasis.forEach (rutinaEnfasis => {(`El día ${rutinaEnfasis.dia} realiza ${rutinaEnfasis.ejercicio} de ${rutinaEnfasis.series} y ${rutinaEnfasis.repetiones}.`)},   
        localStorage.setItem("buttonEnfasis", JSON.stringify(buttonEnfasis)),
)}

//Rutina Clasica
const rutinaClasica= [
{
    dia:'lunes-miercoles',
    ejercicio:'sentadillas',
    series: '3',
    repeticiones: '12',
},{
    dia:'lunes-miercoles',
    ejercicio:'remo con barra con barra/mancuernas',
    series: '3',
    repeticiones: '12',
},{
    dia:'lunes-miercoles',
    ejercicio:'press militar con barra/mancuernas',
    series: '3',
    repeticiones: '12',
},{
    dia:'lunes-miercoles',
    ejercicio:'press de banca',
    series: '3',
    repeticiones: '12',
},{
    dia:'lunes-miercoles',
    ejercicio:'curl de biceps',
    series: '3',
    repeticiones: '12',
},{
    dia:'lunes-miercoles',
    ejercicio:'fondos paralelas',
    series: '5',
    repeticiones: '10',
},{
    dia:'lunes-miercoles',
    ejercicio:'elevaciones de talones con barra',
    series: '3',
    repeticiones: '20',
},{
    dia:'lunes-miercoles',
    ejercicio:'abdominales oblicuos y cortos',
    series: '8',
    repeticiones: '20',
},{
    dia:'viernes',
    ejercicio:'sentadillas',
    series: '3',
    repeticiones: '12',
},{
    dia:'viernes',
    ejercicio:'peso muerto',
    series: '3',
    repeticiones: '12',
},{
    dia:'viernes',
    ejercicio:'press militar con barra/mancuernas',
    series: '3',
    repeticiones: '12',
},{
    dia:'viernes',
    ejercicio:'press de banca con barra/mancuernas',
    series: '3',
    repeticiones: '12',
},{
    dia:'viernes',
    ejercicio:'curl de biceps con barra/mancuernas',
    series: '3',
    repeticiones: '12',
},{
    dia:'viernes',
    ejercicio:'fondos paralelas',
    series: '5',
    repeticiones: '10',
},{
    dia:'viernes',
    ejercicio:'elevaciones de talones con barra',
    series: '3',
    repeticiones: '20',
},{
    dia:'viernes',
    ejercicio:'abdominales oblicuos y cortos',
    series: '8',
    repeticiones: '20',
},
]

let buttonClasica= document.getElementById("clasica")
buttonClasica.click = () => {
    const mostrarRutinaClasica = rutinaClasica.forEach (rutinaClasica => {(`El día ${rutinaClasica.dia} realiza ${rutinaClasica.ejercicio} de ${rutinaClasica.series} series y ${rutinaClasica.repetiones} repeticiones.`)},   
        localStorage.setItem("buttonClasica", JSON.stringify(buttonClasica)),
)}

//Rutina avanzada
//Todos los días_Cuerpo completo
const rutinaAvanzada=[
{
    dia:'todos-los-dias',
    ejercicio:'remo al menton',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'press de banca',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'premo mancuerna a una mano',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'elevaciones laterales',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'press inclinado',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'extenciones de tríceps polea alta',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'curl con barra',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'curl con mancuerna sentado',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'sentadillas',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'pullover',
    series: '3',
    repeticiones: '12',
},{
    dia:'todos-los-dias',
    ejercicio:'sentadilla profunda',
    series: '1',
    repeticiones: '20',
},{
    dia:'todos-los-dias',
    ejercicio:'pullovers profundo',
    series: '1',
    repeticiones: '20',
},{
    dia:'todos-los-dias',
    ejercicio:'peso muerto',
    series: '2',
    repeticiones: '18',
},{
    dia:'todos-los-dias',
    ejercicio:'extensiones de tríceps en polea alta',
    series: '2',
    repeticiones: '18',
},
]

let buttonAvanzada= document.getElementById("avanzada")
buttonAvanzada.click = () => {
    const mostrarRutinaAvanzada = rutinaAvanzada.forEach (rutinaAvanzada => {(`El día ${rutinaAvanzada.dia} realiza ${rutinaAvanzada.ejercicio} de ${rutinaAvanzada.series} series y ${rutinaAvanzada.repetiones} repeticiones.`)},   
        localStorage.setItem("buttonAvanzada", JSON.stringify(buttonAvanzada)),
)}

//email
let inputEmail= document.getElementById("email")
inputEmail.addEventListener('input', () => { 
    inputEmail.value;
    localStorage.setItem("inputEmail", JSON.stringify(inputEmail))
})

//button-enviar
let buttonGuardar = document.getElementById("guardar")
buttonGuardar.click = () => {click++}
localStorage.getItem(JSON.stringify(buttonGuardar))

//formulario
let miformulario = document.getElementById("formulario");
miformulario.addEventListener("Submit", validarFormulario);
    function validarFormulario (e) {
        e.preventDefault();
        localStorage.getItem("formulario", JSON.stringify(miformulario))
    }




