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

(function () {
  const N = 4;
  const points = [];
  for (let i = 0; i < N; i++) {
    // var inputs = readline().split(' ');
    // const x = parseInt(inputs[0]);
    // const y = parseInt(inputs[1]);
    const x1 = -100;
    const y1 = -100;
    
    const x2 = 100;
    const y2 = -100;

    const x3 = 100;
    const y3 = 100;

    const x4 = -100;
    const y4 = 100;

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
  }

// 2. czy punkt należy do odcinka 
// http://www.algorytm.org/geometria-obliczeniowa/przecinanie-sie-odcinkow.html

  const M = 5;
  for (let i = 0; i < M; i++) {
    // var inputs = readline().split(' ');
    // const x = parseInt(inputs[0]);
    // const y = parseInt(inputs[1]);
    
    // koordynaty strzału x3, y3
    const x3 = 0;
    const y3 = 0;
    // 99 99
    // 101 101
    // 80 -101
    // 0 -100

    // x odcinka p
    let x4 = -10001;

    for(let i = 0; i < points.length; i++){
        if(points[i].x > x4){
            x4 = points[i].x
        }; 
    }

    x4 = x4+1;

    // koordynaty odcinków 
    for(let i = 0; i < points.length; i++){
        
        const x1 = points[i].x;
        const y1 = points[i].y;

        let x2, y2;
        // co do zasady bierzemy kolejny odcinek
        // dla ostatniego punktu, bierzemy pierwszy punkt
        if(i+1 < points.length){
            x2 = points[i+1].x;
            y2 = points[i+1].y;
        } else{
            x2 = points[0].x;
            y2 = points[0].y;
        }
        
        // 2. czy punkt należy do odcinka V
        // 2.1 czy punkty są współliniowe. Wspólniowe gdy: 
        // det(a,b,c) = x1y2 + x2y3 + x3y1 - x3y2 - x1y3 - x2y1
        const det = x1*y2 + x2*y3 + x3*y1 - x3*y2 - x1*y3 - x2*y1;
        // 2.2 min(x1, x2) <= x3 <= max(x1, x2) oraz min(y1, y2)<= y3 <= max(y1, y2)
        if(det === 0){
            if(Math.min(x1, x2) <= x3 && x3 <= Math.max(x1, x2) && Math.min(y1, y2)<= y3 && y3 <= Math.max(y1, y2)){
                console.log('hit');
            }
        }
        // odcinek próbny p
        // x3, y3 - x4, y3
        // policzyć czy odcinek przecina dany bok i dodaj do sumy liczby przecinanych boków

    }
  }
}());


// 3. stworzyć odcinek między punktem (x, y) a (największym x figury + 1, y)
// 4. policzyć czy odcinek przecina dany bok
// 5. czyl liczba jest parzystą czy nieparzysta
// 3. dla kwadrata/prostokąta - to czy X jest mniejszy od punktu o największej wartości X i większy od punktu o najmniejszej wartości x