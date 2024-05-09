function fizzBuzz(num) {
  // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
  if(num%5===0 || num%3===0){
    if(num%5===0 && num%3===0){
      console.log('fizzbuzz')
    }else if(num%5===0 && !(num%3==0)){
      console.log('buzz')
    }else{
      console.log('fizz')
    }
  }else{
    console.log('false')
  }
}

fizzBuzz(5);
fizzBuzz(3);
fizzBuzz(15);
fizzBuzz(1);




module.exports = fizzBuzz;
