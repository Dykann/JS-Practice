function solution(str) {
  let finalString = str;
  if (str.length % 2 !== 0) finalString += "_";

  const arrStr = [...finalString];

  const finalArr = [];

  arrStr.forEach((element, index) => {
    console.log(element, index);
    if (index % 2 !== 0) return null;
    finalArr.push([element + arrStr[index + 1]]);
  });

  console.log(finalArr.flat());
}
solution("texto");
