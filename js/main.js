//Bienvenida
let bienvenida= confirm("Hola, Bienvenid@! ¿List@ para comenzar con tu asesoría?")

alert ("Para iniciar tienes que completar los siguientes datos...")

//Inscripción
let nombre= prompt("¿Cómo te llamas?")
let altura= parseInt(prompt("¿Cuánto medis?"))
let peso= parseInt(prompt("¿Cuánto pesas?"))

alert ("Quedan dos preguntitas más!")

//Nutricionista asignado
let alimentacion= prompt("¿Cómo es tu alimentación? (Vegan/ Veggie/ Completa)");
switch (alimentacion) {
    case 'Vegan':
        alert ('Tu nutricionista es Federico');
        break;
    case 'Veggie':
        alert ('Tu nutricionista es Andrea');
        break;
    case ('Completa'):
        alert ('Tu nutricionista es Lucia');
        break;
    default: 
        alert ('Opción no válida. Vuelva a intentar.');
        break;
}

//Entrenador asignado
let ejercicio= confirm("¿Queres realizar actividad física?")

let edad= parseInt(prompt("¿Cuántos años tenes?")); 
if (edad <= 20){
    alert ('Tu entrenador es Pedro.');
}
else if (edad <= 35){
    alert ('Tu entrenadora es Viviana.');
}
else {
    alert ('Tu entrenador es Pedro');
}

//if else (edad < 35) {
  //  alert ('Tu entrenador es Viviana.');}

//Alta de asesoría
let altaAsesoria= prompt('Ya fue registrado con éxito! Ingrese su e-mail y en breve nos ponemos en contacto')

//Objetivos para subir de peso
//Primer instancia
for (let i=1; i<=10; i++) {
    if (i==5) {
        console.log ('Aumentó', i, 'kg, continue trabajando!');
        continue;
    }
    alert (i);
}
//Segunda instancia
for (let i=10; i<=15; i++) {
    if(i==15) {
        console.log ('Llegó a su objetivo! Aumentó', i, 'kg propuestos. Excelente trabajo!');
        break;
    }
    alert (i);
}

//Objetivos para bajar de peso
//Primer instancia
for (let i=1; i>=10; i++) {
    if(i==5) {
        console.log('Disminuyó', i, 'kg, continue trabajando!');
        continue;
    }
    alert (i);
}
//Segunda instancia
for (let i=10; i>=15; i++) {
    if(i==15) {
        console.log ('Llegó a su objetivo! Disminuyó', i, 'kg propuestos. Excelente trabajo!');
        break;
    }
    alert (i);
}
//Avanzado
let objetivoCumplido= 'bajar de paso';
function cumplirNuevoObj (){
    var otroObjetivo= 'aumentar masa muscular';
    console.log ('Mi nuevo objetivo es'+ otroObjetivo)
}

//Plan Nutricionista de dieta Vegan-Federico
//Desayuno
const desayunoVegan1= ['chocolatada de leche vegetal', 'tostadas con palta y tomate', 'fruta']
    console.log (desayunoVegan1.join('-'))

const desayunoVegan2= ['cafe', 'yogur de soja con avena', 'fruta']
    console.log (desayunoVegan2.join('-'))

const desayunoVegan3= ['batido de frambuesa con leche vegetal', 'pan integral con tomate y semillas']
    desayuno3.push ('galleta de avena y pasas')
    console.log (desayunoVegan3.join('-'))

//Almuerzo
const almuerzoVegan1=['wrap de ensalada de garbanzos y aguacate']
    console.log (almuerzoVegan1)

const almuerzoVegan2=['sopa de albahaca y tomates asados']
    console.log (almuerzoVegan2)

const almuerzoVegan3=['quinoa con verduras', 'ensalada de garbanzos']
    console.log (almuerzoVegan3.join('-'))

//Cena
const cenaVegan1= ['pasta con hummus cremoso y vegetales']
    console.log(cenaVegan1)

const cenaVegan2= ['wok de verduras', 'albondigas de berenjena']
    console.log(cenaVegan2.join('-'))

const cenaVegan3= ['tortilla francesa rellena de espinacas', 'sopa de verduras']
    console.log(cenaVegan3.join('-'))

//Plan Nutricionista de dieta Veggie-Andrea
//Desayuno
const desayunoVeggie1=['cafe con bebida vegetal', 'tostada de pan integral', 'huevos revueltos', 'tomate troceado']
    console.log(desayunoVeggie1.join('-'))

const desayunoVeggie2=['batido de banana con leche vegetal', 'tortitas de avena', 'nueces y chocolate']
    console.log(desayunoVeggie2.join('-'))

const desayunoVeggie3=['yogur deslactosado con avena y frutos secos', 'fruta']
    console.log(desayunoVeggie3.join('-'))

//Almuerzo
const almuerzoVeggie1= ['mini tartas de calabacín y risotto con champiñones']
    almuerzoVeggie1.push('postre: fruta de estación')
    console.log(almuerzoVeggie1.join('-'))

const almuerzoVeggie2= ['ensalada de tomates cherry, pimiento rojo y verde, cebolla y quinoa']
    almuerzoVeggie2.push('postre: fruta de estación')
    console.log(almuerzoVeggie2.join('-'))
    
const almuerzoVeggie3= ['tallarines integrales', 'dados de tofu', 'con salteado de brócoli, zanahoria, berenjena, cebolla y semillas de sésamo']
    almuerzoVeggie3.push('postre: frutas de estación')
    console.log(almuerzoVeggie3.join('-'))

//Cena
const cenaVeggie1=['ensalada verde', 'tortilla de patatas']
    cenaVeggie1.push('postre: fruta de estación')
    console.log(cenaVeggie1.join('-'))

const cenaVeggie2=['ensalada de tomate, cebolla, pepino, aguacate, maíz y mozzarella', 'caldo de verduras con fideos']
    cenaVeggie2.push('postre: fruta de estación')
    console.log(cenaVeggie2.join('-'))

const cenaVeggie3=['Pizza de coliflor']
    cenaVeggie3.push('postre: fruta de estación')
    console.log(cenaVeggie3)

//Plan Nutricionista de dieta Completa-Lucia
//Desayuno
const desayunoCompl1=['cafe', 'tostadas con huevo revuelto, palta y tomate']
    desayunoCompl1.push('porción de fruta')
    console.log(desayunoCompl1.join('-'))

const desayunoCompl2=['mate', 'facturas']
    desayunoCompl2.pop()
    desayunoCompl2.push('tortitas de avena', 'porcion de frutos secos')
    console.log(desayunoCompl2.join('-'))

const desayunoCompl3=['wok de yogur con avena, frutos secos y fruta']
    desayunoCompl3.unshift('insufión a elección')
    console.log(desayunoCompl3.join('-'))

//Almuerzo
const almuerzoCompl1=['pollo a la plancha', 'arroz y verduras']
    almuerzoCompl1.push('postre: flan')
    console.log(almuerzoCompl1.join('-'))

const almuerzoCompl2=['ensalada de cuscus con manzana y pollo']
    almuerzoCompl2.push('postre: fruta de estación')
    console.log(almuerzoCompl2)

const almuerzoCompl3=['albondigas de soja', 'quinoa con verduras']
    almuerzoCompl3.push('postre: brownie de frutas')
    console.log(almuerzoCompl3,join('-'))

//Cena
const cenaCompl1=['salteado de verdura', 'ternera']
    console.log(cenaCompl1.join('-'))

const cenaCompl2=['tortilla de espinaca con cebolla y queso']
    console.log(cenaCompl2)

const cenaCompl3=['pasta con verduras', 'pollo']
    console.log(cenaCompl3.join('-'))

//Dato nutricional importante
//Para bajar de peso
function bajar (dato1, dato2) {
    console.log ('Para bajar de peso hay que'+ dato1 + 'y' + dato2)
}
bajar ('disminuir el consumo de azúcar', 'no ingerir alimentos procesados.')

//Para aumentar masa muscular
function subir (consejo1, consejo2) {
    console.log ('Para aumentar masa muscular hay que'+ consejo1 + 'y' + consejo2)
}
bajar ('ingerir muchas proteinas', 'grasas saludables.')

//Plan de entrenamineto-Pedro/Viviana
//Rutina de enfasis a un grupo muscular
//Lunes_Pectoral
const lunesPectoral={
    ejercicioPec1: 'calentar en eliptica',
    ejercicioPec2: 'press banca',
    ejercicioPec3: 'aperturas inclinadas',
    ejercicioPec4: 'sentadilla profunda',
    ejercicioPec5: 'dominadas lastradas',
    ejercicioPec6: 'press militar barra',
}

const ejercicioPec1={
    tiempo: '3 minutos',
}

const ejercicioPec2={
    series: '4',
    repeticiones: '6',
}

const ejercicioPec3={
    series: '4',
    repeticiones: '10, 8, 8, 6',
}

const ejercicioPec4={
    series: '3',
    repeticiones: '10, 8, 6',
}

const ejercicioPec5={
    series: '4',
    repeticiones: '10, 8, 8, 6',
}

const ejercicioPec6={
    series: '3',
    repeticiones: '10, 8, 8',
}

const rutLunesPect= [ejercicioPec1, ejercicioPec2, ejercicioPec3, ejercicioPec4, ejercicioPec5, ejercicioPec6]
    console.log(rutLunesPect)

//Miercoles_Pierna
const miercolesPierna={
    ejercicioPier1: 'calentar en cinta',
    ejercicioPier2: 'sentadillas en cajón',
    ejercicioPier3: 'prensa 45°',
    ejercicioPier4: 'press banca inclinado con mancuernas',
    ejercicioPier5: 'remo gironda',
    ejercicioPier6: 'elevaciones frontales',
    ejercicioPier7: 'elevaciones de talones de pie',
}

const ejercicioPier1={
    tiempo: '3 minutos',
}

const ejercicioPier2={
    series: '4',
    repeticiones: '10, 10, 8, 8',
}

const ejercicioPier3={
    series: '4',
    repeticiones: '8, 8, 6, 6',
}

const ejercicioPier4={
    series: '3',
    repeticiones: '8, 6, 6',
}

const ejercicioPier5={
    series: '4',
    repeticiones: '10, 8, 8, 6',
}

const ejercicioPier6={
    series: '3',
    repeticiones: '10, 10, 8',
}
const ejercicioPier7={
    series: '5',
    repeticiones: '20',
}

const rutMierPierna= [ejercicioPier1, ejercicioPier2, ejercicioPier3, ejercicioPier4, ejercicioPier5, ejercicioPier6, ejercicioPier7]
    console.log(rutMierPierna)

//Viernes_Espalda
const viernesEspalda={
    ejercicioEsp1: 'calentar en eliptica',
    ejercicioEsp2: 'dominadas neutras lastradas',
    ejercicioEsp3: 'remo en punta',
    ejercicioEsp4: 'extensiones de cuadriceps',
    ejercicioEsp5: 'curl femoral',
    ejercicioEsp6: 'flexiones de suelo',
    ejercicioEsp7: 'fondos paralelas',
    ejercicioEsp8: 'encogimientos dobles',
    ejercicioEsp9: 'elevacion de piernas',
}

const ejercicioEsp1={
    tiempo: '3 minutos',
}

const ejercicioEsp2={
    series: '4',
    repeticiones: '6',
}  

const ejercicioEsp3={
    series: '4',
    repeticiones: '10, 8, 8, 6',
} 

const ejercicioEsp4={
    series: '4',
    repeticiones: '10, 10, 8, 6',
} 

const ejercicioEsp5={
    series: '4',
    repeticiones: '10, 10, 8, 8',
}

const ejercicioEsp6={
    series: '4',
    repeticiones: 'hasta el fallo',
}

const ejercicioEsp7={
    series: '4',
    repeticiones: 'hasta el fallo',
}

const ejercicioEsp8={
    series: '4',
    repeticiones: '20',
}

const ejercicioEsp9={
    series: '4',
    repeticiones: '20',
}

const rutVierEsp= [ejercicioEsp1, ejercicioEsp2, ejercicioEsp3, ejercicioEsp4, ejercicioEsp5,ejercicioEsp6, ejercicioEsp7, ejercicioEsp8, ejercicioEsp9 ]
    console.log(rutVierEsp)

//Rutina Clasica
//Lunes-Miercoles_Remos
const lunMier={
    ejercicioLunMier1: 'calentar en cinta',
    ejercicioLunMier2: 'sentadillas',
    ejercicioLunMier3: 'remo con barra con barra/mancuernas',
    ejercicioLunMier4: 'press militar con barra/mancuernas',
    ejercicioLunMier5: 'press de banca',
    ejercicioLunMier6: 'curl de biceps',
    ejercicioLunMier7: 'fondos paralelas',
    ejercicioLunMier8: 'elevaciones de talones con barra',
    ejercicioLunMier9: 'abdominales oblicuos y cortos',
}

const ejercicioLunMier1={
    tiempo: '3 minutos',
} 
const ejercicioLunMier2={
    series: '3',
    repeticiones: '12',
}  

const ejercicioLunMier3={
    series: '3',
    repeticiones: '12',
}  

const ejercicioLunMier4={
    series: '3',
    repeticiones: '12',
}  

const ejercicioLunMier5={
    series: '3',
    repeticiones: '12',
}  

const ejercicioLunMier6={
    series: '3',
    repeticiones: '12',
}  

const ejercicioLunMier7={
    series: '5',
    repeticiones: '10',
}  

const ejercicioLunMier8={
    series: '3',
    repeticiones: '20',
}  

const ejercicioLunMier9={
    series: '8',
    repeticiones: '20',
}  

const rutLunMier= [ejercicioLunMier1, ejercicioLunMier2, ejercicioLunMier3, ejercicioLunMier4, ejercicioLunMier5,ejercicioLunMier6, ejercicioLunMier7, ejercicioLunMier8, ejercicioLunMier9 ]
    console.log(rutLunMier)

//Viernes_Piernas
const viernes={
    ejercicioVier1: 'calentar en bicicleta',
    ejercicioVier2: 'sentadillas',
    ejercicioVier3: 'peso muerto',
    ejercicioVier4: 'press militar con barra/mancuernas',
    ejercicioVier5: 'press de banca con barra/mancuernas',
    ejercicioVier6: 'curl de biceps con barra/mancuernas',
    ejercicioVier7: 'fondos paralelas',
    ejercicioVier8: 'elevaciones de talones con barra',
    ejercicioVier9: 'abdominales oblicuos y cortos',
}

const ejercicioVier1={
    tiempo: '3 minutos',
} 

const ejercicioVier2={
    series: '3',
    repeticiones: '12',
}  

const ejercicioVier3={
    series: '3',
    repeticiones: '12',
}  

const ejercicioVier4={
    series: '3',
    repeticiones: '12',
}  

const ejercicioVier5={
    series: '3',
    repeticiones: '12',
}  

const ejercicioVier6={
    series: '3',
    repeticiones: '12',
}  

const ejercicioVier7={
    series: '5',
    repeticiones: '10',
}  

const ejercicioVier8={
    series: '3',
    repeticiones: '20',
}  

const ejercicioVier9={
    series: '8',
    repeticiones: '20',
}  

const rutViernes= [ejercicioVier1, ejercicioVier2, ejercicioVier3, ejercicioVier4, ejercicioVier5,ejercicioVier6, ejercicioVier7, ejercicioVier8, ejercicioVier9]
    console.log(rutViernes)

//Rutina avanzada
//Todos los días_Cuerpo completo
const avanzada={
    ejercicioAvanz1: 'calentar en bicicleta',
    ejercicioAvanz2: 'remo al menton',
    ejercicioAvanz3: 'press de banca',
    ejercicioAvanz4: 'premo mancuerna a una mano',
    ejercicioAvanz5: 'elevaciones laterales',
    ejercicioAvanz6: 'press inclinado',
    ejercicioAvanz7: 'extenciones de tríceps polea alta',
    ejercicioAvanz8: 'curl con barra',
    ejercicioAvanz9: 'curl con mancuerna sentado',
    ejercicioAvanz10: 'sentadillas',
    ejercicioAvanz11: 'pullover',
    ejercicioAvanz12: 'sentadilla profunda',
    ejercicioAvanz13: 'pullovers profundo',
    ejercicioAvanz14: 'peso muerto',
    ejercicioAvanz15: 'extensiones de tríceps en polea alta',
}

const ejercicioAvanz1={
    tiempo: '3 minutos',
} 

const ejercicioAvanz2={
    series: '3',
    repeticiones: '12',
} 

const ejercicioAvanz3={
    series: '3',
    repeticiones: '12',
} 

const ejercicioAvanz4={
    series: '3',
    repeticiones: '12',
}  

const ejercicioAvanz5={
    series: '3',
    repeticiones: '12',
}  

const ejercicioAvanz6={
    series: '3',
    repeticiones: '12',
}  

const ejercicioAvanz7={
    series: '3',
    repeticiones: '12',
}

const ejercicioAvanz8={
    series: '3',
    repeticiones: '12',
} 

const ejercicioAvanz9={
    series: '3',
    repeticiones: '12',
} 

const ejercicioAvanz10={
    series: '3',
    repeticiones: '12',
}  

const ejercicioAvanz11={
    series: '3',
    repeticiones: '12',
}

const ejercicioAvanz12={
    series: '1',
    repeticiones: '20',
}  

const ejercicioAvanz13={
    series: '1',
    repeticiones: '20',
} 

const ejercicioAvanz14={
    series: '2',
    repeticiones: '18',
}  

const ejercicioAvanz15={
    series: '2',
    repeticiones: '18',
} 

const rutAvanzada= [ejercicioAvanz1, ejercicioAvanz2, ejercicioAvanz3, ejercicioAvanz4, ejercicioAvanz5,ejercicioAvanz6, ejercicioAvanz7, ejercicioAvanz8, ejercicioAvanz9, ejercicioAvanz10, ejercicioAvanz11, ejercicioAvanz12, ejercicioAvanz13, ejercicioAvanz14, ejercicioAvanz15]
    console.log(rutAvanzada)
