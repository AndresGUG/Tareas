function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var tres = num/100
  if(tres<10 && tres >= 1) console.log(true)
    else console.log(false)
}


tieneTresDigitos(100);
tieneTresDigitos(1000);

module.exports = tieneTresDigitos;
