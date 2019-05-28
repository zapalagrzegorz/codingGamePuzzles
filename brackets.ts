// https://www.codingame.com/ide/puzzle/brackets-extreme-edition


// const expression = readline();
const expression = '{[{iHTSc}]}p(R)m(){q({})';
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

  function add(char: string) {
    brackets[char] += ++indexOpenedBrackets;
  }
  function remove(char: string) {
    brackets[char] -= indexOpenedBrackets--;
  }


  for (const element of expression.split('')) {
    if(indexOpenedBrackets === -1){
      console.log('false');
      return;
    }

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

  // corner case of single 'closing bracket'
  if(indexOpenedBrackets === -1){
    console.log('false');
    return;
  }

  for (const bracket in brackets) {
    if (brackets[bracket] !== 0) {
      console.log('false');
      return;
    }
  }

  console.log('true');
}

result();
