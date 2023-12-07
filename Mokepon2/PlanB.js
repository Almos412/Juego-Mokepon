//Funcion iniciar juego
const sectionReinicio = document.getElementById ("Reiniciar")
sectionReinicio.style.display = "none"
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById ("boton-reiniciar")
//Funcion seleccionar mascota jugador
const sectionMascota = document.getElementById ("seleccionar-mascota")
const spanMascotaJugador = document.getElementById ("mascota-jugador")
//Funcion seleccionar mascota enemigo
const spanMascotaEnemigo = document.getElementById ("mascota-enemigo")
//Funcion Combate
const spanVidasJugador = document.getElementById ("vidas-jugador")
const spanVidasEnemigo = document.getElementById ("vidas-enemigo")
const spanEmpates = document.getElementById ("num-empates")
const sectionAtaque = document.getElementById ("seleccionar-ataque")
//Funcion crear mensaje
const sectionMensajes = document.getElementById ("pelea")
const ataquesDelJugador = document.getElementById ("ataque-del-jugador")
const ataquesDelEnemigo = document.getElementById ("ataque-del-enemigo")
//Funcion crear mensaje final

//Iteracion Tarjetas
const contenedorTarjetas = document.getElementById ("contenedorTarjetas")
let inputHipodoge 
let inputRatigueya 
let inputCapipepo 
let inputLangostelvis
let inputTucapalma
let inputPydos

//Iteracion Ataques
const contenedorAtaques = document.getElementById ('contenedorAtaques')
let botonAtaqueFuego
let botonAtaqueAgua
let botonAtaqueTierra
let botones
let ataquesMokepon 
let ataquesMokeponEnemigo
let ataqueJugador1= []
let indexAtaqueJugador
let indexAtaqueEnemigo

//Ver Mapa en HTML
const sectionVerMapa = document.getElementById ('ver-mapa')
const mapa = document.getElementById ('mapa')
let lienzo = mapa.getContext ("2d")
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = "./Image/mokemap.webp"
let mascotaJugadorObjeto
let mascotaEnemigoObjeto
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
alturaQueBuscamos = anchoDelMapa * 800/1000
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

let mokepones = []
let mascotaJugador 
let mascotaEnemigo
let mascotaEnemigoTipo
let mascotaJugadorTipo
let opcionDeMokepones
let ataqueJugador = []
let ataqueEnemigo = []
let resultadoCombate
let victoriasJugador = 0
let victoriasEnemigo = 0
let empates = 0

class Mokepon {
    constructor(nombre, foto, vida, tipo, fotoMapa, x = 10, y = 10, x1= 400, y1= 150){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.fotoMapa = fotoMapa
        this.x = x
        this.y = y
        this.x1 = x1
        this.y1 = y1
        this.ancho = 80
        this.alto = 80
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        this.velocidadX1 = 0
        this.velocidadY1 = 0
        this.ataques = []
 }
}

let Hipodoge = new Mokepon('Hipodoge', './Image/mokepons_mokepon_hipodoge_attack.webp', 5, 'Venenoso', './Image/hipodoge.png')

let Capipepo = new Mokepon ('Capipepo', './Image/mokepons_mokepon_capipepo_attack.webp', 5, 'Roca', './Image/capipepo.png')

let Ratigueya = new Mokepon ('Ratigueya', './Image/mokepons_mokepon_ratigueya_attack.webp', 5, 'Roca', './Image/ratigueya.png')

let Langostelvis = new Mokepon ('Langostelvis', './Image/mokepons_mokepon_langostelvis_attack.png', 5, 'Aereo', './Image/langostelvis.png')

let Tucapalma = new Mokepon ('Tucapalma', './Image/mokepons_mokepon_tucapalma_attack.png', 5, 'Aereo', './Image/tucapalma.png')

let Pydos = new Mokepon ('Pydos', './Image/mokepons_mokepon_pydos_attack.png', 5, 'Venenoso', './Image/pydos.png')

Hipodoge.ataques.push(
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
)

Capipepo.ataques.push(
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
)

Ratigueya.ataques.push(
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
)

Langostelvis.ataques.push(
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
)

Tucapalma.ataques.push(
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
)

Pydos.ataques.push(
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
)

mokepones.push (Hipodoge, Capipepo, Ratigueya, Langostelvis, Tucapalma, Pydos)

function iniciarJuego (){
   
    sectionAtaque.style.display = "none"
    sectionVerMapa.style.display = 'none'

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input  type="radio" id=${Mokepon.nombre} name="mascota"/>
        <label class= "tarjeta-de-mokepon" for=${Mokepon.nombre} >
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.foto}  alt=${Mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
        inputHipodoge = document.getElementById("Hipodoge")
        inputRatigueya = document.getElementById("Ratigueya")
        inputCapipepo = document.getElementById("Capipepo")
        inputLangostelvis = document.getElementById ("Langostelvis")
        inputTucapalma = document.getElementById ("Tucapalma")
        inputPydos = document.getElementById ('Pydos')

    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener ("click", reinicio)
}

function seleccionarMascotaJugador(){
    sectionMascota.style.display = "none"
    sectionVerMapa.style.display = "flex"
   

    if (inputHipodoge.checked == true){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
        seleccionarMacotaEnemigo()

    } else if (inputRatigueya.checked == true){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
        seleccionarMacotaEnemigo()

    } else if (inputCapipepo.checked == true){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
        seleccionarMacotaEnemigo()

    } else if (inputLangostelvis.checked == true){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
        seleccionarMacotaEnemigo()
    
    }else if (inputTucapalma.checked == true){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
        seleccionarMacotaEnemigo()
    
    }else if (inputPydos.checked == true){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
        seleccionarMacotaEnemigo()
    
    }else{
        alert ("No seleccionaste a ninguno")
        spanMascotaJugador.innerHTML = " "
    }
    iniciarMapa()
    extraerAtaques (mascotaJugador)
    secuenciaAtaque()

}
function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min+1)+ min)
}



function seleccionarMacotaEnemigo(){
    let enemigo = aleatorio (0,mokepones.length - 1)
    mascotaEnemigo = mokepones [enemigo].nombre
    spanMascotaEnemigo.innerHTML= mascotaEnemigo
    mascotaEnemigoTipo = mokepones[enemigo].tipo
    ataquesMokeponEnemigo = mokepones[enemigo].ataques
    console.log(ataquesMokeponEnemigo)
    console.log (mascotaEnemigoTipo)
    
}     

function extraerAtaques (mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre){
         ataques = mokepones[i].ataques
         mascotaJugadorTipo= mokepones [i].tipo
        }
            
     }
    console.log (ataques)
    console.log (mascotaJugadorTipo)
    mostrarAtaques (ataques)

}


function mostrarAtaques (ataques){
ataques.forEach((ataque)=>{
ataquesMokepon= `
<button id= ${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
`
contenedorAtaques.innerHTML += ataquesMokepon
})


botones = document.querySelectorAll (".BAtaque")
}



function secuenciaAtaque (){
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e)=> {
            if (e.target.textContent === "🔥"){
                ataqueJugador.push ("FUEGO")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "🌊"){
                ataqueJugador.push ("AGUA")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled = true
            }else {
                ataqueJugador.push ("TIERRA")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()

        })
    })
}



//Etapa de ataques jugador



//Etapa ataques de enemigo
function ataqueAleatorioEnemigo (){
    let ataqueE = aleatorio (0, ataquesMokeponEnemigo.length -1)
 if (ataqueE == 0){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)
 }else if(ataqueE == 1){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)
 }else if(ataqueE == 2){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)
 }else if(ataqueE == 3){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)   
 }else if(ataqueE == 4){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)
 }   
 iniciarPelea ()
 console.log (ataqueEnemigo)
 console.log (ataqueE)
}   

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate ()
    }
}

function indexAmbosOponentes (jugador, enemigo){
    indexAtaqueJugador = ataqueJugador [jugador]
    indexAtaqueEnemigo = ataqueEnemigo [enemigo]
}

function combate (){
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo [index]){
            crearMensaje("Empate")
            indexAmbosOponentes (index, index)
            empates = empates + 1
            spanEmpates.innerHTML = empates
        } else if (ataqueJugador [index] == "FUEGO" && ataqueEnemigo [index] == "TIERRA"||ataqueJugador [index] == "AGUA" && ataqueEnemigo [index] == "FUEGO"||ataqueJugador [index] == "TIERRA" && ataqueEnemigo [index] == "AGUA"){
            crearMensaje("Ganaste")
            indexAmbosOponentes (index, index)
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
        crearMensaje("Perdiste") 
        indexAmbosOponentes (index, index)
        victoriasEnemigo ++   
        spanVidasEnemigo.innerHTML  = victoriasEnemigo
        }
    }
    finalCombate()

}
function crearMensaje (resultadoCombate){
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoCombate
    
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
  
    ataquesDelJugador.appendChild (nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild (nuevoAtaqueDelEnemigo)
   
    

}

function crearMensajeFinal (resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal 
    sectionReinicio.style.display = "block"
}

function finalCombate (){
    if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("Has ganado 💪🏼")
    }else if (victoriasJugador < victoriasEnemigo){
        crearMensajeFinal("Has perdido 💀")
    }else if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal ("Es un empate 🤝🏼")
    }

}

function reinicio(){
    location.reload()
}

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    mascotaEnemigoObjeto.x1 = mascotaEnemigoObjeto.x1 + mascotaEnemigoObjeto.velocidadX1
    mascotaEnemigoObjeto.y1 = mascotaEnemigoObjeto.y1 + mascotaEnemigoObjeto.velocidadY1
    lienzo.clearRect (0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    lienzo.drawImage(
        mascotaJugadorObjeto.mapaFoto, 
        mascotaJugadorObjeto.x, 
        mascotaJugadorObjeto.y, 
        mascotaJugadorObjeto.ancho, 
        mascotaJugadorObjeto.alto
        )
    lienzo.drawImage (
        mascotaEnemigoObjeto.mapaFoto,
        mascotaEnemigoObjeto.x1,
        mascotaEnemigoObjeto.y1,
        mascotaEnemigoObjeto.ancho,
        mascotaEnemigoObjeto.alto
    )
    if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !==0)
    revisarColision(mascotaEnemigoObjeto)
}

function moverDerecha (){
    mascotaJugadorObjeto.velocidadX = 5
  
}

function moverAbajo (){
    mascotaJugadorObjeto.velocidadY = 5
}

function moverIzquierda (){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba (){
    mascotaJugadorObjeto.velocidadY = -5
}


function moverDerechaEnemigo (){
    mascotaEnemigoObjeto.velocidadX1 = 5
  
}

function moverAbajoEnemigo (){
    mascotaEnemigoObjeto.velocidadY1 = 5
}

function moverIzquierdaEnemigo (){
    mascotaEnemigoObjeto.velocidadX1 = -5
}

function moverArribaEnemigo (){
    mascotaEnemigoObjeto.velocidadY1 = -5
}


function detenerMovimiento (){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
    mascotaEnemigoObjeto.velocidadX1 = 0
    mascotaEnemigoObjeto.velocidadY1 = 0
}

function sePresionoUnaTecla (event){
    console.log (event.key)
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()
            break;
        case 'w':
            moverArribaEnemigo()
            break;
        case 's':
            moverAbajoEnemigo()
            break;
        case 'a':
            moverIzquierdaEnemigo()
            break;
        case 'd':
            moverDerechaEnemigo ()                    
        default:
            break;
    }
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota (mascotaJugador)
    mascotaEnemigoObjeto = obtenerObjetoEnemigo (mascotaEnemigo)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener ('keydown', sePresionoUnaTecla)
    window.addEventListener ('keyup', detenerMovimiento)
}

function obtenerObjetoMascota (){
    for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre){
         return mokepones [i]
        }
    } 
}

function obtenerObjetoEnemigo (){
    for (let i = 0; i < mokepones.length; i++) {
    if (mascotaEnemigo === mokepones[i].nombre){
    return mokepones [i] 
}   
}
}

function revisarColision (enemigo){
    const arribaEnemigo = enemigo.y1
    const abajoEnemigo = enemigo.y1 + enemigo.alto
    const izquierdaEnemigo = enemigo.x1
    const derechaEnemigo = enemigo.x1 + enemigo.ancho

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const izquierdaMascota = mascotaJugadorObjeto.x
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho

    if (abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo ){
        return
    }else {
        alert ("Hay colisión con " +enemigo.nombre)
        detenerMovimiento()
        sectionVerMapa.style.display = "none"
        sectionAtaque.style.display = "flex"
        
    }
}
window.addEventListener("load", iniciarJuego)




//Funcion iniciar juego
const sectionReinicio = document.getElementById ("Reiniciar")
sectionReinicio.style.display = "none"
const botonMascotaJugador = document.getElementById("boton-mascota")
const botonReiniciar = document.getElementById ("boton-reiniciar")
//Funcion seleccionar mascota jugador
const sectionMascota = document.getElementById ("seleccionar-mascota")
const spanMascotaJugador = document.getElementById ("mascota-jugador")
//Funcion seleccionar mascota enemigo
const spanMascotaEnemigo = document.getElementById ("mascota-enemigo")
//Funcion Combate
const spanVidasJugador = document.getElementById ("vidas-jugador")
const spanVidasEnemigo = document.getElementById ("vidas-enemigo")
const spanEmpates = document.getElementById ("num-empates")
const sectionAtaque = document.getElementById ("seleccionar-ataque")
//Funcion crear mensaje
const sectionMensajes = document.getElementById ("pelea")
const ataquesDelJugador = document.getElementById ("ataque-del-jugador")
const ataquesDelEnemigo = document.getElementById ("ataque-del-enemigo")
//Funcion crear mensaje final

//Iteracion Tarjetas
const contenedorTarjetas = document.getElementById ("contenedorTarjetas")
let inputHipodoge 
let inputRatigueya 
let inputCapipepo 
let inputLangostelvis
let inputTucapalma
let inputPydos

//Iteracion Ataques
const contenedorAtaques = document.getElementById ('contenedorAtaques')
let botonAtaqueFuego
let botonAtaqueAgua
let botonAtaqueTierra
let botones
let ataquesMokepon 
let ataquesMokeponEnemigo
let ataqueJugador1= []
let indexAtaqueJugador
let indexAtaqueEnemigo

//Ver Mapa en HTML
const sectionVerMapa = document.getElementById ('ver-mapa')
const mapa = document.getElementById ('mapa')
let lienzo = mapa.getContext ("2d")
let intervalo 
let mapaBackground = new Image()
mapaBackground.src = "./Image/mokemap.webp"
let mascotaJugadorObjeto
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 500
if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}
alturaQueBuscamos = anchoDelMapa * 600/800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos


let mokepones = []
let mokeponesEnemigos = []
let mascotaJugador 
let mascotaEnemigo
let mascotaEnemigoTipo
let mascotaJugadorTipo
let opcionDeMokepones
let ataqueJugador = []
let ataqueEnemigo = []
let resultadoCombate
let victoriasJugador = 0
let victoriasEnemigo = 0
let empates = 0

class Mokepon {
    constructor(nombre, foto, vida, tipo, fotoMapa, x = 10, y = 10, id = null){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.fotoMapa = fotoMapa
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio (20, mapa.width - this.ancho )
        this.y = aleatorio (20, mapa.height - this.alto)
        this.id = id
        //this.x1 = aleatorio (20, mapa.width - this.ancho )
        //this.y1 = aleatorio (20, mapa.height - this.alto) 
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
        this.ataques = []
 }

 pintarMokepon(){
 lienzo.drawImage(
    this.mapaFoto, 
    this.x, 
    this.y, 
    this.ancho, 
    this.alto
    )
 }

pintarMokeponEnemigo(){
    lienzo.drawImage(
        this.mapaFoto, 
        this.x, 
        this.y, 
        this.ancho, 
        this.alto
        )
}    
}

let Hipodoge = new Mokepon('Hipodoge', './Image/mokepons_mokepon_hipodoge_attack.webp', 5, 'Venenoso', './Image/hipodoge.png')

let Capipepo = new Mokepon ('Capipepo', './Image/mokepons_mokepon_capipepo_attack.webp', 5, 'Roca', './Image/capipepo.png')

let Ratigueya = new Mokepon ('Ratigueya', './Image/mokepons_mokepon_ratigueya_attack.webp', 5, 'Roca', './Image/ratigueya.png')

let Langostelvis = new Mokepon ('Langostelvis', './Image/mokepons_mokepon_langostelvis_attack.png', 5, 'Aereo', './Image/langostelvis.png')

let Tucapalma = new Mokepon ('Tucapalma', './Image/mokepons_mokepon_tucapalma_attack.png', 5, 'Aereo', './Image/tucapalma.png')

let Pydos = new Mokepon ('Pydos', './Image/mokepons_mokepon_pydos_attack.png', 5, 'Venenoso', './Image/pydos.png')

let HipodogeEnemigo = new Mokepon('Hipodoge', './Image/mokepons_mokepon_hipodoge_attack.webp', 5, 'Venenoso', './Image/hipodoge.png')

let CapipepoEnemigo = new Mokepon ('Capipepo', './Image/mokepons_mokepon_capipepo_attack.webp', 5, 'Roca', './Image/capipepo.png')

let RatigueyaEnemigo = new Mokepon ('Ratigueya', './Image/mokepons_mokepon_ratigueya_attack.webp', 5, 'Roca', './Image/ratigueya.png')

let LangostelvisEnemigo = new Mokepon ('Langostelvis', './Image/mokepons_mokepon_langostelvis_attack.png', 5, 'Aereo', './Image/langostelvis.png')

let TucapalmaEnemigo = new Mokepon ('Tucapalma', './Image/mokepons_mokepon_tucapalma_attack.png', 5, 'Aereo', './Image/tucapalma.png')

let PydosEnemigo = new Mokepon ('Pydos', './Image/mokepons_mokepon_pydos_attack.png', 5, 'Venenoso', './Image/pydos.png' )

const HIPODOGE_ATAQUES =[
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
]

Hipodoge.ataques.push(...HIPODOGE_ATAQUES)

const CAPIPEPO_ATAQUES =[
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
]

Capipepo.ataques.push(...CAPIPEPO_ATAQUES)

const RATIGUEYA_ATAQUES =[
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
]

Ratigueya.ataques.push(...RATIGUEYA_ATAQUES)

const LANGOSTELVIS_ATAQUES =[
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
]

Langostelvis.ataques.push(...LANGOSTELVIS_ATAQUES)

const TUCAPALMA_ATAQUES = [
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
]

Tucapalma.ataques.push(...TUCAPALMA_ATAQUES)

PYDOS_ATAQUES = [
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
]

Pydos.ataques.push(...PYDOS_ATAQUES)

HipodogeEnemigo.ataques.push(...HIPODOGE_ATAQUES)

CapipepoEnemigo.ataques.push(...CAPIPEPO_ATAQUES)

RatigueyaEnemigo.ataques.push(...RATIGUEYA_ATAQUES)

LangostelvisEnemigo.ataques.push(...LANGOSTELVIS_ATAQUES)

TucapalmaEnemigo.ataques.push(...TUCAPALMA_ATAQUES)

PydosEnemigo.ataques.push(...PYDOS_ATAQUES)

mokepones.push (Hipodoge, Capipepo, Ratigueya, Langostelvis, Tucapalma, Pydos)

function iniciarJuego (){
   
    sectionVerMapa.style.display = 'none'
    sectionAtaque.style.display = "none"

    mokepones.forEach((Mokepon) => {
        opcionDeMokepones = `
        <input  type="radio" id=${Mokepon.nombre} name="mascota"/>
        <label class= "tarjeta-de-mokepon" for=${Mokepon.nombre} >
            <p>${Mokepon.nombre}</p>
            <img src=${Mokepon.foto}  alt=${Mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones
        inputHipodoge = document.getElementById("Hipodoge")
        inputRatigueya = document.getElementById("Ratigueya")
        inputCapipepo = document.getElementById("Capipepo")
        inputLangostelvis = document.getElementById ("Langostelvis")
        inputTucapalma = document.getElementById ("Tucapalma")
        inputPydos = document.getElementById ('Pydos')

    })

    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)
    botonReiniciar.addEventListener ("click", reinicio)

    
}



function seleccionarMascotaJugador(){
    sectionMascota.style.display = "none"
    sectionVerMapa.style.display = "flex"
   

    
    if (inputHipodoge.checked == true){
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id

    } else if (inputRatigueya.checked == true){
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id

    } else if (inputCapipepo.checked == true){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id

    } else if (inputLangostelvis.checked == true){
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    
    }else if (inputTucapalma.checked == true){
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    
    }else if (inputPydos.checked == true){
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    
    }else{
        alert ("No seleccionaste a ninguno")
        spanMascotaJugador.innerHTML = " "
    }
    

    iniciarMapa()
    extraerAtaques (mascotaJugador)
    secuenciaAtaque()

}


function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min+1)+ min)
}



function seleccionarMacotaEnemigo(mascotaEnemigo){
let mokeponEnemigo 
mokeponEnemigo = mascotaEnemigo.nombre
spanMascotaEnemigo.innerHTML= mokeponEnemigo
mascotaEnemigoTipo = mascotaEnemigo.tipo
ataquesMokeponEnemigo = mascotaEnemigo.ataques
console.log(ataquesMokeponEnemigo)
console.log (mascotaEnemigoTipo)
}     

function extraerAtaques (mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre){
         ataques = mokepones[i].ataques
         mascotaJugadorTipo= mokepones [i].tipo


        }
            
     }
    console.log (ataques)
    console.log (mascotaJugadorTipo)
    mostrarAtaques (ataques)

}


function mostrarAtaques (ataques){
ataques.forEach((ataque)=>{
ataquesMokepon= `
<button id= ${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
`
contenedorAtaques.innerHTML += ataquesMokepon
})


botones = document.querySelectorAll (".BAtaque")
}

function secuenciaAtaque (){
    botones.forEach((boton) =>{
        boton.addEventListener("click", (e)=> {
            if (e.target.textContent === "🔥"){
                ataqueJugador.push ("FUEGO")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "🌊"){
                ataqueJugador.push ("AGUA")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled = true
            }else {
                ataqueJugador.push ("TIERRA")
                console.log(ataqueJugador)
                boton.style.background= "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()


        })
    })
}



//Etapa de ataques jugador



//Etapa ataques de enemigo
function ataqueAleatorioEnemigo (){
    seleccionarMacotaEnemigo(CapipepoEnemigo)
    seleccionarMacotaEnemigo(HipodogeEnemigo)
    seleccionarMacotaEnemigo(RatigueyaEnemigo)
    seleccionarMacotaEnemigo (Tucapalma)
    seleccionarMacotaEnemigo (LangostelvisEnemigo)
    seleccionarMacotaEnemigo (PydosEnemigo)
    let ataqueE = aleatorio (0, ataquesMokeponEnemigo.length -1)
 if (ataqueE == 0){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)
 }else if(ataqueE == 1){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)
 }else if(ataqueE == 2){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)
 }else if(ataqueE == 3){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)   
 }else if(ataqueE == 4){
    ataqueEnemigo.push (ataquesMokeponEnemigo [ataqueE].poder)
 }   
 iniciarPelea ()
 console.log (ataqueEnemigo.push)
 console.log (ataqueE)
}   

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate ()
    }
}

function indexAmbosOponentes (jugador, enemigo){
    indexAtaqueJugador = ataqueJugador [jugador]
    indexAtaqueEnemigo = ataqueEnemigo [enemigo]
}

function combate (){
    clearInterval(intervalo)

    for (let index = 0; index < ataqueJugador.length; index++) {
        if (ataqueJugador[index] === ataqueEnemigo [index]){
            crearMensaje("Empate")
            indexAmbosOponentes (index, index)
            empates = empates + 1
            spanEmpates.innerHTML = empates
        } else if (ataqueJugador [index] == "FUEGO" && ataqueEnemigo [index] == "TIERRA"||ataqueJugador [index] == "AGUA" && ataqueEnemigo [index] == "FUEGO"||ataqueJugador [index] == "TIERRA" && ataqueEnemigo [index] == "AGUA"){
            crearMensaje("Ganaste")
            indexAmbosOponentes (index, index)
            victoriasJugador ++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
        crearMensaje("Perdiste") 
        indexAmbosOponentes (index, index)
        victoriasEnemigo ++   
        spanVidasEnemigo.innerHTML  = victoriasEnemigo
        }
    }
    finalCombate()

}
function crearMensaje (resultadoCombate){
    
    
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultadoCombate
    
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
  
    ataquesDelJugador.appendChild (nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild (nuevoAtaqueDelEnemigo)
   
    

}

function crearMensajeFinal (resultadoFinal){
    
    sectionMensajes.innerHTML = resultadoFinal 
    sectionReinicio.style.display = "block"
}

function finalCombate (){
    if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("Has ganado 💪🏼")
    }else if (victoriasJugador < victoriasEnemigo){
        crearMensajeFinal("Has perdido 💀")
    }else if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal ("Es un empate 🤝🏼")
    }

}

function reinicio(){
    location.reload()
}

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect (0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
mascotaJugadorObjeto.pintarMokepon()
HipodogeEnemigo.pintarMokeponEnemigo()
CapipepoEnemigo.pintarMokeponEnemigo()
RatigueyaEnemigo.pintarMokeponEnemigo()
LangostelvisEnemigo.pintarMokeponEnemigo()
TucapalmaEnemigo.pintarMokeponEnemigo()
PydosEnemigo.pintarMokeponEnemigo()
if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
    revisarColision(HipodogeEnemigo)
    revisarColision (CapipepoEnemigo)
    revisarColision (RatigueyaEnemigo)
    revisarColision (LangostelvisEnemigo)
    revisarColision (TucapalmaEnemigo)
    revisarColision (PydosEnemigo)
}

}



function moverDerecha (){
    mascotaJugadorObjeto.velocidadX = 5
  
}

function moverAbajo (){
    mascotaJugadorObjeto.velocidadY = 5
}

function moverIzquierda (){
    mascotaJugadorObjeto.velocidadX = -5
}

function moverArriba (){
    mascotaJugadorObjeto.velocidadY = -5
}


function detenerMovimiento (){
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla (event){
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break;
        case 'ArrowDown':
            moverAbajo()
            break;
        case 'ArrowLeft':
            moverIzquierda()
            break;
        case 'ArrowRight':
            moverDerecha()                 
        default:
            break;
    }
    console.log (event.key)
}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota (mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener ('keydown', sePresionoUnaTecla)
    window.addEventListener ('keyup', detenerMovimiento)
}

function obtenerObjetoMascota (){
    for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre){
         return mokepones [i]
        }
    } 
}

function revisarColision(enemigo){
const arribaEnemigo = enemigo.y
const abajoEnemigo = enemigo.y + enemigo.alto
const derechaEnemigo = enemigo.x + enemigo.ancho
const izquierdaEnemigo = enemigo.x

const arribaMascota = mascotaJugadorObjeto.y
const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
const izquierdaMascota = mascotaJugadorObjeto.x

    if (abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo ){
      return  
    } else {
        detenerMovimiento()
        clearInterval(intervalo)
        alert ("Vas a pelear contra: "+enemigo.nombre)
        sectionVerMapa.style.display= "none"
        sectionAtaque.style.display = "flex"
    }
}

window.addEventListener("load", iniciarJuego)