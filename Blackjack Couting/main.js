var count = 0;

function cc(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      console.log("je suis dans le case");
      count++;
      return;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  var holdbet = "Hold";
  if (count > 0) {
    holdbet = "Bet";
  }

  return count + " " + holdbet;
}

cc(2);
cc(3);
cc(7);
cc("K");
cc("A");
console.log(cc("J"));
console.log(cc("Q"));
console.log(cc("K"));
console.log(cc("A"));
