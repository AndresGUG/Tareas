function esPositivo(num) {
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
  if (num>0){
    console.log("Es positivo");
  } else if (num<0){
    console.log("Es negativo");
  } else {
    console.log("Es 0")
  }
}

esPositivo(1);
esPositivo(-1);
esPositivo(0);

module.exports = esPositivo;