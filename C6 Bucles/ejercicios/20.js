function sumarHastaNConBreak(n) {
   // La función recibe un numero n por argumento.
   // Devuelve la suma de todos los números desde 1 hasta n.
   // Si la suma supera a 100, detén el bucle usando break.
   // Tu código:
   suma = 0
   for(var i=0; i<=n; i++){
      if(suma<100){
         suma=suma+i;
      }else{
         break;
      }
   }
    console.log(suma);
}

sumarHastaNConBreak(5);
sumarHastaNConBreak(50);

module.exports = sumarHastaNConBreak;
