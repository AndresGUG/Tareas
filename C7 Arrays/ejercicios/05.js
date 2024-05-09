function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código
  array.unshift(elemento)
  return array
}

arr=[1,2,3,4]
ele=0

console.log(agregarItemAlComienzoDelArray(arr,ele));

module.exports = agregarItemAlComienzoDelArray;
