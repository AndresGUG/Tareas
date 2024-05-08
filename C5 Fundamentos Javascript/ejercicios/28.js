function retornarPerimetro(lado) {
   // La función recibe un argumento llamado lado el cual es un numero.
   // Retornar el perimetro de un cuadrado.
   // Por ejemplo: 
   // 2 ---> 8
   // 0 ---> 0
   // Tu código:
   var perimetro=lado*4
   return perimetro
}

console.log(retornarPerimetro(2));

console.log(retornarPerimetro(4));

module.exports = retornarPerimetro;
