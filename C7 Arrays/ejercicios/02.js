function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  var ult=array.length-1
  return (array[ult])
}

var arr=[1,2,3,4]

console.log(devolverUltimoElemento(arr))

module.exports = devolverUltimoElemento;
