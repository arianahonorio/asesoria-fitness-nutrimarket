//INICIO

let bienvenida= document.getElementById("bienvenida")
let banner= document.getElementById("banner")
let text= document.getElementById("text")

//FORMULARIO
let formulario= document.getElementById("form");
formulario.addEventListener('submit', validarFormulario);
function validarFormulario (e) {
    e.preventDefault ();
    localStorage.getItem("formulario", JSON.stringify(formulario))
    

    let inputNombre= document.getElementById("nombre")
    inputNombre.addEventListener('input', () => {
        inputNombre.value;
        localStorage.setItem("inputNombre", JSON.stringify(inputNombre))
    });

    let inputPeso= document.getElementById("peso")
    inputPeso.addEventListener('input', () => {
        inputPeso.value;
        localStorage.setItem("inputPeso", JSON.stringify(inputPeso))
    });

    let containerObjetivo= document.getElementsById("objetivo")
    const cartObjetivo = []

    function renderObjetivo (objetivoArray) {
        objetivoArray.forEach (objetivo => {
            const cardObj= document.createElement("div")
            cardObj.innerHTML= `<h3>${objetivo.lograr}</h3>
                            <button class="elegirObj" id="${objetivo.lograr}>Seleccionar</button>`
            containerObjetivo.appendChild(cardObj)
        })
        addToCartButtonObj()
    }
    renderObjetivo(objetivos)

    function addToCartButtonObj () {
        addButtonObj=document.querySelectorAll(".elegirObj")
        addButtonObj.forEach (button => {
            button.onclick= (e) => {
                const definirObjetivo= e.currentTarget.lograr
                const selectedObj= objetivos.find (objetivo => objetivo.lograr == definirObjetivo)
                cartObjetivo.push(selectedObj)
                localStorage.setItem("cartObjetivo", JSON.stringify(cartObjetivo))
            }
        })
    }
    
    let containerDieta= document.getElementsById("dieta")
    const cartAlimentacion = []
    
    function renderDieta(dietaArray) {
        dietaArray.forEach (dieta => {
            const card = document.createElement("div")
            card.innerHTML = `<h3>${dieta.alimentacion}</h3>
                        <button class="elegirDieta" id="${dieta.alimentacion}"> Elegir </button>`
            containerDieta.appendChild(card)
        })
        addToCartButton()
    }
    renderDieta(dietas)

    function addToCartButton () {
        addButton = document.querySelectorAll(".elegirdieta")
        addButton.forEach(button => {
            button.onclick = (e) => {
                const dietaAlimentacion = e.currentTarget.alimentacion
                const selectedDieta = dietas.find(dieta => dieta.alimentacion == dietaAlimentacion)
                cartAlimentacion.push(selectedDieta)
                localStorage.setItem("cartAlimentacion", JSON.stringify(cartAlimentacion))
                }
            })
        }

    let containerRutina= document.getElementById("rutina")
    
    const cartRutina=[]

    function renderRutina (rutinaArray) {
        rutinaArray.forEach (rutina => {
            const card1= document.createElement("div")
            card1.innerHTML=`<h3>${rutina.tipo}</h3>
                            <button class="elegirRutina" id="${rutina.tipo}">Elegir</button>`
            containerRutina.appendChild(card1)
        })
        addToCartButton1()
    }
    renderRutina(rutinas)

    function addToCartButton1 () {
        addButton1= document.querySelectorAll(".elegirRutina")
        addButton1.forEach(button => {
            button.onclick = (e) => {
                const rutinaTipo = e.currentTarget.tipo
                const selectedRutina = rutinas.find(rutina => rutina.tipo == rutinaTipo)
                cartRutina.push(selectedRutina)
                localStorage.setItem("cartRutina", JSON.stringify(cartRutina))
            }
        })
    }
    
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
    }

const dietas= [
    {
    alimentacion:'Vegan',
    nutricionista:'Federico',
    desayuno1:'chocolatada de leche vegetal, tostadas con palta y tomate, fruta ',
    desayuno2:'cafe, yogur de soja con avena, fruta',
    desayuno3:'batido de fruta con leche vegetal, pan integral con tomate y semillas',
    almuerzo1:'wrap de ensalada de garbanzos y palta',
    almuerzo2:'sopa de albahaca y tomates asados',
    almuerzo3:'quinoa con verduras y ensalada de garbanzos',
    cena1:'pasta con hummus cremoso y vegetales',
    cena2:'wok de verduras, albondigas de berenjena',
    cena3:'tortilla rellena de espinaca, sopa de verduras',
    },{
    alimentacion:'Veggie',
    nutricionista:'Andrea',
    desayuno1:'cafe con bebida vegetal, tostada de pan integral con huevos revueltos y tomate troceado',
    desayuno2:'batido de banana con leche vegetal, tortitas de avena, nueces y chocolate',
    desayuno3:'yogur deslactosado con avena y frutos secos, fruta',
    almuerzo1:'mini tartas de calabacín y risotto con champiñones',
    almuerzo2:'ensalada de tomates cherry, pimiento rojo y verde, cebolla y quinoa',
    almuerzo3:'tallarines integrales, dados de tofu, con salteado de brócoli, zanahoria, berenjena, cebolla y semillas de sésamo',
    cena1:'pizza de coliflor',
    cena2:'ensalada verde, tortilla de patatas',
    cena3:'ensalada de tomate, cebolla, pepino, aguacate, maíz y mozzarella, caldo de verduras con fideos',
    },{
    alimentacion:'Completa',
    nutricionista:'Lucia',
    desayuno1:'cafe, tostadas con huevo revuelto, palta y tomate, porción de fruta',
    desayuno2:'tortitas de avena, porción de frutos secos',
    desayuno3:'insufión a elección, wok de yogur con avena, frutos secos y fruta',
    almuerzo1:'pollo a la plancha, arroz y verduras',
    almuerzo2:'ensalada de cuscus con manzana y pollo',
    almuerzo3:'albondigas de soja, quinoa con verduras',
    cena1:'salteado de verdura, ternera',
    cena2:'tarta de espinaca con cebolla y queso',
    cena3:'pasta con verduras, pollo',
    },
]

const rutinas= [
    {
        tipo:'con enfasis',
        entrenador:'Andres',
        lunes:'1-press banca/ 2-aperturas inclinadas/ 3-sentadilla profunda/ 4-press militar barra/ 5-dominadas lastradas',
        miercoles:'1-sentadillas/ 2-prensa 45°/ 3-press banca inclinado con mancuernas/ 4-remo/ 5-elevaciones frontales',
        viernes:'1-remo/ 2-extensiones de cuadriceps/ 3-curl femoral/ 4-flexiones en suelo/ 5-elevacion de piernas',
        series: 4,
        repeticiones: 12,
    },{
        tipo:'clasica',
        entrenador:'Viviana',
        lunes:'1-sentadilla/ 2-remo con barra/ 3-press militar con barra/ 4- press banca/ 5- curl biceps/ 6-abs oblicuos',
        miercoles:'1-sentadilla/ 2-remo con barra/ 3-press militar con barra/ 4- press banca/ 5- curl biceps/ 6-abs oblicuos',
        viernes:'1-sentadillas/ 2-peso muerto/ 3-press militar con barra/ 4-press banca/ 5- curl de biceps/ 6- abs oblicuos y cortos',
        series: 3,
        repeticiones: 12,
    },{
        tipo:'avanzada',
        entrenador:'Natalia',
        lunes:'1-remo al menton/ 2-press banca/ 3-remo a una mano/ 4-elevaciones laterales/ 5- ext de triceps/ 6-sentadilla profunca/ 7- peso muerto',
        miercoles:'1-remo al menton/ 2-press banca/ 3-remo a una mano/ 4-elevaciones laterales/ 5- ext de triceps/ 6-sentadilla profunca/ 7- peso muerto',
        viernes:'1-remo al menton/ 2-press banca/ 3-remo a una mano/ 4-elevaciones laterales/ 5- ext de triceps/ 6-sentadilla profunca/ 7- peso muerto',
        series: 3,
        repeticiones: '10-hasta el fallo',
    }
]

const objetivos=[{
    lograr:"Bajar de peso",
},{
    lograr:"Aumentar masa muscular",
}]