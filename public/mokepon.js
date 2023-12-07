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
if (anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}
alturaQueBuscamos = anchoDelMapa * 600/800
mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

let mokeponesEnemigos = []
let jugadorId = null
let enemigoId = null

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
    constructor(nombre, foto, vida, tipo, fotoMapa, id = null){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.tipo = tipo
        this.fotoMapa = fotoMapa
        this.id = id
        this.ancho = 40
        this.alto = 40
        this.x = aleatorio(20, mapa.width - this.ancho)
        this.y = aleatorio(20, mapa.height - this.alto)
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

}

let Hipodoge = new Mokepon('Hipodoge', './Image/mokepons_mokepon_hipodoge_attack.webp', 5, 'Venenoso', './Image/hipodoge.png')

let Capipepo = new Mokepon ('Capipepo', './Image/mokepons_mokepon_capipepo_attack.webp', 5, 'Roca', './Image/capipepo.png')

let Ratigueya = new Mokepon ('Ratigueya', './Image/mokepons_mokepon_ratigueya_attack.webp', 5, 'Roca', './Image/ratigueya.png')

let Langostelvis = new Mokepon ('Langostelvis', './Image/mokepons_mokepon_langostelvis_attack.png', 5, 'Aereo', './Image/langostelvis.png')

let Tucapalma = new Mokepon ('Tucapalma', './Image/mokepons_mokepon_tucapalma_attack.png', 5, 'Aereo', './Image/tucapalma.png')

let Pydos = new Mokepon ('Pydos', './Image/mokepons_mokepon_pydos_attack.png', 5, 'Venenoso', './Image/pydos.png')


const HipodogeAtaques = [
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
]
Hipodoge.ataques.push(...HipodogeAtaques)

const CapipepoAtaques = [
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
]
Capipepo.ataques.push(...CapipepoAtaques)

const RatigueyaAtaques = [
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
]
Ratigueya.ataques.push(...RatigueyaAtaques)

const LangostelvisAtaques =[
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
]
Langostelvis.ataques.push(...LangostelvisAtaques)

const TucapalmaAtaques = [
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
]
Tucapalma.ataques.push(...TucapalmaAtaques)

const PydosAtaques = [
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🗻', id:'boton-tierra', poder: "TIERRA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🌊', id:'boton-agua', poder: "AGUA"},
    {nombre: '🔥', id:'boton-fuego', poder: "FUEGO"},
]
Pydos.ataques.push(...PydosAtaques)


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

    unirseAlJuego()
}

function unirseAlJuego(){
    fetch("http://Alvaros-MacBook-Pro.local:8080/unirse")
    .then(function (res){
        if(res.ok){
            res.text()
            .then(function(respuesta){
                console.log(respuesta)
                jugadorId = respuesta
            })
        }
    })
}

function seleccionarMascotaJugador(){
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
        return
    }
    sectionMascota.style.display = "none"
    sectionVerMapa.style.display = "flex"
    seleccionarMokepon(mascotaJugador)
    iniciarMapa()
    extraerAtaques (mascotaJugador)
    secuenciaAtaque()
    

}

function seleccionarMokepon(mascotaJugador){
fetch(`http://Alvaros-MacBook-Pro.local:8080/mokepon/${jugadorId}`, {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        mokepon: mascotaJugador
    })
})
console.log(mascotaJugador)
}

function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min+1)+ min)
}



function seleccionarMacotaEnemigo(enemigo){
    mascotaEnemigo = enemigo.nombre
    spanMascotaEnemigo.innerHTML= mascotaEnemigo
    mascotaEnemigoTipo = enemigo.tipo
    ataquesMokeponEnemigo = enemigo.ataques
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
            if (ataqueJugador.length === 5){
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques(){
    fetch(`http://Alvaros-MacBook-Pro.local:8080/mokepon/${jugadorId}/ataques`, {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques: ataqueJugador
        })
    })

    intervalo = setInterval(obtenerAtaques, 50)
}

function obtenerAtaques(){
    fetch(`http://Alvaros-MacBook-Pro.local:8080/mokepon/${enemigoId}/ataques`)
    .then(function(res){
        if (res.ok){
            res.json()
            .then (function({ataques}){
                if(ataques.length === 5){
                    ataqueEnemigo = ataques
                    combate()
                }
            })
        }
    })
}

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
 console.log (ataqueEnemigo)
 console.log (ataqueE)
}   

function iniciarPelea(){
    if (ataqueJugador.length === 5){
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

        enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y)

        mokeponesEnemigos.forEach(function(mokepon){
            mokepon.pintarMokepon()
            revisarColision(mokepon)
        })
    }

function enviarPosicion(x, y){
    fetch(`http://Alvaros-MacBook-Pro.local:8080/mokepon/${jugadorId}/posicion`, {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        x,
        y
    })
})
.then(function(res){
    if (res.ok){
        res.json()
            .then(function ({enemigos}){
                console.log(enemigos)
                mokeponesEnemigos = enemigos.map(function(enemigo){
                    let mokeponEnemigo = null
                    const mokeponNombre = enemigo.mokepon.nombre||""
                    if (mokeponNombre === "Hipodoge"){
                         mokeponEnemigo = new Mokepon('Hipodoge', './Image/mokepons_mokepon_hipodoge_attack.webp', 5, 'Venenoso', './Image/hipodoge.png', enemigo.id)
                    }else if (mokeponNombre === "Capipepo"){
                         mokeponEnemigo = new Mokepon ('Capipepo', './Image/mokepons_mokepon_capipepo_attack.webp', 5, 'Roca', './Image/capipepo.png', enemigo.id)
                    }else if (mokeponNombre === "Ratigueya"){
                         mokeponEnemigo = new Mokepon ('Ratigueya', './Image/mokepons_mokepon_ratigueya_attack.webp', 5, 'Roca', './Image/ratigueya.png', enemigo.id)
                    }else if(mokeponNombre === "Langostelvis"){
                         mokeponEnemigo = new Mokepon ('Langostelvis', './Image/mokepons_mokepon_langostelvis_attack.png', 5, 'Aereo', './Image/langostelvis.png', enemigo.id)
                    }else if(mokeponNombre === "Tucapalma"){
                         mokeponEnemigo = new Mokepon ('Tucapalma', './Image/mokepons_mokepon_tucapalma_attack.png', 5, 'Aereo', './Image/tucapalma.png', enemigo.id)
                    }else if(mokeponNombre === "Pydos"){
                         mokeponEnemigo = new Mokepon ('Pydos', './Image/mokepons_mokepon_pydos_attack.png', 5, 'Venenoso', './Image/pydos.png', enemigo.id)
                    }

                    mokeponEnemigo.x = enemigo.x
                    mokeponEnemigo.y= enemigo.y
                    return mokeponEnemigo

                })
                
            })
    }
})
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
    }
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


function revisarColision (enemigo){
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const izquierdaEnemigo = enemigo.x
    const derechaEnemigo = enemigo.x + enemigo.ancho

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const izquierdaMascota = mascotaJugadorObjeto.x
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho

    if (abajoMascota < arribaEnemigo || arribaMascota > abajoEnemigo || derechaMascota < izquierdaEnemigo || izquierdaMascota > derechaEnemigo ){
        return
    }else {
        detenerMovimiento()
        clearInterval(intervalo)
        console.log("Habrá pelea")
        enemigoId = enemigo.id
        seleccionarMacotaEnemigo(enemigo)
        sectionVerMapa.style.display = "none"
        sectionAtaque.style.display = "flex"
        
    }
}
window.addEventListener("load", iniciarJuego)