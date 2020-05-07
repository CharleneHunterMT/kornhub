let twoCornOneGoose = ["G", "", "C", "G", "C", "", "G"];
let twoGeeseOneCorn = ["C", "", "G", "C", "G", "", "C"];
let oneGeeseOneCorn = ["G", "", "C"];

export default (geese, corn) => {
  if (!corn && !geese) {
    return 0;
  }
  if (corn > 2 && geese > 2) {
    return undefined;
  }

  if (geese === 1 && corn === 1) {
    return oneGeeseOneCorn.length;
  }
  if (geese === 1 && corn === 2) {
    return twoGeeseOneCorn.length;
  }
  if (geese === 2 && corn === 1) {
    return twoCornOneGoose.length;
  }

  if (!corn || corn === 0) {
    let geeseArray = [];
    for (let i = 0; i < geese - 1; i++) {
      geeseArray.push("G", "");
    }
    geeseArray.push("G");
    return geeseArray.length;
  }
  if (!geese || geese === 0) {
    let cornArray = [];
    for (let i = 0; i < corn - 1; i++) {
      cornArray.push("C", "");
    }
    cornArray.push("C");
    return cornArray.length;
  }
  return 0;
};
