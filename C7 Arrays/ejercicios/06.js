function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  invarr=[]
  for (var i = (array.length-1); i>=0; i--){
    invarr.push(array[i])
  }
  return invarr;
}

arr=[1,2,3]

console.log(invertirArray(arr))

module.exports = invertirArray;
