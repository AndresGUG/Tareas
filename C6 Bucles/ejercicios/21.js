function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  var pot = numero
  var counter = 0
  while(pot>=2){
    pot=pot/2
    counter++
  }
console.log(2, '^',counter, '=', numero)
}

esPotenciaDeDos(32);
module.exports = esPotenciaDeDos;
