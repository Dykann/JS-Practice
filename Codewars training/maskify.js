function maskify(cc) {
  const shownNumbers = cc.slice(-4);
  const hiddenNumbers = cc.slice(0, -4);
  const maskifiedNumbers = "#".repeat(hiddenNumbers.length);
  console.log(maskifiedNumbers + shownNumbers);
}

maskify("44518210");
