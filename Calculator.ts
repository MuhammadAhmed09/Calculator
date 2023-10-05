import * as readline from 'readline';

function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  
  function multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
  
  function divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return num1 / num2;
  }
  
  function getUserInput() {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question('Enter the first number: ', (num1) => {
      const n1 = parseFloat(num1);
  
      if (isNaN(n1)) {
        console.error('Invalid number. Please enter a valid number.');
        readline.close();
        return;
      }
  
      readline.question('Enter the operator (+, -, *, /): ', (operator) => {
        readline.question('Enter the second number: ', (num2) => {
          const n2 = parseFloat(num2);
  
          if (isNaN(n2)) {
            console.error('Invalid number. Please enter a valid number.');
            readline.close();
            return;
          }
  
          let result: number;
  
          switch (operator) {
            case '+':
              result = add(n1, n2);
              break;
            case '-':
              result = subtract(n1, n2);
              break;
            case '*':
              result = multiply(n1, n2);
              break;
            case '/':
              try {
                result = divide(n1, n2);
              } catch (error) {
                console.error(error.message);
                readline.close();
                return;
              }
              break;
            default:
              console.error('Invalid operator. Please use +, -, *, or /.');
              readline.close();
              return;
          }
  
          console.log(`Result: ${result}`);
          readline.close();
        });
      });
    });
  }
  
  console.log('Calculator');
  getUserInput();
  