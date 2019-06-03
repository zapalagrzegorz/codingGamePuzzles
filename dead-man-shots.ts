// https://www.codingame.com/ide/puzzle/dead-mens-shot

/* Captain Jack Sparrow and his pirate friends have been drinking one night. After plenty of rum, they got into an argument about who is the best shot. Captain Jack takes up some paint and paints a target on a nearby wall. The pirates take out their guns and start shooting.

Your task is to help the drunk pirates find out which shots hit the target.

Captain Jack Sparrow drew the target by drawing N lines. The lines form a convex shape defined by N corners. A convex shape has all internal angles less than 180 degrees. For example, all internal angles in a square are 90 degrees.

A shot within the convex shape or on one of the lines is considered a hit.
Input
Line 1: An integer N for the number of corners.
Next N lines: Two space-separated integers x and y for the coordinates of a corner. The corners are listed in a counterclockwise manner. The target is formed by connecting the corners together with lines and connecting the last corner with the first one.
Line N+1: An integer M for the number of shots.
Next M lines: Two space-separated integers x and y for the coordinates of each shot.
Output
M lines with either "hit" or "miss" depending on whether the shot hit the target or not.
Constraints
3 ≤ N ≤ 10
1 ≤ M ≤ 10
-10000 < x,y < 10000

*/
interface point {
  x: number;
  y: number;
}

function iloczyn(P1: point, P2: point, P3: point): number {
  return (P2.x - P1.x) * (P3.y - P1.y) - (P3.x - P1.x) * (P2.y - P1.y);
}

function lezy_miedzy(P1: point, P2: point, P3: point) {
  if (Math.min(P1.x, P2.x) <= P3.x && P3.x <= Math.max(P1.x, P2.x)) {
    return true; 
  }
}
const points = [];
//   const N = 4;
//   for (let i = 0; i < N; i++) {
// var inputs = readline().split(' ');
// const x = parseInt(inputs[0]);
// const y = parseInt(inputs[1]);
const x1 = 0;
const y1 = 0;

const x2 = 100;
const y2 = 0;

const x3 = 150;
const y3 = 50;

const x4 = 100;
const y4 = 100;

const x5 = 0;
const y5 = 100;

points.push({
  x: x1,
  y: y1,
});
points.push({
  x: x2,
  y: y2,
});
points.push({
  x: x3,
  y: y3,
});
points.push({
  x: x4,
  y: y4,
});
points.push({
  x: x5,
  y: y5,
});


const M = 1;
for (let i = 0; i < M; i++) {
  // var inputs = readline().split(' ');
  // const x = parseInt(inputs[0]);
  // const y = parseInt(inputs[1]);

  // koordynaty strzału
  const Mx = 100;
  const My = 50;

  // punkt x końcowego punktu P, który jest na pewno poza figurą
  const Px = 10001;

  let numberOfCrossing = 0;
  let isOnLine = false;

  // koordynaty odcinków
  for (let j = 0; j < points.length; j++) {
    const W1x = points[j].x;
    const W1y = points[j].y;

    let W2x;
    let W2y;

    const punktPierwszy = {
      x: W1x,
      y: W1y,
    };

    // co do zasady bierzemy kolejny odcinek
    // dla ostatniego punktu, bierzemy pierwszy punkt
    if (j + 1 < points.length) {
      W2x = points[j + 1].x;
      W2y = points[j + 1].y;
    } else {
      W2x = points[0].x;
      W2y = points[0].y;
    }

    const punktDrugi: point = {
      x: W2x,
      y: W2y,
    };


    const strzalPoint: point = {
      x: Mx,
      y: My,
    };

    const strzalHelperPoint: point = {
      x: Px,
      y: My,
    };

    const S_1 = iloczyn(punktPierwszy, strzalPoint, punktDrugi);
    const S_2 = iloczyn(punktPierwszy, strzalHelperPoint, punktDrugi);
    const S_3 = iloczyn(strzalPoint, punktPierwszy, strzalHelperPoint);
    const S_4 = iloczyn(strzalPoint, punktDrugi, strzalHelperPoint);

    if (
      ((S_1 > 0 && S_2 < 0) || (S_1 < 0 && S_2 > 0))
      && ((S_3 < 0 && S_4 > 0) || (S_3 > 0 && S_4 < 0))
    ) {
      numberOfCrossing++;
    } else if (S_1 == 0 && lezy_miedzy(punktPierwszy, punktDrugi, strzalPoint)) isOnLine = true;
    else if (S_2 === 0 && lezy_miedzy(punktPierwszy, punktDrugi, strzalHelperPoint)) {
      isOnLine = true;
    } else if (S_3 === 0 && lezy_miedzy(strzalPoint, strzalHelperPoint, punktPierwszy)) {
      isOnLine = true;
    } else if (S_4 === 0 && lezy_miedzy(strzalPoint, strzalHelperPoint, punktDrugi)) {
      isOnLine = true;
    }
  }

  if (!isOnLine) {
    if (numberOfCrossing !== 0 && numberOfCrossing % 2 == 1) {
      console.log('hit');
    } else {
      console.log('miss');
    }
  } else {
    console.log('hit');
  }
}