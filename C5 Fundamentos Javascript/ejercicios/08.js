function esNumeroEntero(numero) {
  // La función recibe un argumento llamado numero.
  // Verifica si este es un número entero o no.
  // Retorna true si lo es, de lo contrario, retorna false.
  // Por ejemplo: 
  // 24 ---> true 
  // -1212 ---> true 
  // 121.212 ---> false 
  // Tu código:
  if(numero%1===0){
    console.log(true)
  } else {
    console.log(false)
  }
}

esNumeroEntero(24);

esNumeroEntero(-1212);

esNumeroEntero(121.212);

esNumeroEntero(10.000000000000001);

module.exports = esNumeroEntero;