function combate (pc, jugador){
    let final= ""
    if (jugador - pc == 1 || jugador - pc == -2){
    final = "Ganaste"
    triunfos = triunfos + 1
    } else if (jugador == pc){
        final= "Empate"
        empates = empates + 1
    } else{
        final = "Perdiste"
        perdidas = perdidas + 1
    }
    return final
}
function eleccion (jugada){
        let resultado = ""
        if(jugada == 1) {
        resultado = "Piedra"
    } else if(jugada == 2) {
        resultado = "Papel"
    } else if(jugada == 3) {
        resultado = "Tijera"
    } else {
        resultado = "Mala elección"
    }
    return resultado
}
function aleatorio (min, max){
    return Math.floor(Math.random()*(max-min+1)+ min)
}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0
let min = 1
let max = 3
let pc = 0
let empates = 0
let triunfos = 0
let perdidas = 0

while (triunfos < 3 && perdidas < 3){
        pc = aleatorio (1,3)
    jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
    //alert("Elegiste " + jugador)
    alert("Elegiste: " + eleccion(jugador))
    alert("La pc eligió: " + eleccion(pc))
    //Codigo de COMBATE
    alert ("Tu: " + combate(pc, jugador))
}
alert ("El número de veces que has ganado es: " + triunfos    +  ", Perdiste estas veces: " + perdidas + ", El número de veces que empataste es: " + empates)