function agregarItemAlFinalDelArray(array, elemento) {
  // Agrega el "elemento" al final del arreglo recibido.
  // Retorna el arreglo.
  // Tu código:
  array.push(elemento)
  return array
}

arr=[1,2,3,4]
ele='hola'

console.log(agregarItemAlFinalDelArray(arr,ele));


module.exports = agregarItemAlFinalDelArray;
