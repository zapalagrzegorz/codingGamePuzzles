// https://www.codingame.com/ide/puzzle/brackets-extreme-edition

// const expression = readline();
const expression = '{([]){}()}';
// const expression = '][';
// const expression = ']';

interface Brackets {
  [propName: string]: number;
}

function result() {
  const brackets: Brackets = {
    '{': 0,
    '(': 0,
    '[': 0,
  };

  let indexOpenedBrackets = 0;

  let result = true;

  function add(char: string) {
    brackets[char] += ++indexOpenedBrackets;
  }

  function remove(char: string) {
    brackets[char] -= indexOpenedBrackets--;
  }

  // corner case of single 'closing bracket'
  function catchClosingBrace() {
    if (indexOpenedBrackets === -1) {
      result = false;
    }
  }

  function validateBraces() {
    for (const element of expression.split('')) {
      catchClosingBrace();

      switch (element) {
        case '{':
          add('{');
          break;

        case '}':
          remove('{');
          break;

        case '(':
          add('(');
          break;

        case ')':
          remove('(');
          break;

        case '[':
          add('[');
          break;

        case ']':
          remove('[');
          break;
      }
    }
  }

  function printResult() {
    for (const bracket of Object.keys(brackets)) {
      if (brackets[bracket] !== 0) {
        result = false;
      }
    }
    console.log(result);
  }

  validateBraces();

  catchClosingBrace();

  printResult();

}

result();
