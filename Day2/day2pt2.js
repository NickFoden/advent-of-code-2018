const checkSum = data => {
  let matches = [];
  let stop = false;
  for (let item in data) {
    if (stop) {
      break;
    }
    const letters = Array.from(data[item]);
    for (let single in data) {
      const singleArray = Array.from(data[single]);
      let missing = 0;
      for (let i = 0; i < singleArray.length; i++) {
        if (letters[i] !== singleArray[i]) {
          missing += 1;
        }
      }
      if (missing === 1) {
        matches[0] = letters.join("");
        matches[1] = singleArray.join("");
        stop = true;
      }
    }
  }
  const finalAnswer = Array.from(matches[0])
    .filter(char => matches[1].includes(char))
    .join("");

  return finalAnswer;
};
module.exports = checkSum;
