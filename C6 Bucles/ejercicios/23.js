function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  
  if(numero>0){
    for (var i=2;i<=Math.pow(numero,2);i++){
      if(numero%i === 0){
        return false;
      }else{
        return true;
      }
    }
  } else {
    return true;
  }
}

console.log(esNumeroPrimo(7));
console.log(esNumeroPrimo(19));
console.log(esNumeroPrimo(25));
console.log(esNumeroPrimo(3));

module.exports = esNumeroPrimo;
