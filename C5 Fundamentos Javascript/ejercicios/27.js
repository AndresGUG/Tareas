function obtenerAreaRectangulo(alto, ancho) {
  // La función recibe dos argumentos llamados "alto" y "ancho" los cuales son numeros.
  // Retornar el área de un rectángulo teniendo su alto y ancho.
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 2 ---> 2 
  // Tu código:
  if (alto===0){
    console.log("No tiene area")
  } else if(ancho===0){
    console.log("No tiene area")
  }else {
    console.log(alto*ancho)
  }
}

obtenerAreaRectangulo(2,2);

obtenerAreaRectangulo(0,2);

obtenerAreaRectangulo(2,0);

obtenerAreaRectangulo(17, 20);

module.exports = obtenerAreaRectangulo;
