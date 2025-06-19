function outer() { // Kani nga function tawag og outer function. Wala ni siya'y parameter.
// Ang mga function nga naa sa sulod niya gitawag og inner functions.
// Closure ni siya, meaning ang variable nga "score" protected og di ma-access sa gawas direkta.

  let score = 5; // Gideclare ang variable nga "score" nga ang value kay 5.

  function increasePts(points) {
    // Inner function ni nga modawat og parameter nga "points".
    // Ang buhaton niya kay i-add ang value sa "points" ngadto sa "score".
    score += points;
    console.log(`increase: ${score}`); // I-display ang updated score gamit template string.
  }

  function decreasePts(points) {
    // Inner function gihapon, parehas sa increasePts pero minus ni siya.
    score -= points; // I-minus ang value sa "points" gikan sa "score".
    console.log(`decrease: ${score}`); // Ipakita ang updated score.
  }

  function current() {
    // Inner function nga walay parameter.
    // Ipakita lang niya ang kasamtangang (current) score.
    console.log(`Final Score: ${score}`);
  }

  // I-return nato ang tulo ka functions aron magamit sila sa gawas gamit object notation.
  return { increasePts, decreasePts, current };
}


// Gamit ta og variable nga "acces" aron i-store ang result sa pag-invoke sa outer().
const acces = outer();

// Kung ato i-try og ilisan ang acces.score = 19999, dili na niya maapektuhan ang "score"
// kay ang "score" variable kay private (naas sulod sa closure).
acces.score = 19999; // <-- Dili ni maka-apekto sa tinuod nga score.

// Gi-invoke nato ang increasePts() og gipasa ang value nga 10.
acces.increasePts(10); // So score = 5 + 10 = 15
// Gi-invoke nato ang increasePts() og gipasa ang value nga 10.
acces.increasePts(10); // So score = 5 + 10 = 15
// Gi-invoke nato ang increasePts() og gipasa ang value nga 10.
acces.increasePts(10); // So score = 5 + 10 = 15
// Gi-invoke nato ang increasePts() og gipasa ang value nga 10.
acces.increasePts(10); // So score = 5 + 10 = 15
// Gi-invoke nato ang increasePts() og gipasa ang value nga 10.
acces.increasePts(10); // So score = 5 + 10 = 15
// Gi-invoke nato ang increasePts() og gipasa ang value nga 10.
acces.increasePts(10); // So score = 5 + 10 = 15
// Gi-invoke nato ang increasePts() og gipasa ang value nga 10.
acces.increasePts(10); // So score = 5 + 10 = 15
// Gi-invoke nato ang increasePts() og gipasa ang value nga 10.
acces.increasePts(10); // So score = 5 + 10 = 15


// Gi-invoke napud nato ang decreasePts() og gipasa ang value nga 10.
acces.decreasePts(10); // So score = 15 - 10 = 5

// Gi-invoke nato ang current() aron makita ang latest value sa score.
acces.current(); // Output: Final Score: 5
