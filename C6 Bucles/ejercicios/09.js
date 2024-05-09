function conection(status) {
  // El argumento "status" representa el estado de conexión de un usuario.
  // Si el estado es igual a 1, el usuario está "Online".
  // Si el estado es igual a 2, el usuario está "Away".
  // De lo contrario, presumimos que el usuario está "Offline".
  // Retornar el estado de conexión del usuario.
  // Tu código:
  switch(status){
    case 1:
      console.log('Usuario esta Online');
      break
    case 2:
      console.log('Usuario esta Away');
      break
    default:
      console.log ('Usuario esta Offline')
      break
  }
}

conection(1);
conection(2);
conection(4);

module.exports = conection;
