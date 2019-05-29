/*
https://www.codingame.com/training/easy/the-river-ii-

A digital river is a sequence of numbers where every number is followed by the same number plus the sum of its digits. In such a sequence 123 is followed by 129 (since 1 + 2 + 3 = 6), which again is followed by 141.

We call a digital river river K, if it starts with the value K.

For example, river 7 is the sequence beginning with {7, 14, 19, 29, 40, 44, 52, ... } and river 471 is the sequence beginning with {471, 483, 498, 519, ... }.

Digital rivers can meet. This happens when two digital rivers share the same values. River 32 meets river 47 at 47, while river 471 meets river 480 at 519.

Given a number decide, whether it can be a meeting point of two or more digital rivers. For example, it is easy to check that only river 20 contains the number 20 in its sequence (as a starting point).

(Idea : BIO'99) */

// const r1 = parseInt(readline());

// weź liczbę 2 i sprawdź jej cyfrową rzekę
// 2, 4, 8, 16, 23 ...  < r1
const r = 13;
let riverSource = 2;
let resultRiver = 'NO';

function checkRiverSource(currentDigit: number) {
  do {
    const sum = currentDigit
      .toString()
      .split('')
      .map(Number)
      .reduce((prev, curr) => prev + curr);
    currentDigit += sum;
    
    if (currentDigit == r) {
      return true;
    }
  } while (currentDigit < r);
}

while (riverSource < r) {
  if (checkRiverSource(riverSource)) {
    resultRiver = 'YES';
    break;
  }
  riverSource++;
}

console.log(resultRiver)

// console.log('YES|NO');
