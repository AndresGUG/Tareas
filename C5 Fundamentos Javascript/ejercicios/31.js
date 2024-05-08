// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
  console.log(Math.pow(num,2))
}

elevarAlCuadrado(5);

elevarAlCuadrado(-5);

elevarAlCuadrado(10);

module.exports = elevarAlCuadrado;
