function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:

switch(numero){
  case 1:
    console.log('Lunes')
    break
  case 2:
    console.log('Martes')
    break
  case 3:
    console.log('Miercoles')
    break
  case 4:
    console.log('Jueves')
    break
  case 5:
    console.log('Viernes')
    break
  case 6:
    console.log('Sabado')
    break
  case 7:
    console.log('Domingo')
    break
  default:
    console.log('No es un dia de la semana')
  }
}
obtenerDiaSemana(3);


module.exports = obtenerDiaSemana;