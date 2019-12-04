const checkSum = data => {
  let doubles = 0;
  let triples = 0;
  const checkItem = letters => {
    let results = {};
    let doub = false;
    let trip = false;
    letters.forEach(char =>
      results[char] ? (results[char] = results[char] + 1) : (results[char] = 1)
    );
    for (let item in results) {
      if (results[item] === 2 && !doub) {
        doubles += 1;
        doub = true;
      }
      if (results[item] === 3 && !trip) {
        triples += 1;
        trip = true;
      }
    }
  };
  for (let item in data) {
    const letters = Array.from(data[item]);
    checkItem(letters);
  }
  return doubles * triples;
};

module.exports = checkSum;
