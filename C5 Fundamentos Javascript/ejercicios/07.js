function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  if(valor==="string"){
    console.log("string")
  } else if(valor===1){
    console.log("number")
  } else if(valor===true){
    console.log("boolean")
  } else if(valor===Number){
    console.log("object")
  }else {
    console.log("No es string, number, boolean, o object")
  }
}

esTipoDato(1);

esTipoDato('string');

esTipoDato(true);

esTipoDato(Number);


module.exports = esTipoDato;