function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if(x>y || x===y) console.log(x)
    else console.log(y)
}

obtenerMayor(1, 2);
obtenerMayor(1, 1);
obtenerMayor(2, 1);

module.exports = obtenerMayor;
