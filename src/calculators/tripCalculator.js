let twoCornOneGoose = ["G", "", "C", "G", "C", "", "G"];
let twoGeeseOneCorn = ["C", "", "G", "C", "G", "", "C"];
// let oneGeeseOneCornOneFox1 = ["G", "", "F", "G", "C", "", "G"];
// let oneGeeseOneCornOneFox2 = ["G", "", "C", "G", "F", "", "G"];
let oneGeeseOneCorn = ["G", "", "C"];
let oneCornOneGeese = ["C", "", "G"];

export default (geese = 0, corn = 0, fox = 0) => {
  let totalArray = [];

  if (geese === 1 && corn === 1) {
    totalArray.push(oneCornOneGeese);
    totalArray.push(oneGeeseOneCorn);
  }

  if (geese === 1 && corn === 2) {
    totalArray.push(twoCornOneGoose);
  }

  if (geese === 2 && corn === 1) {
    totalArray.push(twoGeeseOneCorn);
  }

  if ((!corn || corn === 0) && geese > 0) {
    let geeseArray = [];
    for (let i = 0; i < geese - 1; i++) {
      geeseArray.push("G", "");
    }
    geeseArray.push("G");
    totalArray.push(geeseArray);
  }

  if ((!geese || geese === 0) && corn > 0) {
    let cornArray = [];
    for (let i = 0; i < corn - 1; i++) {
      cornArray.push("C", "");
    }
    cornArray.push("C");
    totalArray.push(cornArray);
  }

  if ((!geese || geese === 0) && (!corn || corn === 0) && fox > 0) {
    let foxArray = [];
    for (let i = 0; i < fox - 1; i++) {
      foxArray.push("F", "");
    }
    foxArray.push("F");
    totalArray.push(foxArray);
  }

  return totalArray;
};
