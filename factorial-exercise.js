//Factorial of 8 (8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1) using recursion

function factorial(num){
    if(num === 1){
      return num;
    }
    return num * factorial(num - 1);
  }
  
  factorial(8);