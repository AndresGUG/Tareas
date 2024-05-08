function combinarNombres(nombre, apellido) {
  // La función recibe dos argumentos llamados "nombre" y "apellido" los cuales son string.
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Por ejemplo: 
  // "Soy", "Henry" ---> "Soy Henry"
  // Tu código:
  var nombreCombinados = nombre+' '+apellido;
  return nombreCombinados
}

console.log(combinarNombres("Soy","Henry"));

module.exports = combinarNombres;
