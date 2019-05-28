// https://www.codingame.com/ide/puzzle/brackets-extreme-edition

// const expression = readline();
const expression = '{(})';

// Write an action using console.log()
// To debug: console.error('Debug messages...');
let indexOpenedBrackets = 1;

const brackets = {
  '{': {
    value: 0,
    indexOpenedBrackets: 1,
  },
  '(': {
    value: 0,
    indexOpenedBrackets: 2,
  },
  '[': {
    value: 0,
    indexOpenedBrackets: 0,
  },
};

expression.split('');

for (const element of expression.split('')) {
  switch (element) {
    case '{':
      brackets['{'].value += 1;
      brackets['{'].indexOpenedBrackets += indexOpenedBrackets;

      indexOpenedBrackets++;

      break;
    case '}':
      brackets['{'].value -= 1;
      brackets['{'].indexOpenedBrackets -= indexOpenedBrackets;

      indexOpenedBrackets--;
      break;
    case '(':
      brackets['('].value -= 1;
      brackets['('].indexOpenedBrackets -= indexOpenedBrackets;

      indexOpenedBrackets--;
      break;
    case ')':
      brackets['('].value -= 1;
      brackets['('].indexOpenedBrackets -= indexOpenedBrackets;

      indexOpenedBrackets--;
      break;
    case '[':
      brackets['['].value -= 1;
      brackets['['].indexOpenedBrackets -= indexOpenedBrackets;

      indexOpenedBrackets--;
      break;
    case ']':
      brackets['['].value -= 1;
      brackets['['].indexOpenedBrackets -= indexOpenedBrackets;

      indexOpenedBrackets--;
      break;
    default:
      break;
  }
}

for (const bracket in brackets){
    if(brackets[bracket].value != 0){
        return console.log('false');
    }
}
console.log(Math.max(...brackets) ? 'false' : 'true');
// console.log('true/false');
