import isOdd from "is-odd"; // I know isOdd is a useless package I can code it myself but this is just to try npm packages

import famille, { hong } from "./family";
import sum, { minus } from "./sum";

// default import
// named import

console.log("chingo");
console.log(hong);
console.log(famille);
console.log(sum(5, 15));
console.log(minus(10, 8));

console.log(isOdd(104));
