let twoCornOneGoose = ["G", "", "C", "G", "C", "", "G"];
let twoGeeseOneCorn = ["C", "", "G", "C", "G", "", "C"];
let oneGeeseOneCornOneFox1 = ["G", "", "F", "G", "C", "", "G"];
let oneGeeseOneCornOneFox2 = ["G", "", "C", "G", "F", "", "G"];
let oneGeeseOneCorn = ["G", "", "C"];
let oneCornOneGeese = ["C", "", "G"];

export default (geese, corn) => {
  if (!corn && !geese) {
    return 0;
  }
  if (corn > 2 && geese > 2) {
    return undefined;
  }
  if (geese === 1 && corn === 1) {
    let totalArray = [];
    totalArray.push(oneCornOneGeese);
    totalArray.push(oneGeeseOneCorn);
    
    return totalArray;
  }
  if (geese === 1 && corn === 2) {
    let totalArray = [];
    totalArray.push(twoCornOneGoose)
    return totalArray;
  }
  if (geese === 2 && corn === 1) {
    let totalArray = [];
    totalArray.push(twoGeeseOneCorn)
    return totalArray;
  }

  if (!corn || corn === 0) {
    let totalGeeseArray = [];
    let geeseArray = [];
    for (let i = 0; i < geese - 1; i++) {
      geeseArray.push("G", "");
    }
    geeseArray.push("G");
    totalGeeseArray.push(geeseArray);
    return totalGeeseArray;
  }

  if (!geese || geese === 0) {
    let totalCornArray = [];
    let cornArray = [];
    for (let i = 0; i < corn - 1; i++) {
      cornArray.push("C", "");
    }
    cornArray.push("C");
    totalCornArray.push(cornArray);
    return totalCornArray;
  }
  return 0;
};
